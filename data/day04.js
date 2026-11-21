(window.STUDY_DAYS = window.STUDY_DAYS || []).push({
  day: 4,
  theme: "분수 나눗셈 · 호텔 요청 영어 · 삼국 문화",
  math: {
    topic: "분수의 나눗셈 (초6 1학기 핵심 선행)",
    intro: "분수로 나누기는 그 분수의 역수를 곱하는 것과 같아요. 3/4 ÷ 2/5 는 3/4 × 5/2 로 바꿔 계산합니다.",
    problems: [
      {
        level: "복습",
        q: "3/4 ÷ 2/5 를 계산하면 얼마일까요?",
        hint: "나누는 수 2/5의 역수 5/2를 곱해 보세요.",
        answer: ["15/8", "1과 7/8", "1.875"],
        solution: "3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 입니다. 가분수 15/8을 대분수로 쓰면 1과 7/8, 소수로는 1.875예요. 분수 나눗셈은 '역수로 곱하기'가 한 줄 규칙입니다."
      },
      {
        level: "심화",
        q: "2와 2/3 ÷ 1과 1/3 을 계산하면 얼마일까요?",
        hint: "두 대분수를 모두 가분수로 바꾸세요. 2와 2/3 = 8/3, 1과 1/3 = 4/3 입니다.",
        answer: ["2"],
        solution: "8/3 ÷ 4/3 = 8/3 × 3/4 = 24/12 = 2 입니다. 같은 분모를 가진 분수끼리는 분자끼리만 비교해도 되는데, 8/3 안에 4/3 이 두 번 들어간다고 생각하면 바로 2가 나옵니다."
      },
      {
        level: "도전",
        q: "페인트 1/2 L 로 벽 3/8 m² 를 칠했습니다. 같은 방법으로 1 L 를 칠하면 벽을 몇 m² 칠할 수 있을까요?",
        hint: "1 L 안에 1/2 L 가 몇 번 들어가는지 생각해 보세요. 1/2 L 가 두 번이면 1 L 입니다.",
        answer: ["3/4", "0.75"],
        solution: "1/2 L 로 3/8 m² 를 칠했으므로, 1 L 로 칠하는 넓이는 3/8 ÷ 1/2 = 3/8 × 2 = 3/4 m² 입니다. '단위량(1 L)을 구하는 나눗셈'임을 알아차리는 것이 핵심이에요."
      }
    ]
  },
  english: {
    travel: {
      theme: "호텔 - 요청과 문제 해결",
      items: [
        { en: "Could I get two more towels, please?", ko: "수건 두 장만 더 주시겠어요?" },
        { en: "The air conditioner in our room is not working.", ko: "저희 방 에어컨이 작동하지 않아요." },
        { en: "What is the Wi-Fi password?", ko: "와이파이 비밀번호가 무엇인가요?" },
        { en: "Could we have a late check-out on the last day?", ko: "마지막 날 늦게 체크아웃할 수 있을까요?" },
        { en: "Thank you, that would be very helpful.", ko: "고맙습니다, 정말 도움이 될 거예요." }
      ]
    },
    news: {
      title: "A Translator in Your Pocket",
      source: "Junior Times",
      body: [
        { en: "Many travelers now use translation apps on their phones.", ko: "요즘 많은 여행자가 휴대전화의 번역 앱을 사용합니다." },
        { en: "You can speak into the phone and hear the answer in another language.", ko: "전화기에 대고 말하면 다른 언어로 된 대답을 들을 수 있습니다." },
        { en: "These apps learn from millions of sentences written by people.", ko: "이 앱들은 사람들이 쓴 수백만 개의 문장으로 배웁니다." },
        { en: "But some words, like jokes or local food names, are still hard to translate.", ko: "하지만 농담이나 현지 음식 이름 같은 말은 여전히 번역하기 어렵습니다." },
        { en: "That is why smiling and pointing still help a lot.", ko: "그래서 웃으며 손가락으로 가리키는 것이 여전히 큰 도움이 됩니다." }
      ],
      words: [
        { w: "traveler", m: "여행자" },
        { w: "translate", m: "번역하다" },
        { w: "sentence", m: "문장" },
        { w: "local", m: "현지의" },
        { w: "point", m: "가리키다" }
      ],
      quiz: [
        {
          q: "What is hard for translation apps?",
          choices: ["Counting numbers", "Jokes and local food names", "Weather words", "Names of days"],
          answer: 1,
          explain: "본문에서 농담이나 현지 음식 이름은 여전히 번역하기 어렵다고 했습니다."
        },
        {
          q: "What does the writer say still helps?",
          choices: ["Speaking louder", "Smiling and pointing", "Staying home", "Using paper maps"],
          answer: 1,
          explain: "마지막 문장에서 웃으며 손가락으로 가리키는 것이 도움이 된다고 했습니다."
        }
      ]
    }
  },
  history: {
    era: "삼국의 문화와 불교",
    focus: "삼국의 문화유산과 불교 수용",
    ebs: "https://primary.ebs.co.kr/course/series/list?seriesId=S00069",
    yt: "EBS 초등 스토리 한국사 삼국 문화",
    points: [
      "고구려는 힘찬 기상이 담긴 벽화와 무덤이 발달했어요(무용총, 삼실총).",
      "백제는 세련되고 우아한 문화를 남겼어요(금동대향로, 정림사지 오층석탑, 무령왕릉).",
      "신라는 금관과 첨성대 같은 과학 문화를 남겼고, 불교는 삼국 모두 큰 영향을 주었어요."
    ],
    quiz: [
      { q: "고구려 고분 벽화에 자주 나타나는 모습은?", choices: ["사냥하는 모습", "바다 항해", "논농사", "글자 쓰기"], answer: 0, explain: "무용총 등 고구려 벽화에는 사냥, 씨름, 춤추는 모습이 생생하게 그려져 있습니다." },
      { q: "백제의 문화유산으로 알맞은 것은?", choices: ["금동대향로", "석굴암", "팔만대장경", "첨성대"], answer: 0, explain: "금동대향로는 백제의 뛰어난 금속 공예 기술을 보여 주는 유산입니다." },
      { q: "신라의 천문 관측 시설은?", choices: ["첨성대", "자격루", "측우기", "앙부일구"], answer: 0, explain: "경주에 있는 첨성대는 하늘의 별을 관측하던 시설로 알려져 있습니다." },
      { q: "백제의 탑으로 유명한 것은?", choices: ["정림사지 오층석탑", "석가탑", "원각사지 십층석탑", "무량사 오층석탑"], answer: 0, explain: "정림사지 오층석탑은 백제 탑의 우아한 모습을 잘 보여 줍니다." },
      { q: "고구려가 불교를 공인한 왕은?", choices: ["소수림왕", "광개토대왕", "장수왕", "보장왕"], answer: 0, explain: "소수림왕 때 불교를 받아들여 나라의 힘을 모으려 했습니다." },
      { q: "신라에서 불교를 공인한 왕은?", choices: ["법흥왕", "진흥왕", "무열왕", "문무왕"], answer: 0, explain: "법흥왕 때 불교가 공인되었고, 이차돈의 순교 이야기가 전해집니다." },
      { q: "신라 무덤에서 나온 대표적 유물은?", choices: ["천마총의 금관", "금동대향로", "무령왕 금제관식", "농경문 청동기"], answer: 0, explain: "천마총에서는 금관과 천마도가 발견되어 신라의 화려한 문화를 보여 줍니다." },
      { q: "백제 무령왕릉이 특별한 까닭은?", choices: ["무덤 주인이 분명히 밝혀졌기 때문", "가장 작은 무덤이기 때문", "바다 속에 있기 때문", "벽화가 없기 때문"], answer: 0, explain: "무령왕과 왕비의 이름이 적힌 묘지석이 나와 무덤의 주인을 정확히 알 수 있습니다." },
      { q: "삼국 문화의 공통점으로 알맞은 것은?", choices: ["불교의 영향을 크게 받았다", "모두 같은 글자를 썼다", "바다를 사용하지 않았다", "철기를 쓰지 않았다"], answer: 0, explain: "세 나라 모두 불교를 받아들였고, 불교는 문화와 예술에 큰 영향을 주었습니다." },
      { q: "삼국 시대에 일본에 문화를 전한 나라는?", choices: ["백제", "발해", "고려", "조선"], answer: 0, explain: "백제는 한자, 불교, 건축 기술 등을 일본에 전해 주었습니다." }
    ]
  },
  person: {
    name: "안중근",
    life: "1879 ~ 1910",
    tag: "독립운동가 · 하얼빈 의거",
    summary: "안중근은 나라의 독립을 위해 싸운 독립운동가입니다. 1909년 하얼빈에서 이토 히로부미를 저격하고, 재판에서 당당히 자신의 뜻을 밝혔습니다.",
    facts: [
      "1909년 10월 26일 하얼빈에서 이토 히로부미를 저격했어요.",
      "체포된 뒤 《동양평화론》을 써서 동양의 평화를 주장했습니다.",
      "재판에서 '나는 대한의 군인'이라며 자신의 행동이 나라를 위한 것임을 밝혔어요.",
      "그가 남긴 '一日不讀書 口中生荊棘'은 '하루라도 책을 읽지 않으면 입에 가시가 돋는다'는 뜻입니다."
    ],
    quiz: [
      { q: "안중근이 하얼빈에서 한 일은?", choices: ["이토 히로부미를 저격했다", "만세 운동을 했다", "학교를 세웠다", "배를 만들었다"], answer: 0, explain: "1909년 하얼빈에서 침략의 원흉인 이토 히로부미를 저격했습니다." },
      { q: "안중근이 체포된 뒤 쓴 글로 알맞은 것은?", choices: ["동양평화론", "목민심서", "난중일기", "경국대전"], answer: 0, explain: "《동양평화론》에서 한국·중국·일본이 힘을 합쳐 평화를 지켜야 한다고 주장했습니다." }
    ]
  },
  science: {
    title: "산호는 동물이면서 집을 짓는다",
    summary: "산호는 작은 동물이 만들어 낸 단단한 집 위에 모여 사는 생물입니다. 바다 생물의 4분의 1이 이곳을 집으로 씁니다.",
    body: "산호는 폴립이라는 작은 동물이 낸 탄산칼슘 뼈대가 쌓여 만들어진 구조물이에요. 안에는 사람 눈에 잘 보이지 않는 조류가 살면서 산호에 양분을 주고, 산호는 조류에게 안전한 자리를 줍니다. 서로 도우며 사는 관계인 셈이지요. 그런데 바닷물의 온도가 오르면 조류가 산호를 떠나면서 색이 하얗게 변합니다. 이것을 산호 백화 현상이라고 합니다. 색이 빠지면 먹이를 얻기 어려워져 오래 살지 못합니다.",
    quiz: [
      { q: "산호는 무엇인가요?", choices: ["한 종류의 돌", "작은 동물의 뼈대가 쌓인 구조", "바다 식물", "물고기의 알"], answer: 1, explain: "산호는 폴립이라는 작은 동물의 뼈대가 쌓여 만들어진 구조물입니다." },
      { q: "산호 백화 현상의 원인은?", choices: ["바닷물 온도 상승", "파도가 잔잔해짐", "물고기가 늘어남", "산호가 커짐"], answer: 0, explain: "수온이 오르면 함께 사는 조류가 떠나 색이 하얗게 변합니다." }
    ]
  }
});
