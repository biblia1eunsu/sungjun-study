(window.STUDY_DAYS = window.STUDY_DAYS || []).push({
  day: 3,
  theme: "분수 곱셈 · 호텔 영어 · 삼국의 건국",
  math: {
    topic: "분수의 곱셈 (초6 1학기 선행)",
    intro: "분수끼리 곱할 때는 분자는 분자끼리, 분모는 분모끼리 곱해요. 곱하기 전에 약분하면 계산이 훨씬 쉬워집니다.",
    problems: [
      {
        level: "복습",
        q: "3/5 × 10/9 를 계산하면 얼마일까요?",
        hint: "곱하기 전에 3과 9, 5와 10을 약분해 보세요.",
        answer: ["2/3"],
        solution: "5와 10을 5로, 3과 9를 3으로 먼저 약분하면 1/1 × 2/3 = 2/3 이 됩니다. 그냥 곱하면 30/45 이고, 이를 15로 약분해도 2/3 이에요. 먼저 약분하는 습관이 실수를 줄여 줍니다."
      },
      {
        level: "심화",
        q: "2와 1/4 × 8 을 계산하면 얼마일까요?",
        hint: "대분수는 가분수로 바꿔 보세요. 2와 1/4 = 9/4 입니다.",
        answer: ["18"],
        solution: "2와 1/4 = 9/4 이므로 9/4 × 8 = 9 × 8 ÷ 4 = 18 입니다. 8을 4로 약분해 9 × 2 = 18 로 계산하면 더 빠릅니다."
      },
      {
        level: "도전",
        q: "밀가루 3/4 kg 중에서 2/3 만큼을 사용했습니다. 남은 밀가루는 몇 kg 일까요?",
        hint: "사용한 양은 3/4 × 2/3 입니다. 전체에서 사용한 양을 빼면 남은 양이에요.",
        answer: ["1/4", "0.25"],
        solution: "사용한 양 = 3/4 × 2/3 = 6/12 = 1/2 kg 입니다. 전체 3/4 kg 에서 1/2 kg 을 빼면 3/4 - 2/4 = 1/4 kg 이 남아요. '남은 양'을 묻는지 '사용한 양'을 묻는지 꼭 확인하세요."
      }
    ]
  },
  english: {
    travel: {
      theme: "호텔 - 체크인",
      items: [
        { en: "Hello, we have a reservation under the name Kim.", ko: "안녕하세요, 김이라는 이름으로 예약했습니다." },
        { en: "Could you check us in for three nights?", ko: "3박 체크인을 부탁드려도 될까요?" },
        { en: "What time is breakfast served?", ko: "아침 식사는 몇 시에 제공되나요?" },
        { en: "Is there a pool we can use with the kids?", ko: "아이들과 함께 쓸 수 있는 수영장이 있나요?" },
        { en: "Could you show me how to get to our room?", ko: "저희 방으로 가는 길을 알려 주시겠어요?" }
      ]
    },
    news: {
      title: "Space Junk: Trash That Circles the Earth",
      source: "Junior Times",
      body: [
        { en: "Thousands of old satellites and broken parts float around the Earth.", ko: "수천 개의 낡은 인공위성과 부서진 조각들이 지구 주변을 떠다닙니다." },
        { en: "People call this space junk.", ko: "사람들은 이것을 우주 쓰레기라고 부릅니다." },
        { en: "Space junk moves very fast, so even a small piece can damage a satellite.", ko: "우주 쓰레기는 아주 빠르게 움직여서 작은 조각도 위성을 망가뜨릴 수 있습니다." },
        { en: "Some companies are testing nets and robot arms to catch it.", ko: "몇몇 회사는 그것을 잡기 위해 그물과 로봇 팔을 시험하고 있습니다." },
        { en: "Cleaning up space is a job for the next generation.", ko: "우주를 깨끗하게 하는 일은 다음 세대의 일입니다." }
      ],
      words: [
        { w: "satellite", m: "인공위성" },
        { w: "float", m: "떠다니다" },
        { w: "damage", m: "손상시키다" },
        { w: "net", m: "그물" },
        { w: "generation", m: "세대" }
      ],
      quiz: [
        {
          q: "What is space junk?",
          choices: ["New rockets", "Old satellites and broken parts", "Stars", "Clouds"],
          answer: 1,
          explain: "본문 첫 문장에서 낡은 인공위성과 부서진 조각들이 지구 주변을 떠다닌다고 했습니다."
        },
        {
          q: "How can a small piece of space junk damage a satellite?",
          choices: ["It is very heavy", "It moves very fast", "It is hot", "It is sticky"],
          answer: 1,
          explain: "'moves very fast'라고 했으므로 빠른 속도가 위험한 이유입니다."
        }
      ]
    }
  },
  history: {
    era: "삼국의 건국과 발전",
    focus: "고구려·백제·신라의 건국과 전성기",
    ebs: "https://primary.ebs.co.kr/course/series/list?seriesId=S00069",
    yt: "EBS 초등 스토리 한국사 삼국의 건국",
    points: [
      "고구려는 주몽이 압록강 유역에서 세웠고, 광개토대왕과 장수왕 때 크게 넓혔어요.",
      "백제는 온조가 한강 유역에서 세웠고, 근초고왕 때 전성기를 맞았어요.",
      "신라는 박혁거세가 세웠고, 진흥왕 때 한강 유역을 차지하며 힘을 키웠어요."
    ],
    quiz: [
      { q: "고구려를 세웠다고 전해지는 사람은?", choices: ["온조", "주몽", "박혁거세", "대조영"], answer: 1, explain: "고구려는 주몽(동명성왕)이 압록강 유역에서 세웠습니다." },
      { q: "백제를 세운 사람은?", choices: ["주몽", "온조", "무령왕", "성왕"], answer: 1, explain: "백제는 고구려에서 내려온 온조가 한강 유역에 세웠습니다." },
      { q: "신라를 세운 사람은?", choices: ["박혁거세", "김유신", "무열왕", "진흥왕"], answer: 0, explain: "신라는 박혁거세가 세웠고 경주 지역을 중심으로 발전했습니다." },
      { q: "고구려의 영토를 가장 크게 넓힌 왕은?", choices: ["태조왕", "소수림왕", "광개토대왕", "보장왕"], answer: 2, explain: "광개토대왕은 만주와 한반도 일부까지 영토를 넓혔습니다." },
      { q: "장수왕이 한 일로 알맞은 것은?", choices: ["평양으로 도읍을 옮김", "사비로 도읍을 옮김", "한강 유역을 잃음", "철기를 처음 사용"], answer: 0, explain: "장수왕은 도읍을 국내성에서 평양으로 옮겨 남쪽으로 세력을 넓혔습니다." },
      { q: "백제 근초고왕의 업적으로 알맞은 것은?", choices: ["평양을 점령", "전성기를 이끌고 중국·일본과 교류", "발해 건국", "훈민정음 창제"], answer: 1, explain: "근초고왕 때 백제는 고구려 평양성을 공격하고 중국·일본과 활발히 교류했습니다." },
      { q: "백제 성왕이 도읍을 옮긴 곳은?", choices: ["위례성", "웅진", "사비", "평양"], answer: 2, explain: "성왕은 도읍을 사비(지금의 부여)로 옮기고 나라를 다시 일으키려 했습니다." },
      { q: "신라 진흥왕 때 차지한 중요한 지역은?", choices: ["한강 유역", "압록강 유역", "만주 지역", "탐라"], answer: 0, explain: "진흥왕은 한강 유역을 차지해 중국과 바로 교류할 수 있게 되었습니다." },
      { q: "세 나라가 서로 다투고 협력한 까닭은?", choices: ["글자가 달랐기 때문", "더 좋은 땅과 사람을 차지하려 했기 때문", "날씨가 좋아서", "배를 만들 수 없었기 때문"], answer: 1, explain: "삼국은 농사짓기 좋은 땅과 교통로, 사람들을 차지하려고 서로 힘을 겨루었습니다." },
      { q: "고구려 태조왕 때의 모습으로 알맞은 것은?", choices: ["나라의 기틀이 잡히고 세력이 커짐", "나라가 망함", "도읍을 사비로 옮김", "불교를 처음 받아들임"], answer: 0, explain: "태조왕은 옥저를 정복하는 등 고구려의 기틀을 다졌습니다." }
    ]
  },
  person: {
    name: "정약용",
    life: "1762 ~ 1836",
    tag: "조선 후기 실학자 · 《목민심서》",
    summary: "정약용은 백성의 생활을 실제로 돕는 공부를 한 실학자입니다. 거중기를 설계하고, 목민심서와 같은 책을 남겼어요.",
    facts: [
      "수원 화성을 쌓을 때 무거운 돌을 들어 올리는 거중기를 설계했어요.",
      "배의 힘을 이용해 물을 퍼 올리는 배다리를 만들었습니다.",
      "《목민심서》에서 고을을 다스리는 사람이 가져야 할 마음을 정리했어요.",
      "《마과회통》에서 천연두를 예방하는 종두법을 소개했습니다."
    ],
    quiz: [
      { q: "정약용이 수원 화성 공사에서 만든 기구는?", choices: ["거중기", "측우기", "자격루", "앙부일구"], answer: 0, explain: "거중기는 도르래를 이용해 무거운 물건을 들어 올리는 기구입니다." },
      { q: "정약용이 고을 수령이 지킬 것을 적은 책은?", choices: ["목민심서", "난중일기", "삼국유사", "조선경국전"], answer: 0, explain: "《목민심서》는 백성을 잘 다스리는 방법을 정리한 책입니다." }
    ]
  },
  science: {
    title: "온실효과: 좋은 점도 있지만 너무 많으면 문제",
    summary: "대기 속 기체가 지구의 열을 붙잡아 기온을 알맞게 유지해 줍니다. 그런데 너무 많아지면 지구가 위험하게 더워집니다.",
    body: "지구에 온 햇빛의 일부는 지표에 닿아 열로 바뀌고 다시 우주로 나가려 합니다. 대기의 이산화탄소, 메탄 같은 기체는 이 열의 일부를 붙잡아 두지요. 이 작용 덕분에 지구는 밤에도 얼지 않습니다. 문제는 사람이 화석연료를 많이 태우면서 이 기체가 빠르게 늘어난 것입니다. 붙잡히는 열이 많아지면 기온이 오르고, 그 결과로 빙하가 줄고 바닷물 수위가 높아지는 변화가 나타납니다.",
    quiz: [
      { q: "온실효과가 하는 원래 역할로 알맞은 것은?", choices: ["지구를 알맞게 따뜻하게 유지한다", "빛을 모두 막는다", "바다를 말린다", "별을 만든다"], answer: 0, explain: "온실효과는 지구가 지나치게 차가워지지 않도록 열을 붙잡아 줍니다." },
      { q: "온실효과가 지나치게 커질 때 생기는 일은?", choices: ["기온이 오르고 빙하가 줄어든다", "기온이 내려간다", "바다가 없어진다", "대기가 사라진다"], answer: 0, explain: "열이 많이 붙잡히면 지구 기온이 오르고 빙하 감소와 해수면 상승이 나타납니다." }
    ]
  }
});
