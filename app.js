/* 성준이 공부방 - 앱 로직 */
(function () {
  'use strict';

  var DAYS = (window.STUDY_DAYS || []).slice().sort(function (a, b) { return a.day - b.day; });
  var STORE_KEY = 'sungjun-study-v1';
  var MOM_TOPIC = 'https://ntfy.sh/biblia-sj-mom-202611';
  var KID_TOPIC = 'https://ntfy.sh/biblia-sj-kid-202611';
  var CYCLE = 14;

  var SUBJECTS = [
    { key: 'math', label: '수학' },
    { key: 'english', label: '영어' },
    { key: 'history', label: '한국사' },
    { key: 'person', label: '위인' },
    { key: 'science', label: '과학' }
  ];

  var WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  /* ---------------- state ---------------- */

  var S = loadState();
  var activeTab = 'math';
  var hintOpen = {};

  function loadState() {
    var fallback = { startDate: dateKey(new Date()), day: null, theme: null, records: {} };
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return fallback;
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return fallback;
      parsed.records = parsed.records || {};
      if (!parsed.startDate) parsed.startDate = dateKey(new Date());
      return parsed;
    } catch (e) {
      return fallback;
    }
  }

  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* 저장 공간 부족 등은 무시 */ }
  }

  function dateKey(d) {
    var y = d.getFullYear();
    var m = ('0' + (d.getMonth() + 1)).slice(-2);
    var dd = ('0' + d.getDate()).slice(-2);
    return y + '-' + m + '-' + dd;
  }

  function todayKey() { return dateKey(new Date()); }

  function dayDiff(a, b) {
    var pa = a.split('-').map(Number);
    var pb = b.split('-').map(Number);
    var t1 = Date.UTC(pa[0], pa[1] - 1, pa[2]);
    var t2 = Date.UTC(pb[0], pb[1] - 1, pb[2]);
    return Math.round((t1 - t2) / 86400000);
  }

  function recommendedDay() {
    var gap = dayDiff(todayKey(), S.startDate);
    if (!isFinite(gap) || gap < 0) gap = 0;
    return (gap % CYCLE) + 1;
  }

  function cur() {
    var key = todayKey();
    if (!S.records[key]) {
      S.records[key] = { day: null, ans: {}, seen: {}, notified: false };
    }
    var rec = S.records[key];
    if (!rec.ans) rec.ans = {};
    if (!rec.seen) rec.seen = {};
    if (!rec.day) rec.day = S.day || recommendedDay();
    return rec;
  }

  function dayData(n) {
    for (var i = 0; i < DAYS.length; i++) { if (DAYS[i].day === n) return DAYS[i]; }
    return DAYS[0];
  }

  function currentDay() { return cur().day || 1; }

  function thisDay() { return dayData(currentDay()); }

  /* ---------------- grading helpers ---------------- */

  function norm(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[()]/g, '')
      .replace(/cm2|cm²|cm3|cm³|cm/g, '')
      .replace(/개|컵|명|번|배|원|도/g, '')
      .replace(/입니다|이에요|예요/g, '')
      .replace(/[.,]$/g, '');
  }

  function toNum(s) {
    var t = norm(s);
    if (/^-?\d+(\.\d+)?\/\d+(\.\d+)?$/.test(t)) {
      var p = t.split('/');
      var v = parseFloat(p[0]) / parseFloat(p[1]);
      return isFinite(v) ? v : null;
    }
    if (/^-?\d+(\.\d+)?$/.test(t)) return parseFloat(t);
    if (/^\d+과\d+\/\d+$/.test(t)) {
      var m = t.match(/^(\d+)과(\d+)\/(\d+)$/);
      return Number(m[1]) + Number(m[2]) / Number(m[3]);
    }
    return null;
  }

  function matches(input, answers) {
    var n = norm(input);
    if (!n) return false;
    var x = toNum(n);
    for (var i = 0; i < answers.length; i++) {
      if (norm(answers[i]) === n) return true;
      var y = toNum(answers[i]);
      if (x !== null && y !== null && Math.abs(x - y) < 1e-9) return true;
    }
    return false;
  }

  function scoreOf(rec, prefix, total) {
    var correct = 0, answered = 0;
    for (var i = 0; i < total; i++) {
      var v = rec.ans[prefix + i];
      if (v === undefined) continue;
      answered++;
      if (prefix === 'm') {
        if (v && v.ok) correct++;
      } else {
        var q = findQuiz(prefix + i);
        if (q && v === q.answer) correct++;
      }
    }
    return { correct: correct, answered: answered };
  }

  function doneOf(rec) {
    var a = rec.ans, seen = rec.seen || {};
    var math = [0, 1, 2].every(function (i) { return a['m' + i] !== undefined; });
    var travel = [0, 1, 2, 3, 4].every(function (i) { return !!seen['t' + i]; });
    var english = travel && a.eq0 !== undefined && a.eq1 !== undefined;
    var history = true;
    for (var i = 0; i < 10; i++) { if (a['h' + i] === undefined) { history = false; break; } }
    var person = a.p0 !== undefined && a.p1 !== undefined;
    var science = a.s0 !== undefined && a.s1 !== undefined;
    return { math: math, english: english, history: history, person: person, science: science };
  }

  function progressNow() {
    var rec = cur();
    var done = doneOf(rec);
    var n = SUBJECTS.filter(function (s) { return done[s.key]; }).length;
    return { done: done, count: n };
  }

  function streak() {
    var n = 0;
    var d = new Date();
    function studied(key) {
      var r = S.records[key];
      if (!r) return false;
      var dn = doneOf(r);
      return dn.math || dn.english || dn.history || dn.person || dn.science;
    }
    if (!studied(dateKey(d))) d.setDate(d.getDate() - 1);
    var guard = 0;
    while (studied(dateKey(d)) && guard < 400) {
      n++;
      d.setDate(d.getDate() - 1);
      guard++;
    }
    return n;
  }

  /* ---------------- html helpers ---------------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var toastTimer = null;
  function toast(msg) {
    var el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2600);
  }

  /* ---------------- render: header & tabs ---------------- */

  function renderHeader() {
    var now = new Date();
    var d = thisDay();
    document.getElementById('todayText').textContent =
      now.getFullYear() + '년 ' + (now.getMonth() + 1) + '월 ' + now.getDate() + '일 ' + WEEKDAY[now.getDay()] +
      ' · 2주 코스 ' + CYCLE + '일 중 ' + d.day + '일차';

    var p = progressNow();
    document.getElementById('progText').textContent = p.count + ' / 5';
    document.getElementById('progBar').style.width = (p.count / 5 * 100) + '%';
    var bar = document.querySelector('.bar');
    if (bar) bar.setAttribute('aria-valuenow', String(p.count));

    var st = streak();
    document.getElementById('streakText').textContent = st + '일';

    document.getElementById('dayNum').textContent = d.day + '일차';
    document.getElementById('dayTheme').textContent = d.theme;

    document.getElementById('prevDay').disabled = d.day <= 1;
    document.getElementById('nextDay').disabled = d.day >= CYCLE;

    var rec = cur();
    var notifyBtn = document.getElementById('notifyBtn');
    if (rec.notified) {
      notifyBtn.textContent = '엄마에게 다시 알리기';
      notifyBtn.classList.add('sent');
    } else {
      notifyBtn.textContent = '오늘 공부 완료! 엄마에게 알리기';
      notifyBtn.classList.remove('sent');
    }

    var hint = document.getElementById('notifyHint');
    if (p.count === 5) {
      hint.textContent = '5과목 모두 끝냈어요. 알림을 보내면 엄마 폰으로 알림이 가요.';
    } else {
      hint.textContent = '오늘 ' + (5 - p.count) + '과목이 남았어요. 다 끝내면 자동으로 알림이 가요.';
    }
  }

  function renderTabs() {
    var p = progressNow();
    var nav = document.getElementById('tabs');
    nav.innerHTML = SUBJECTS.map(function (s) {
      var on = s.key === activeTab;
      return '<button class="tab' + (p.done[s.key] ? ' done' : '') + '" role="tab" data-act="tab" data-tab="' + s.key +
        '" aria-selected="' + (on ? 'true' : 'false') + '">' +
        '<span class="dot" aria-hidden="true"></span>' + esc(s.label) + '</button>';
    }).join('');
  }

  /* ---------------- render: math ---------------- */

  function renderMath() {
    var d = thisDay();
    var m = d.math;
    var rec = cur();
    var html = '';
    html += '<section class="card">';
    html += '<span class="eyebrow">최상위 사고력 수학</span>';
    html += '<h2 class="topic-title">' + esc(m.topic) + '</h2>';
    html += '<p class="lead">' + esc(m.intro) + '</p>';
    html += '</section>';

    html += '<div class="section-head"><h2>오늘의 3문제</h2><span>정답을 확인하면 풀이가 열려요</span></div>';

    m.problems.forEach(function (p, i) {
      var key = 'm' + i;
      var ans = rec.ans[key];
      html += '<section class="card problem">';
      html += '<div class="p-head"><span class="level ' + esc(p.level) + '">' + esc(p.level) + '</span>' +
        '<span class="p-num">문제 ' + (i + 1) + ' / 3</span></div>';
      html += '<p class="q">' + esc(p.q) + '</p>';

      if (ans === undefined) {
        html += '<form class="answer-row" data-act="math" data-key="' + key + '">' +
          '<input type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" ' +
          'placeholder="답을 입력하세요 (예: 3/4, 12)" aria-label="문제 ' + (i + 1) + ' 답">' +
          '<button class="btn" type="submit">확인</button></form>';
      } else {
        html += '<p class="verdict ' + (ans.ok ? 'ok' : 'no') + '">' +
          (ans.ok ? '정답입니다.' : '다시 생각해 볼까요? 내 답: ' + esc(ans.v)) + '</p>';
      }

      html += '<div class="hint-box"' + (hintOpen[key] ? '' : ' hidden') + '><b>힌트</b> ' + esc(p.hint) + '</div>';
      if (ans !== undefined) {
        html += '<div class="solution"><b>풀이</b>' + esc(p.solution) + '</div>';
      }
      html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">';
      html += '<button class="btn ghost small" data-act="hint" data-key="' + key + '">' +
        (hintOpen[key] ? '힌트 닫기' : '힌트 보기') + '</button>';
      if (ans !== undefined) {
        html += '<button class="btn ghost small" data-act="retry" data-key="' + key + '">다시 풀기</button>';
      }
      html += '</div>';
      html += '</section>';
    });

    var sc = scoreOf(rec, 'm', 3);
    html += '<p class="score-row"><span>지금까지 ' + sc.answered + '/3 문제 확인</span><b>' +
      (sc.answered ? '맞힌 문제 ' + sc.correct + '개' : '천천히 시작해 보자') + '</b></p>';
    html += doneFlag('math');
    return html;
  }

  /* ---------------- render: english ---------------- */

  function renderEnglish() {
    var d = thisDay();
    var e = d.english;
    var rec = cur();
    var html = '';

    html += '<div class="section-head"><h2>여행 영어</h2><span>2027년 1월, 발리에서 쓸 5문장</span></div>';
    html += '<section class="card">';
    html += '<span class="eyebrow">' + esc(e.travel.theme) + '</span>';
    html += '<p class="lead">발음 버튼을 눌러 듣고, 해석 보기로 뜻을 확인하세요.</p>';
    e.travel.items.forEach(function (it, i) {
      var open = !!rec.seen['t' + i];
      html += '<div class="sentence' + (open ? ' open' : '') + '">';
      html += '<span class="num">' + (i + 1) + '</span>';
      html += '<div class="body"><div class="en">' + esc(it.en) + '</div><div class="ko">' + esc(it.ko) + '</div></div>';
      html += '<div class="tools">';
      html += '<button class="mini" data-act="speak" data-i="' + i + '" aria-label="' + (i + 1) + '번 문장 발음 듣기">발음</button>';
      html += '<button class="mini' + (open ? ' on' : '') + '" data-act="reveal" data-k="t' + i + '">' +
        (open ? '해석 닫기' : '해석 보기') + '</button>';
      html += '</div></div>';
    });
    html += '</section>';

    var n = e.news;
    html += '<div class="section-head"><h2>영자신문 1편</h2><span>문장별 해석 · 단어 5개 · 퀴즈 2문항</span></div>';
    html += '<section class="card">';
    html += '<span class="eyebrow">Junior Times</span>';
    html += '<h3 class="news-title">' + esc(n.title) + '</h3>';
    html += '<p class="news-meta">' + esc(n.source) + ' · 오늘의 기사</p>';
    n.body.forEach(function (s, i) {
      var k = 'n' + i;
      var open = !!rec.seen[k];
      html += '<div class="sentence' + (open ? ' open' : '') + '">';
      html += '<span class="num">' + (i + 1) + '</span>';
      html += '<div class="body"><div class="en">' + esc(s.en) + '</div><div class="ko">' + esc(s.ko) + '</div></div>';
      html += '<div class="tools">';
      html += '<button class="mini" data-act="speakText" data-k="news' + i + '" aria-label="문장 발음 듣기">발음</button>';
      html += '<button class="mini' + (open ? ' on' : '') + '" data-act="reveal" data-k="' + k + '">' +
        (open ? '해석 닫기' : '해석 보기') + '</button>';
      html += '</div></div>';
    });
    html += '<div class="words">' + n.words.map(function (w) {
      return '<span class="word"><b>' + esc(w.w) + '</b><span>' + esc(w.m) + '</span></span>';
    }).join('') + '</div>';
    html += '</section>';

    html += '<div class="section-head"><h2>독해 확인 퀴즈</h2><span>2문항</span></div>';
    html += '<section class="card">' + quizHtml(n.quiz, 'eq', rec) + '</section>';

    html += doneFlag('english');
    return html;
  }

  /* ---------------- render: history ---------------- */

  function renderHistory() {
    var d = thisDay();
    var h = d.history;
    var rec = cur();
    var html = '';

    html += '<section class="card">';
    html += '<span class="eyebrow">EBS 스토리 한국사</span>';
    html += '<h2 class="topic-title">' + esc(h.era) + '</h2>';
    html += '<p class="lead">' + esc(h.focus) + '</p>';
    html += '<div class="links">';
    html += '<a class="link-btn primary" href="' + esc(h.ebs) + '" target="_blank" rel="noopener">EBS 초등 스토리 한국사</a>';
    html += '<a class="link-btn" href="https://www.youtube.com/results?search_query=' + encodeURIComponent(h.yt) +
      '" target="_blank" rel="noopener">유튜브에서 찾아보기</a>';
    html += '</div>';
    html += '<ul class="points">' + h.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>';
    html += '</section>';

    html += '<div class="section-head"><h2>핵심 퀴즈 10문제</h2><span>답을 고르면 바로 채점돼요</span></div>';
    html += '<section class="card">' + quizHtml(h.quiz, 'h', rec) + scoreRow(rec, 'h', 10) + '</section>';
    html += doneFlag('history');
    return html;
  }

  /* ---------------- render: person ---------------- */

  function renderPerson() {
    var d = thisDay();
    var p = d.person;
    var rec = cur();
    var html = '';

    html += '<div class="section-head"><h2>오늘의 인물</h2><span>1명</span></div>';
    html += '<section class="card">';
    html += '<div class="person-head">';
    html += '<div class="person-badge" aria-hidden="true">' + esc(String(p.name).slice(0, 1)) + '</div>';
    html += '<div><h3 class="person-name">' + esc(p.name) + '</h3>';
    html += '<p class="person-meta">' + esc(p.life) + ' · ' + esc(p.tag) + '</p></div></div>';
    html += '<p class="body-text">' + esc(p.summary) + '</p>';
    html += '<ul class="facts">' + p.facts.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>';
    html += '</section>';

    html += '<div class="section-head"><h2>확인 퀴즈</h2><span>2문항</span></div>';
    html += '<section class="card">' + quizHtml(p.quiz, 'p', rec) + '</section>';
    html += doneFlag('person');
    return html;
  }

  /* ---------------- render: science ---------------- */

  function renderScience() {
    var d = thisDay();
    var s = d.science;
    var rec = cur();
    var html = '';

    html += '<div class="section-head"><h2>과학·시사 상식</h2><span>1분 읽기</span></div>';
    html += '<section class="card">';
    html += '<span class="eyebrow">1분 읽기</span>';
    html += '<h2 class="topic-title">' + esc(s.title) + '</h2>';
    html += '<p class="lead">' + esc(s.summary) + '</p>';
    html += '<p class="body-text">' + esc(s.body) + '</p>';
    html += '</section>';

    html += '<div class="section-head"><h2>상식 퀴즈</h2><span>2문항</span></div>';
    html += '<section class="card">' + quizHtml(s.quiz, 's', rec) + '</section>';
    html += doneFlag('science');
    return html;
  }

  /* ---------------- shared quiz rendering ---------------- */

  function quizHtml(quiz, prefix, rec) {
    var letters = ['A', 'B', 'C', 'D', 'E'];
    return quiz.map(function (q, qi) {
      var key = prefix + qi;
      var picked = rec.ans[key];
      var answered = picked !== undefined;
      var out = '<div class="quiz-q">';
      out += '<p class="quiz-prompt">' + (qi + 1) + '. ' + esc(q.q) + '</p>';
      out += '<div class="choices">';
      q.choices.forEach(function (c, ci) {
        var cls = 'choice';
        var mark = letters[ci] || String(ci + 1);
        if (answered) {
          if (ci === q.answer) { cls += ' correct'; mark = 'O'; }
          else if (ci === picked) { cls += ' wrong'; mark = 'X'; }
        }
        out += '<button class="' + cls + '" data-act="choice" data-k="' + key + '" data-idx="' + ci + '"' +
          (answered ? ' disabled' : '') + '><span class="mark">' + mark + '</span><span>' + esc(c) + '</span></button>';
      });
      out += '</div>';
      if (answered) {
        out += '<div class="explain"><b>' + (picked === q.answer ? '정답' : '아쉬워요') + '</b> · ' + esc(q.explain) + '</div>';
      }
      out += '</div>';
      return out;
    }).join('');
  }

  function scoreRow(rec, prefix, total) {
    var s = scoreOf(rec, prefix, total);
    if (!s.answered) return '<p class="score-row"><span>아직 시작 전</span><b>0 / ' + total + '</b></p>';
    return '<p class="score-row"><span>' + s.answered + ' / ' + total + ' 문제 완료</span><b>' + s.correct + ' / ' + total + ' 정답</b></p>';
  }

  function doneFlag(key) {
    var p = progressNow();
    if (!p.done[key]) return '';
    return '<p class="done-flag">이 과목 완료</p>';
  }

  /* ---------------- render: all ---------------- */

  function render() {
    renderHeader();
    renderTabs();
    var html = '';
    if (activeTab === 'math') html = renderMath();
    else if (activeTab === 'english') html = renderEnglish();
    else if (activeTab === 'history') html = renderHistory();
    else if (activeTab === 'person') html = renderPerson();
    else html = renderScience();
    document.getElementById('view').innerHTML = html;
  }

  /* ---------------- speech ---------------- */

  var voices = [];
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = window.speechSynthesis.getVoices() || [];
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) {
      toast('이 브라우저에서는 발음 듣기를 쓸 수 없어요.');
      return;
    }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.9;
      u.pitch = 1;
      if (!voices.length) loadVoices();
      var pick = null;
      for (var i = 0; i < voices.length; i++) {
        var v = voices[i];
        if (/^en[-_]/.test(v.lang) && /google|samsung|natural|enhanced/i.test(v.name)) { pick = v; break; }
      }
      if (!pick) {
        for (var j = 0; j < voices.length; j++) {
          if (/^en[-_]/i.test(voices[j].lang)) { pick = voices[j]; break; }
        }
      }
      if (pick) u.voice = pick;
      window.speechSynthesis.speak(u);
    } catch (e) {
      toast('발음을 재생하지 못했어요.');
    }
  }

  /* ---------------- notifications ---------------- */

  function summaryLines() {
    var d = thisDay();
    var rec = cur();
    var dn = doneOf(rec);
    var doneList = SUBJECTS.filter(function (s) { return dn[s.key]; }).map(function (s) { return s.label; });
    var lines = [];
    lines.push(todayKey() + ' · ' + d.day + '일차 공부 기록');
    lines.push('완료 과목(' + doneList.length + '/5): ' + (doneList.length ? doneList.join(', ') : '아직 없음'));
    var hs = scoreOf(rec, 'h', 10);
    if (hs.answered) lines.push('한국사 퀴즈: ' + hs.correct + '/' + 10 + ' 정답');
    var ms = scoreOf(rec, 'm', 3);
    if (ms.answered) lines.push('수학 3문제 중 ' + ms.correct + '문제 정답');
    lines.push('오늘 주제: ' + d.theme);
    return lines;
  }

  function notifyMom(auto) {
    var rec = cur();
    var body = summaryLines().join('\n');
    var btn = document.getElementById('notifyBtn');
    btn.disabled = true;
    return fetch(MOM_TOPIC, {
      method: 'POST',
      headers: {
        'Title': 'Study Complete',
        'Tags': 'white_check_mark',
        'Priority': 'default'
      },
      body: body
    }).then(function (res) {
      btn.disabled = false;
      if (!res.ok) throw new Error('HTTP ' + res.status);
      rec.notified = true;
      saveState();
      renderHeader();
      toast(auto ? '5과목 완료! 엄마에게 알림을 보냈어요.' : '엄마에게 알림을 보냈어요.');
      return true;
    }).catch(function (err) {
      btn.disabled = false;
      toast('알림을 보내지 못했어요. 인터넷 연결을 확인해 주세요.');
      return false;
    });
  }

  /* ---------------- events ---------------- */

  document.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-act]');
    if (!t) return;
    var act = t.getAttribute('data-act');

    if (act === 'tab') {
      activeTab = t.getAttribute('data-tab');
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (act === 'hint') {
      var hk = t.getAttribute('data-key');
      hintOpen[hk] = !hintOpen[hk];
      render();
      return;
    }

    if (act === 'retry') {
      var rk = t.getAttribute('data-key');
      delete cur().ans[rk];
      saveState();
      render();
      return;
    }

    if (act === 'reveal') {
      var k = t.getAttribute('data-k');
      var rec = cur();
      rec.seen[k] = !rec.seen[k];
      saveState();
      render();
      checkAutoNotify();
      return;
    }

    if (act === 'speak') {
      var it = thisDay().english.travel.items[Number(t.getAttribute('data-i'))];
      if (it) speak(it.en);
      return;
    }

    if (act === 'speakText') {
      var idx = Number(String(t.getAttribute('data-k')).replace('news', ''));
      var s = thisDay().english.news.body[idx];
      if (s) speak(s.en);
      return;
    }

    if (act === 'choice') {
      var key = t.getAttribute('data-k');
      var rec2 = cur();
      if (rec2.ans[key] !== undefined) return;
      var idx2 = Number(t.getAttribute('data-idx'));
      var quiz = findQuiz(key);
      if (!quiz) return;
      rec2.ans[key] = idx2;
      saveState();
      render();
      checkAutoNotify();
      if (idx2 === quiz.answer) toast('정답!');
      return;
    }
  });

  document.addEventListener('submit', function (ev) {
    var form = ev.target;
    if (!form || form.getAttribute('data-act') !== 'math') return;
    ev.preventDefault();
    var key = form.getAttribute('data-key');
    var input = form.querySelector('input');
    var val = input ? input.value : '';
    if (!val.trim()) { toast('답을 적어 보세요.'); return; }
    var i = Number(key.replace('m', ''));
    var problem = thisDay().math.problems[i];
    var ok = matches(val, problem.answer);
    var rec = cur();
    rec.ans[key] = { v: val.trim(), ok: ok };
    saveState();
    render();
    checkAutoNotify();
    if (ok) toast('정답!');
    return;
  });

  function findQuiz(key) {
    var d = thisDay();
    var prefix = key.replace(/\d+$/, '');
    var idx = Number(key.replace(/\D+/g, ''));
    var list = null;
    if (prefix === 'eq') list = d.english.news.quiz;
    else if (prefix === 'h') list = d.history.quiz;
    else if (prefix === 'p') list = d.person.quiz;
    else if (prefix === 's') list = d.science.quiz;
    if (!list || !list[idx]) return null;
    return list[idx];
  }

  var autoTimer = null;
  function checkAutoNotify() {
    var rec = cur();
    if (rec.notified) return;
    var p = progressNow();
    if (p.count !== 5) return;
    clearTimeout(autoTimer);
    autoTimer = setTimeout(function () {
      if (!cur().notified) notifyMom(true);
    }, 700);
  }

  /* day switching */
  function shiftDay(delta) {
    var rec = cur();
    var next = Math.min(CYCLE, Math.max(1, (rec.day || 1) + delta));
    if (next === rec.day) return;
    if (Object.keys(rec.ans).length > 0 || Object.keys(rec.seen).length > 0) {
      var ok = window.confirm('오늘 풀던 답이 사라지고 ' + next + '일차로 바뀝니다. 바꿀까요?');
      if (!ok) return;
      rec.ans = {};
      rec.seen = {};
      rec.notified = false;
    }
    rec.day = next;
    S.day = next;
    saveState();
    hintOpen = {};
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.getElementById('prevDay').addEventListener('click', function () { shiftDay(-1); });
  document.getElementById('nextDay').addEventListener('click', function () { shiftDay(1); });

  document.getElementById('notifyBtn').addEventListener('click', function () { notifyMom(false); });

  /* theme */
  function applyTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    S.theme = mode;
    saveState();
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'dark' ? '#0b1220' : '#0e2140');
  }

  document.getElementById('themeBtn').addEventListener('click', function () {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------------- boot ---------------- */

  function boot() {
    if (!DAYS.length) {
      document.getElementById('view').innerHTML = '<section class="card"><p class="q">학습 데이터를 불러오지 못했어요. 새로고침해 주세요.</p></section>';
      return;
    }
    if (!S.day) { S.day = cur().day; saveState(); }
    var savedTheme = S.theme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    render();

    if ('serviceWorker' in navigator && location.protocol === 'https:') {
      navigator.serviceWorker.register('sw.js').catch(function () { /* 오프라인 캐시는 없어도 동작 */ });
    }
  }

  boot();
})();
