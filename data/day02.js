(window.STUDY_DAYS = window.STUDY_DAYS || []).push({
  day: 2,
  theme: "이분모 분수 · 입국 영어 · 고조선",
  math: {
    topic: "분모가 다른 분수의 덧셈과 뺄셈",
    intro: "분모가 다르면 크기를 비교할 수 없어요. 먼저 통분해서 같은 분모로 만든 뒤 분자만 계산합니다.",
    problems: [
      {
        level: "복습",
        q: "2/3 + 1/4 를 계산하면 얼마일까요?",
        hint: "3과 4의 최소공배수는 12예요. 두 분수를 분모 12로 통분해 보세요.",
        answer: ["11/12"],
        solution: "2/3 = 8/12, 1/4 = 3/12 로 통분됩니다. 분자끼리 더하면 8 + 3 = 11 이므로 11/12 입니다. 분모는 그대로 두는 것이 핵심이에요."
      },
      {
        level: "심화",
        q: "7/8 - 5/6 을 계산하면 얼마일까요?",
        hint: "8과 6의 최소공배수는 24예요. 7/8과 5/6을 분모 24로 바꿔 보세요.",
        answer: ["1/24"],
        solution: "7/8 = 21/24, 5/6 = 20/24 입니다. 21/24 - 20/24 = 1/24 이고, 분모 24와 분자 1은 공약수가 없어 더 약분되지 않아요."
      },
      {
        level: "도전",
        q: "어떤 수에서 2/5를 빼야 할 것을 잘못하여 더했더니 13/10 이 되었습니다. 바르게 계산한 결과는 얼마일까요?",
        hint: "먼저 '어떤 수'를 구하세요. 어떤 수 + 2/5 = 13/10 이므로 어떤 수 = 13/10 - 2/5 입니다.",
        answer: ["1/2", "0.5"],
        solution: "어떤 수 = 13/10 - 2/5 = 13/10 - 4/10 = 9/10 입니다. 이제 바르게 계산하면 9/10 - 2/5 = 9/10 - 4/10 = 5/10 = 1/2 이에요. 무엇을 구하라는 것인지 먼저 확인하는 습관이 중요합니다."
      }
    ]
  },
  english: {
    travel: {
      theme: "공항 - 입국 심사와 수하물 찾기",
      items: [
        { en: "We are here on vacation with our two children.", ko: "저희는 아이 둘과 함께 휴가차 왔습니다." },
        { en: "We will stay in Bali for nineteen days.", ko: "발리에서 19일 동안 머물 예정입니다." },
        { en: "Yes, we have a return ticket to Seoul.", ko: "네, 서울로 돌아가는 항공권도 있습니다." },
        { en: "Excuse me, where can I find the baggage claim for this flight?", ko: "실례합니다, 이 항공편 수하물 찾는 곳은 어디인가요?" },
        { en: "One of our bags hasn't come out yet.", ko: "저희 가방 하나가 아직 나오지 않았어요." }
      ]
    },
    news: {
      title: "Old Fishing Boats Become Homes for Baby Fish",
      source: "Junior Times",
      body: [
        { en: "Some fishermen in Bali sink old wooden boats in the sea on purpose.", ko: "발리의 몇몇 어부들은 낡은 나무 배를 일부러 바다에 가라앉힙니다." },
        { en: "The boats become safe places for small fish and young corals.", ko: "그 배들은 작은 물고기와 어린 산호가 자라는 안전한 장소가 됩니다." },
        { en: "Over time, the wood is covered with seaweed and shells.", ko: "시간이 지나면 나무는 해초와 조개껍데기로 뒤덮입니다." },
        { en: "Divers often visit these places to count the fish.", ko: "잠수부들은 물고기를 세기 위해 자주 이곳을 찾습니다." },
        { en: "Turning waste into a home is a clever idea.", ko: "쓰레기를 집으로 바꾸는 것은 기발한 생각입니다." }
      ],
      words: [
        { w: "sink", m: "가라앉히다" },
        { w: "on purpose", m: "일부러" },
        { w: "coral", m: "산호" },
        { w: "be covered with", m: "~로 덮이다" },
        { w: "waste", m: "쓰레기, 낭비" }
      ],
      quiz: [
        {
          q: "Why do fishermen sink old boats?",
          choices: ["To make a new road", "To help small fish and corals", "To catch more birds", "To build a bridge"],
          answer: 1,
          explain: "본문에 배가 작은 물고기와 어린 산호에게 안전한 장소가 된다고 나옵니다."
        },
        {
          q: "What covers the wood over time?",
          choices: ["Seaweed and shells", "Sand and rocks", "Plastic bags", "Paper"],
          answer: 0,
          explain: "'the wood is covered with seaweed and shells'라고 했습니다."
        }
      ]
    }
  },
  history: {
    era: "고조선과 여러 초기 국가",
    focus: "단군 이야기, 8조법, 초기 국가들의 특징",
    ebs: "https://primary.ebs.co.kr/course/series/list?seriesId=S00069",
    yt: "EBS 초등 스토리 한국사 고조선",
    points: [
      "청동기 문화를 바탕으로 고조선이 세워졌고, 단군왕검 이야기가 전해집니다.",
      "8조법 중 3개만 전해지며, 사람의 생명과 재산을 소중히 여기는 내용이 담겨 있어요.",
      "부여(영고), 고구려(동맹), 동예(무천), 삼한(계절 제천행사) 등 여러 나라가 있었어요."
    ],
    quiz: [
      { q: "고조선을 세웠다고 전해지는 사람은?", choices: ["주몽", "단군왕검", "온조", "박혁거세"], answer: 1, explain: "고조선은 단군왕검이 세웠다는 이야기가 전해집니다." },
      { q: "고조선의 법 8조 중 지금 전해지는 조항 수는?", choices: ["3개", "5개", "8개", "1개"], answer: 0, explain: "8조법 중 3개만 기록으로 전해집니다." },
      { q: "고조선의 8조법에 담긴 생각으로 알맞은 것은?", choices: ["힘센 사람이 다스린다", "사람의 생명과 재산을 소중히 여긴다", "노래와 춤을 금한다", "바다를 지배한다"], answer: 1, explain: "사람을 죽인 자는 사형에 처한다는 조항 등에서 생명과 재산을 중시했음을 알 수 있습니다." },
      { q: "부여의 풍습으로 알맞은 것은?", choices: ["영고", "동맹", "무천", "서옥제"], answer: 0, explain: "부여에서는 12월에 영고라는 제천행사를 열었습니다." },
      { q: "고구려의 제천행사는?", choices: ["영고", "동맹", "무천", "단오"], answer: 1, explain: "고구려의 동맹은 10월에 열린 제천행사입니다." },
      { q: "동예의 제천행사는?", choices: ["영고", "동맹", "무천", "팔관회"], answer: 2, explain: "동예에서는 10월에 무천이라는 제천행사를 열었습니다." },
      { q: "삼한 지역에서 제사를 주관한 사람은?", choices: ["천군", "왕", "장군", "상인"], answer: 0, explain: "삼한에서는 소도라는 신성한 곳에서 천군이 제사를 주관했습니다." },
      { q: "고조선이 철기 문화를 받아들인 시기 이후의 모습으로 알맞은 것은?", choices: ["더 강한 군사력과 교역", "농경의 완전한 중단", "글자 사용의 소멸", "도시의 소멸"], answer: 0, explain: "철기 문화를 받아들이며 군사력이 강해지고 중국과 교역도 활발해졌습니다." },
      { q: "고조선이 중국 한나라와 다툰 뒤 설치된 것은?", choices: ["한군현", "9주", "5소경", "4군 6진"], answer: 0, explain: "고조선이 한나라와 다툰 뒤 한나라는 군현을 두어 다스리려 했습니다." },
      { q: "초기 여러 나라의 공통점으로 알맞은 것은?", choices: ["모두 철기를 사용하지 않았다", "농경과 제천행사가 있었다", "모두 바다에서만 살았다", "모두 왕이 없었다"], answer: 1, explain: "여러 나라 모두 농사를 짓고 하늘에 제사 지내는 제천행사를 열었습니다." }
    ]
  },
  person: {
    name: "이순신",
    life: "1545 ~ 1598",
    tag: "조선의 장군 · 임진왜란의 영웅",
    summary: "이순신은 임진왜란 때 조선의 바다를 지킨 장군입니다. 적은 배로 큰 공을 세웠고, 한산도 대첩이 대표적입니다.",
    facts: [
      "거북선을 앞세운 전투로 왜군의 배를 크게 물리쳤어요.",
      "1592년 한산도에서 학익진이라는 진법으로 크게 이겼습니다.",
      "전쟁 중에도 《난중일기》를 써서 당시 상황을 남겼습니다.",
      "1598년 노량 해전에서 싸우다 전사했습니다."
    ],
    quiz: [
      { q: "이순신이 크게 이긴 1592년 해전은?", choices: ["노량 해전", "한산도 대첩", "살수 대첩", "귀주 대첩"], answer: 1, explain: "학익진을 이용한 한산도 대첩은 임진왜란의 대표적 승리입니다." },
      { q: "이순신이 전쟁 중 쓴 일기는?", choices: ["난중일기", "삼국유사", "훈민정음", "성학집요"], answer: 0, explain: "《난중일기》는 이순신이 전쟁 중 겪은 일을 적은 일기입니다." }
    ]
  },
  science: {
    title: "인공지능은 어떻게 '배우는' 걸까",
    summary: "요즘 인공지능은 정답을 많이 보며 스스로 규칙을 찾는 '기계학습' 방식으로 배웁니다.",
    body: "사람이 하나하나 규칙을 적어 주는 대신, 고양이 사진 수천 장과 '고양이'라는 이름표를 함께 보여 주는 방법이 있어요. 그러면 컴퓨터는 사진 속 픽셀의 밝기와 색 패턴 중에서 고양이 사진에 자주 나타나는 특징을 숫자로 찾아냅니다. 이 과정을 학습이라고 하고, 학습에 쓰지 않은 새 사진에서도 잘 맞히면 '일반화가 되었다'고 말합니다. 다만 학습한 자료에 편향이 있으면 결과도 편향될 수 있어 사람이 꼭 확인해야 합니다.",
    quiz: [
      { q: "인공지능이 사진을 배우는 방법으로 알맞은 것은?", choices: ["사람이 모든 규칙을 입력한다", "많은 사진과 이름표를 보여 준다", "사진을 먹는다", "랜선으로만 배운다"], answer: 1, explain: "많은 사례와 정답을 보여 주며 특징을 스스로 찾게 하는 것이 기계학습입니다." },
      { q: "학습한 적 없는 새 사진에서도 잘 맞히는 것을 무엇이라고 할까?", choices: ["과열", "일반화", "복사", "압축"], answer: 1, explain: "새로운 자료에 잘 적용되는 능력을 일반화라고 합니다." }
    ]
  }
});
