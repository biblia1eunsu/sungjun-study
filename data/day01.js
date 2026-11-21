(window.STUDY_DAYS = window.STUDY_DAYS || []).push({
  day: 1,
  theme: "분수·소수 다시 튼튼하게 · 공항 영어 · 선사 시대",
  math: {
    topic: "분수와 소수 기초 (약분·통분·소수 변환)",
    intro: "분자와 분모를 같은 수로 나누면 크기가 그대로예요. 이것을 약분이라고 해요. 소수는 0.375처럼 자리값으로 읽고 분수로 바꿀 수 있어요.",
    problems: [
      {
        level: "복습",
        q: "분수 18/24 를 더 이상 약분할 수 없는 기약분수로 나타내면 얼마일까요?",
        hint: "18과 24의 최대공약수를 먼저 찾아보세요. 18 = 2 × 3 × 3, 24 = 2 × 2 × 2 × 3 이에요.",
        answer: ["3/4"],
        solution: "18과 24의 최대공약수는 6이에요. 분자와 분모를 6으로 나누면 18 ÷ 6 = 3, 24 ÷ 6 = 4 이므로 3/4 입니다. 약분은 최대공약수로 한 번에 나누면 가장 빠르고, 3/4는 더 이상 약분되지 않아요."
      },
      {
        level: "심화",
        q: "소수 0.375 를 기약분수로 나타내면 얼마일까요?",
        hint: "0.375는 소수 세 자리 수이므로 375/1000 로 쓸 수 있어요. 375와 1000의 공약수를 찾아보세요.",
        answer: ["3/8"],
        solution: "0.375 = 375/1000 입니다. 375와 1000의 최대공약수는 125이므로 분자와 분모를 125로 나누면 375 ÷ 125 = 3, 1000 ÷ 125 = 8 이 되어 3/8 입니다. 확인: 3 ÷ 8 = 0.375 로 맞아요."
      },
      {
        level: "도전",
        q: "분모가 60인 진분수 중에서 3/4 보다 크고 5/6 보다 작은 분수는 모두 몇 개일까요?",
        hint: "3/4와 5/6을 분모가 60인 분수로 통분해 보세요. 3/4 = 45/60, 5/6 = 50/60 이에요.",
        answer: ["4", "4개"],
        solution: "3/4 = 45/60, 5/6 = 50/60 으로 통분됩니다. 그 사이에 있는 분모 60인 분수는 46/60, 47/60, 48/60, 49/60 으로 4개예요. 45/60과 50/60은 '보다 크고 작은' 조건에서 빠지므로 세면 안 됩니다. 답은 4개."
      }
    ]
  },
  english: {
    travel: {
      theme: "공항 - 체크인과 출국",
      items: [
        { en: "Good morning. I'd like to check in for flight KE629 to Bali.", ko: "안녕하세요. 발리행 KE629편 체크인을 하고 싶어요." },
        { en: "Here are our passports and booking number.", ko: "여기 여권과 예약 번호입니다." },
        { en: "We are a family of four, and we have two bags to check.", ko: "저희는 네 명 가족이고, 부칠 가방이 두 개 있어요." },
        { en: "Could we sit together, please?", ko: "같이 앉을 수 있게 해 주시겠어요?" },
        { en: "Where is the security check for international flights?", ko: "국제선 보안검색대는 어디에 있나요?" }
      ]
    },
    news: {
      title: "Bali's Rice Terraces Work Like a Giant Machine",
      source: "Junior Times",
      body: [
        { en: "In Bali, farmers grow rice on step-shaped fields called terraces.", ko: "발리에서 농부들은 계단 모양의 논인 '테라스'에서 쌀을 기릅니다." },
        { en: "For about a thousand years, they have shared water through a system called subak.", ko: "약 천 년 동안 그들은 '수박'이라는 시스템으로 물을 나누어 왔습니다." },
        { en: "Subak sends river water to each field in the right amount and at the right time.", ko: "수박은 강물을 알맞은 양, 알맞은 때에 각 논으로 보냅니다." },
        { en: "Farmers and their families meet to make the water rules together.", ko: "농부들과 그 가족들은 함께 모여 물에 대한 규칙을 만듭니다." },
        { en: "Today, the terraces also teach visitors how people and nature can work together.", ko: "오늘날 이 테라스는 사람과 자연이 함께 일하는 방법을 방문객에게도 알려 줍니다." }
      ],
      words: [
        { w: "terrace", m: "계단 모양의 논" },
        { w: "share", m: "나누다, 공유하다" },
        { w: "amount", m: "양, 분량" },
        { w: "rule", m: "규칙" },
        { w: "nature", m: "자연" }
      ],
      quiz: [
        {
          q: "What is subak?",
          choices: ["A kind of rice", "A water-sharing system", "A mountain in Bali", "A farm machine"],
          answer: 1,
          explain: "본문에서 'shared water through a system called subak'라고 했으므로 물을 나누는 시스템입니다."
        },
        {
          q: "Who makes the water rules?",
          choices: ["Farmers and their families", "Tourists", "The government", "School teachers"],
          answer: 0,
          explain: "'Farmers and their families meet to make the water rules together'에서 답을 찾을 수 있어요."
        }
      ]
    }
  },
  history: {
    era: "선사 시대 (구석기·신석기·청동기)",
    focus: "도구를 만드는 재료와 생활 모습의 변화",
    ebs: "https://primary.ebs.co.kr/course/series/list?seriesId=S00069",
    yt: "EBS 초등 스토리 한국사 선사 시대",
    points: [
      "구석기 시대: 뗀석기와 뗀석기를 다듬는 기술, 사냥과 채집, 동굴이나 막집에 살았어요.",
      "신석기 시대: 간석기와 빗살무늬 토기, 농경(조·피)과 목축을 시작하고 움집에 모여 살았어요.",
      "청동기 시대: 청동기와 반달 돌칼, 고인돌이 만들어졌고 계급과 지배자가 생겼어요."
    ],
    quiz: [
      { q: "구석기 시대 사람들이 만든 대표적인 도구는?", choices: ["간석기", "뗀석기", "비파형 동검", "빗살무늬 토기"], answer: 1, explain: "구석기 시대는 돌을 깨고 떼어 만든 뗀석기를 사용했습니다." },
      { q: "우리나라 구석기 시대 유적으로 유명한 곳은?", choices: ["서울 암사동", "연천 전곡리", "부여 송국리", "고창 고인돌"], answer: 1, explain: "경기도 연천 전곡리에서는 주먹도끼가 발견되어 널리 알려졌습니다." },
      { q: "신석기 시대의 대표적 토기는?", choices: ["빗살무늬 토기", "민무늬 토기", "오리 모양 토기", "귀면와"], answer: 0, explain: "신석기 시대 사람들은 빗처럼 생긴 도구로 무늬를 새긴 빗살무늬 토기를 사용했습니다." },
      { q: "농경이 처음 시작된 시대는?", choices: ["구석기", "신석기", "청동기", "철기"], answer: 1, explain: "신석기 시대부터 조, 피 등 농사를 짓고 가축을 기르기 시작했습니다." },
      { q: "청동기 시대의 무덤은?", choices: ["고인돌", "움집", "동굴", "벽화무덤"], answer: 0, explain: "청동기 시대 지배자의 무덤으로 큰 돌을 이용한 고인돌을 만들었습니다." },
      { q: "신석기 시대 사람들이 살던 집은?", choices: ["막집", "움집", "기와집", "너와집"], answer: 1, explain: "땅을 파고 지붕을 얹은 움집에서 살았고, 한 곳에 정착했습니다." },
      { q: "가락바퀴(방추차)를 사용한 이유는?", choices: ["그릇을 만들려고", "실을 뽑으려고", "불을 피우려고", "곡식을 갈려고"], answer: 1, explain: "가락바퀴는 실을 뽑을 때 쓰는 도구로, 신석기 시대에 등장했습니다." },
      { q: "구석기 시대와 신석기 시대를 가르는 가장 중요한 변화는?", choices: ["불 사용", "농경 시작", "철기 사용", "글자 사용"], answer: 1, explain: "사냥과 채집 중심의 생활에서 농경과 정착 생활로 바뀐 것이 큰 변화입니다." },
      { q: "비파형 동검이 처음 나타난 시대는?", choices: ["구석기", "신석기", "청동기", "고려"], answer: 2, explain: "청동기 시대에 비파형 동검과 반달 돌칼이 만들어졌습니다." },
      { q: "청동기 시대에 계급이 생겼다는 것을 보여 주는 것은?", choices: ["빗살무늬 토기", "고인돌의 크기 차이", "막집", "뗀석기"], answer: 1, explain: "고인돌의 크기가 사람마다 다르다는 것은 지배자와 평민의 계급이 생겼음을 보여 줍니다." }
    ]
  },
  person: {
    name: "세종대왕",
    life: "1397 ~ 1450",
    tag: "조선 4대 왕 · 한글 창제",
    summary: "세종은 조선 4대 왕으로, 백성이 쉽게 글을 읽도록 훈민정음을 만들고 과학과 문화를 크게 발전시켰습니다.",
    facts: [
      "1446년 훈민정음을 반포했어요. 누구나 쉽게 배울 수 있는 소리 글자입니다.",
      "집현전을 두어 학자들과 함께 책을 쓰고 공부했습니다.",
      "측우기, 자격루, 앙부일구 같은 과학 기구를 만들게 했습니다.",
      "백성의 세금 부담과 농사법을 공부해 고쳐 주었습니다."
    ],
    quiz: [
      { q: "세종이 만든 글자는?", choices: ["이두", "훈민정음", "향찰", "구결"], answer: 1, explain: "세종은 1446년 훈민정음을 반포했습니다." },
      { q: "세종 시기에 만든 비의 양을 재는 기구는?", choices: ["측우기", "자격루", "앙부일구", "혼천의"], answer: 0, explain: "측우기는 빗물의 양을 재는 기구로, 세계에서도 일찍 만들어진 과학 기구입니다." }
    ]
  },
  science: {
    title: "우주를 보는 창, 망원경의 원리",
    summary: "망원경은 렌즈나 거울로 빛을 모아 멀리 있는 물체를 크게, 밝게 보여 줍니다.",
    body: "볼록 렌즈는 지나가는 빛을 한 점에 모을 수 있어요. 멀리 있는 별에서 온 빛을 큰 렌즈로 많이 모아 작은 눈으로 관찰하는 것이 우리 눈을 대신해 주는 원리입니다. 렌즈가 클수록 더 많은 빛을 모으기 때문에 더 어두운 별까지 볼 수 있지요. 허블 우주망원경처럼 대기 밖에서 관측하면 흔들림이 없어 더 선명한 사진을 찍을 수 있습니다. (전문 용어: 렌즈 lens, 초점 focus)",
    quiz: [
      { q: "망원경의 렌즈가 클수록 좋은 점은?", choices: ["무게가 가볍다", "더 많은 빛을 모은다", "별이 스스로 움직인다", "색이 바뀐다"], answer: 1, explain: "렌즈가 크면 빛을 많이 모아 희미한 별까지 볼 수 있습니다." },
      { q: "우주망원경이 지상망원경보다 선명한 이유로 알맞은 것은?", choices: ["색이 무지개다", "밤에만 관측한다", "대기의 흔들림이 없다", "렌즈가 없다"], answer: 2, explain: "지구 대기 때문에 생기는 흔들림과 변화가 없어 더 선명하게 볼 수 있습니다." }
    ]
  }
});
