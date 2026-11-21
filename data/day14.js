(window.STUDY_DAYS = window.STUDY_DAYS || []).push({
  day: 14,
  theme: "종합 사고력 · 체크아웃 영어 · 광복과 현대",
  math: {
    topic: "2주 종합 사고력 (분수·소수·약수배수·비율)",
    intro: "배운 개념을 섞어서 쓰는 연습입니다. 문제를 읽고 어떤 개념이 필요한지 먼저 찾아보세요.",
    problems: [
      {
        level: "복습",
        q: "3/4 L 의 물을 1/8 L 컵에 담으면 몇 컵이 될까요?",
        hint: "1/4 = 2/8 이므로 3/4 은 1/8 이 몇 개인지 생각해 보세요. 나눗셈으로도 풀 수 있어요.",
        answer: ["6", "6컵"],
        solution: "3/4 ÷ 1/8 = 3/4 × 8 = 6 이므로 6컵입니다. 1/8이 8개 모이면 1 L 이고, 3/4 은 그중 6개만큼이라는 뜻이에요."
      },
      {
        level: "심화",
        q: "12의 약수이면서 동시에 18의 약수인 수를 모두 더하면 얼마일까요?",
        hint: "두 수의 공약수를 모두 찾아 보세요. 1, 2, 3, 6 입니다.",
        answer: ["12"],
        solution: "12의 약수는 1, 2, 3, 4, 6, 12 이고 18의 약수는 1, 2, 3, 6, 9, 18 입니다. 공통인 약수는 1, 2, 3, 6 이므로 합은 12 입니다. 공약수는 최대공약수의 약수라는 성질도 기억해 두세요."
      },
      {
        level: "도전",
        q: "1부터 100까지의 자연수 중에서 3의 배수이면서 5의 배수가 아닌 수는 모두 몇 개일까요?",
        hint: "3의 배수는 몇 개인지, 그중 5의 배수이기도 한 것(15의 배수)은 몇 개인지 세어 보세요.",
        answer: ["27", "27개"],
        solution: "1부터 100까지 3의 배수는 100 ÷ 3 = 33개(3, 6, …, 99)입니다. 그중 5의 배수이기도 한 수는 15의 배수이므로 100 ÷ 15 = 6개(15, 30, 45, 60, 75, 90)입니다. 따라서 33 - 6 = 27개입니다."
      }
    ]
  },
  english: {
    travel: {
      theme: "체크아웃과 여행의 마무리",
      items: [
        { en: "We'd like to check out, please.", ko: "체크아웃하고 싶어요." },
        { en: "Could you call a taxi for us to the airport?", ko: "공항까지 택시를 불러 주시겠어요?" },
        { en: "Could we leave our bags here until the afternoon?", ko: "오후까지 짐을 맡길 수 있을까요?" },
        { en: "We had a wonderful stay. Thank you for everything.", ko: "정말 즐거운 시간이었어요. 모든 것에 감사합니다." },
        { en: "I hope we can come back again next year.", ko: "내년에 다시 올 수 있으면 좋겠어요." }
      ]
    },
    news: {
      title: "A School That Runs on Sunshine",
      source: "Junior Times",
      body: [
        { en: "One school put solar panels on its roof last year.", ko: "한 학교가 작년에 지붕 위에 태양광 패널을 설치했습니다." },
        { en: "The panels now make about half of the electricity the school uses.", ko: "이제 이 패널들은 학교가 쓰는 전기의 절반 정도를 만듭니다." },
        { en: "The school also teaches students how the panels work.", ko: "학교는 학생들에게 패널이 어떻게 작동하는지도 가르칩니다." },
        { en: "In science class, students read the numbers on the meter every morning.", ko: "과학 시간에 학생들은 매일 아침 계량기의 숫자를 읽습니다." },
        { en: "Saving energy became a game the whole school plays.", ko: "에너지 아끼기는 온 학교가 함께하는 놀이가 되었습니다." }
      ],
      words: [
        { w: "solar panel", m: "태양광 패널" },
        { w: "roof", m: "지붕" },
        { w: "electricity", m: "전기" },
        { w: "meter", m: "계량기" },
        { w: "save", m: "아끼다, 절약하다" }
      ],
      quiz: [
        {
          q: "What did the school put on its roof?",
          choices: ["Solar panels", "A garden", "A pool", "A clock"],
          answer: 0,
          explain: "지붕에 태양광 패널을 설치했다고 했습니다."
        },
        {
          q: "What do students do every morning in science class?",
          choices: ["Read the numbers on the meter", "Water the roof", "Wash the panels", "Turn off the lights"],
          answer: 0,
          explain: "'read the numbers on the meter every morning'이라고 했습니다."
        }
      ]
    }
  },
  history: {
    era: "광복과 현대",
    focus: "광복, 6·25 전쟁, 민주화",
    ebs: "https://primary.ebs.co.kr/course/series/list?seriesId=S00069",
    yt: "EBS 초등 스토리 한국사 광복과 현대",
    points: [
      "1945년 8월 15일 광복을 맞았지만, 남과 북이 갈라지고 1950년 6·25 전쟁이 일어났어요.",
      "1948년 대한민국 정부가 수립되었고, 1960년 4·19 혁명으로 독재가 무너졌어요.",
      "1987년 6월 민주 항쟁으로 국민이 대통령을 직접 뽑는 제도가 마련되었어요."
    ],
    quiz: [
      { q: "광복을 맞이한 날은?", choices: ["1945년 8월 15일", "1919년 3월 1일", "1950년 6월 25일", "1987년 6월"], answer: 0, explain: "1945년 8월 15일 일제로부터 해방되었습니다." },
      { q: "6·25 전쟁이 일어난 해는?", choices: ["1950년", "1945년", "1948년", "1960년"], answer: 0, explain: "1950년 6월 25일 북한의 남침으로 전쟁이 시작되었습니다." },
      { q: "대한민국 정부가 수립된 해는?", choices: ["1948년", "1945년", "1950년", "1987년"], answer: 0, explain: "1948년 대한민국 정부가 수립되었습니다." },
      { q: "4·19 혁명의 결과로 알맞은 것은?", choices: ["자유당 정권이 무너짐", "전쟁이 시작됨", "나라가 갈라짐", "일제가 들어옴"], answer: 0, explain: "1960년 학생과 시민이 일어나 독재 정권이 물러났습니다." },
      { q: "6월 민주 항쟁이 일어난 해는?", choices: ["1987년", "1960년", "1950년", "1945년"], answer: 0, explain: "1987년 6월 항쟁으로 대통령 직선제가 약속되었습니다." },
      { q: "6·25 전쟁 때 유엔군을 이끈 사령관은?", choices: ["맥아더", "처칠", "루스벨트", "나폴레옹"], answer: 0, explain: "맥아더가 유엔군 사령관으로 참전했습니다." },
      { q: "대한민국이 1988년에 개최한 국제 행사는?", choices: ["서울 올림픽", "월드컵", "동계 올림픽", "박람회"], answer: 0, explain: "1988년 서울 올림픽이 열렸습니다." },
      { q: "2002년 우리나라가 공동 개최한 것은?", choices: ["월드컵", "올림픽", "아시안게임", "세계박람회"], answer: 0, explain: "2002년 한일 월드컵을 일본과 함께 열었습니다." },
      { q: "광복 직후 남북이 갈라진 까닭은?", choices: ["미국과 소련이 나눠 관리했기 때문", "전쟁이 끝나서", "나라가 아주 작아서", "왕이 없어서"], answer: 0, explain: "미국과 소련이 신탁 통치를 두고 의견이 갈리며 남북이 나뉘었습니다." },
      { q: "현대 한국 사회의 발전 모습으로 알맞은 것은?", choices: ["산업 발전과 문화 확산", "농업만 있는 사회", "외국과 교류 없음", "화폐가 없는 사회"], answer: 0, explain: "경제 발전과 함께 음악, 영화, 드라마 같은 문화가 세계로 퍼졌습니다." }
    ]
  },
  person: {
    name: "알베르트 아인슈타인",
    life: "1879 ~ 1955",
    tag: "독일 출신 물리학자 · 상대성 이론",
    summary: "아인슈타인은 시간과 공간이 변할 수 있다는 상대성 이론을 만든 물리학자입니다. 빛의 속도와 에너지의 관계를 밝혔습니다.",
    facts: [
      "특수 상대성 이론에서 빠르게 움직이면 시간이 다르게 흐른다는 것을 밝혔어요.",
      "E = mc² 라는 식으로 질량과 에너지가 서로 바뀔 수 있음을 보였습니다.",
      "1921년 노벨 물리학상을 받았습니다.",
      "과학을 어렵게만 여기지 않도록 쉽게 설명하려고 노력했습니다."
    ],
    quiz: [
      { q: "아인슈타인이 만든 이론은?", choices: ["상대성 이론", "진화론", "유전 법칙", "지동설"], answer: 0, explain: "상대성 이론으로 시간과 공간에 대한 생각을 바꾸었습니다." },
      { q: "E = mc² 가 뜻하는 것은?", choices: ["질량과 에너지가 관계가 있다", "물이 끓는다", "빛이 느리다", "소리가 빠르다"], answer: 0, explain: "질량이 에너지로, 에너지가 질량으로 바뀔 수 있음을 나타냅니다." }
    ]
  },
  science: {
    title: "양자컴퓨터: 경우의 수를 한꺼번에",
    summary: "양자컴퓨터는 0과 1을 동시에 품는 큐비트로 계산합니다. 모든 문제에 빠른 것은 아니지만 특정 문제에서 큰 힘을 냅니다.",
    body: "지금의 컴퓨터는 비트로 계산합니다. 비트는 0 또는 1 중 하나입니다. 양자 컴퓨터의 큐비트는 측정하기 전까지 0과 1의 상태가 겹쳐 있을 수 있어요. 그래서 여러 경우를 동시에 다루는 것처럼 계산할 수 있습니다. 다만 계산 결과가 쉽게 흐트러지기 때문에 아주 차갑게 유지하고 오류를 고치는 기술이 필요합니다. 그래서 지금도 연구 단계이며, 신약 개발이나 신소재 탐색처럼 경우의 수가 어마어마한 문제에 주로 기대를 모읍니다.",
    quiz: [
      { q: "큐비트의 특징으로 알맞은 것은?", choices: ["0과 1 상태가 겹칠 수 있다", "0만 될 수 있다", "1만 될 수 있다", "숫자가 아니다"], answer: 0, explain: "측정 전까지 0과 1의 상태가 겹쳐 있을 수 있습니다." },
      { q: "양자컴퓨터가 잘하는 일로 알맞은 것은?", choices: ["경우의 수가 매우 많은 특정 문제", "모든 일을 빠르게", "사진 인쇄", "글자 쓰기"], answer: 0, explain: "모든 문제에 유리한 것이 아니라 특정한 문제에서 강점을 보입니다." }
    ]
  }
});
