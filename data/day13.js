(window.STUDY_DAYS = window.STUDY_DAYS || []).push({
  day: 13,
  theme: "규칙 찾기 · 안전 영어 · 일제강점기",
  math: {
    topic: "규칙과 대응 (초5 심화)",
    intro: "수의 배열에서 규칙을 찾을 때는 이웃한 수의 차이, 곱해지는 수, 자리와 수의 관계를 살펴봅니다.",
    problems: [
      {
        level: "복습",
        q: "2, 5, 8, 11, … 처럼 계속되는 수의 배열에서 10번째 수는 얼마일까요?",
        hint: "3씩 커지는 규칙입니다. 첫째가 2이므로 n번째 수는 2 + 3 × (n - 1) 입니다.",
        answer: ["29"],
        solution: "첫째 2에서 시작해 3씩 커지므로 n번째 수는 2 + 3 × (n - 1) 입니다. n = 10 이면 2 + 3 × 9 = 29 입니다. 하나씩 세지 않고 식으로 구하는 것이 규칙 찾기의 힘이에요."
      },
      {
        level: "심화",
        q: "1, 4, 9, 16, 25, … 다음에 오는 수는 얼마일까요?",
        hint: "각 수는 몇 곱하기 몇인지 생각해 보세요. 1×1, 2×2, 3×3 …",
        answer: ["36"],
        solution: "1, 4, 9, 16, 25는 1×1, 2×2, 3×3, 4×4, 5×5 입니다. 다음은 6×6 = 36 입니다. 제곱수를 알아보는 문제였어요."
      },
      {
        level: "도전",
        q: "성냥개비로 정사각형을 한 줄로 이어 만들 때, 정사각형 1개에는 4개, 2개에는 7개, 3개에는 10개가 필요합니다. 정사각형 20개를 만들려면 성냥개비가 몇 개 필요할까요?",
        hint: "정사각형이 1개 늘 때마다 성냥개비는 3개씩 늘어납니다. 규칙을 식으로 만들어 보세요.",
        answer: ["61", "61개"],
        solution: "정사각형이 1개일 때 4개에서 시작해 1개 늘 때마다 3개씩 늘어나므로 n개일 때 4 + 3 × (n - 1) 개가 필요합니다. n = 20 이면 4 + 3 × 19 = 4 + 57 = 61 개입니다. 식으로 나타내면 3n + 1 로도 쓸 수 있어요."
      }
    ]
  },
  english: {
    travel: {
      theme: "분실과 안전",
      items: [
        { en: "I think I left my phone in the taxi.", ko: "택시에 휴대전화를 두고 내린 것 같아요." },
        { en: "Where is the lost and found office?", ko: "분실물 보관소는 어디에 있나요?" },
        { en: "My child is not feeling well. Could you help us?", ko: "아이가 몸이 안 좋아요. 도와주실 수 있나요?" },
        { en: "Is it safe to swim here with a strong current?", ko: "여기 물살이 센데 수영해도 안전한가요?" },
        { en: "Please call an ambulance. This is the address.", ko: "구급차를 불러 주세요. 주소는 여기입니다." }
      ]
    },
    news: {
      title: "Baby Sea Turtles Find the Sea",
      source: "Junior Times",
      body: [
        { en: "On some nights, baby sea turtles come out of the sand.", ko: "어떤 날 밤에는 아기 바다거북이 모래에서 나옵니다." },
        { en: "They walk toward the brightest light they can see.", ko: "그들은 눈에 보이는 가장 밝은 빛을 향해 걸어갑니다." },
        { en: "Usually, that light is the moon shining on the sea.", ko: "보통 그 빛은 바다 위에 비치는 달빛입니다." },
        { en: "But hotels with bright lights can lead them the wrong way.", ko: "하지만 밝은 불을 켜 둔 호텔은 그들을 잘못된 길로 이끌 수 있습니다." },
        { en: "So some beaches turn off their lights for a few nights.", ko: "그래서 몇몇 해변은 며칠 동안 불을 끕니다." }
      ],
      words: [
        { w: "sea turtle", m: "바다거북" },
        { w: "sand", m: "모래" },
        { w: "toward", m: "~쪽으로" },
        { w: "bright", m: "밝은" },
        { w: "lead", m: "이끌다" }
      ],
      quiz: [
        {
          q: "Where do baby turtles usually walk?",
          choices: ["Toward the sea", "Toward the hotels", "Into the forest", "Up the mountain"],
          answer: 0,
          explain: "달빛이 비치는 바다 쪽으로 걸어간다고 했습니다."
        },
        {
          q: "Why do some beaches turn off their lights?",
          choices: ["To help baby turtles", "To save paper", "To stop the rain", "To catch fish"],
          answer: 0,
          explain: "밝은 불이 새끼 거북을 잘못된 길로 이끌기 때문입니다."
        }
      ]
    }
  },
  history: {
    era: "일제강점기와 독립운동",
    focus: "3·1 운동, 임시정부, 무장 독립운동",
    ebs: "https://primary.ebs.co.kr/course/series/list?seriesId=S00069",
    yt: "EBS 초등 스토리 한국사 일제강점기 독립운동",
    points: [
      "1919년 3·1 운동이 전국으로 퍼지고, 대한민국 임시정부가 상하이에 세워졌어요.",
      "봉오동 전투와 청산리 대첩에서 독립군이 크게 이겼어요.",
      "물산장려운동, 형평운동 등 다양한 사회 운동도 일어났어요."
    ],
    quiz: [
      { q: "3·1 운동이 일어난 해는?", choices: ["1919년", "1910년", "1945년", "1905년"], answer: 0, explain: "1919년 3월 1일 독립을 외치는 만세 운동이 전국으로 퍼졌습니다." },
      { q: "3·1 운동을 계기로 세워진 정부는?", choices: ["대한민국 임시정부", "대한제국", "조선", "고려"], answer: 0, explain: "1919년 상하이에서 대한민국 임시정부가 세워졌습니다." },
      { q: "독립군이 일본군을 크게 물리친 전투는?", choices: ["봉오동 전투와 청산리 대첩", "한산도 대첩", "귀주 대첩", "행주 대첩"], answer: 0, explain: "1920년 봉오동 전투와 청산리 대첩에서 독립군이 크게 이겼습니다." },
      { q: "물산장려운동이란?", choices: ["우리 나라 물건을 사 쓰자는 운동", "물을 아끼자는 운동", "외국 물건을 사자는 운동", "농사를 그만두자는 운동"], answer: 0, explain: "토산품을 애용해 민족 산업을 키우려는 운동이었습니다." },
      { q: "일제의 식민 정책으로 알맞은 것은?", choices: ["토지 조사로 농민의 땅을 빼앗음", "모든 학교를 늘림", "조선 사람에게 자유를 줌", "조선어 사용을 장려"], answer: 0, explain: "토지 조사 사업으로 많은 농민이 땅을 잃었습니다." },
      { q: "1910년대 일제가 훼손한 대표적 문화유산은?", choices: ["경복궁 일부와 궁궐 건물", "석굴암", "첨성대", "팔만대장경"], answer: 0, explain: "경복궁의 여러 전각이 헐리고 조선 총독부 건물이 들어섰습니다." },
      { q: "대한민국 임시정부가 세워진 곳은?", choices: ["상하이", "서울", "평양", "개경"], answer: 0, explain: "1919년 중국 상하이에서 세워졌습니다." },
      { q: "일제강점기 우리말을 지키려는 노력의 예는?", choices: ["조선어 학회 활동", "신사 참배", "창씨개명 수용", "한자만 사용"], answer: 0, explain: "조선어 학회는 우리말 사전을 만들며 우리말을 지키려 했습니다." },
      { q: "일제가 1930년대 후반에 한 일은?", choices: ["전쟁에 쓸 사람을 데려감", "독립을 허락함", "토지를 나눠 줌", "스스로 물러남"], answer: 0, explain: "전쟁 물자를 대고 사람까지 동원했으며 일본식 이름을 쓰게 했습니다." },
      { q: "광복을 맞이한 해는?", choices: ["1945년", "1919년", "1936년", "1950년"], answer: 0, explain: "1945년 8월 15일 우리나라는 일제로부터 해방되었습니다." }
    ]
  },
  person: {
    name: "김정호",
    life: "1804? ~ 1866?",
    tag: "조선 후기 지리학자 · 《대동여지도》",
    summary: "김정호는 우리나라 땅을 정확하게 그린 지도를 만든 지리학자입니다. 《대동여지도》는 산과 강, 도로를 자세히 담은 목판 지도입니다.",
    facts: [
      "《대동여지도》를 목판에 새겨 여러 장을 이어 붙여 펼칠 수 있게 했어요.",
      "지도에 산의 높낮이와 도로, 거리까지 표시했습니다.",
      "여러 번 답사하며 직접 확인해 지도를 만들었습니다.",
      "《대동지지》라는 지리 책도 남겼습니다."
    ],
    quiz: [
      { q: "김정호가 만든 대표적인 지도는?", choices: ["대동여지도", "팔만대장경", "직지심체요절", "동의보감"], answer: 0, explain: "《대동여지도》는 목판으로 찍어 만든 전국 지도입니다." },
      { q: "《대동여지도》의 특징은?", choices: ["산과 강, 도로를 자세히 표시함", "바다만 그렸음", "글자 없이 색만 있음", "외국 지도임"], answer: 0, explain: "산의 모양, 하천, 도로와 거리를 자세히 담았습니다." }
    ]
  },
  science: {
    title: "잠자는 동안 뇌가 하는 일",
    summary: "잠은 쉬는 시간이 아니라 뇌가 오늘 배운 것을 정리하고 몸을 고치는 시간입니다.",
    body: "자는 동안에도 뇌는 쉬지 않습니다. 낮에 배운 것들이 뇌에 다시 흘러가며 중요한 것만 오래 남는 형태로 바뀌어요. 이것을 기억의 공고화라고 합니다. 자는 동안 몸에서는 성장 호르몬이 나오고, 낮에 쌓인 피로 물질이 줄어듭니다. 그래서 잠을 줄이고 밤늦게까지 공부하면 배운 것을 오래 기억하기 어렵습니다. 초등학생은 하루 9시간 정도의 잠이 권장됩니다.",
    quiz: [
      { q: "자는 동안 뇌가 하는 일로 알맞은 것은?", choices: ["배운 것을 정리하고 기억을 굳힌다", "완전히 꺼진다", "아무것도 하지 않는다", "다음날 숙제를 쓴다"], answer: 0, explain: "배운 내용이 중요한 기억으로 바뀌는 공고화가 일어납니다." },
      { q: "잠이 부족할 때의 영향으로 알맞은 것은?", choices: ["배운 것을 기억하기 어렵다", "두통이 사라진다", "키가 빨리 큰다", "기억이 늘어난다"], answer: 0, explain: "수면이 부족하면 기억 정리가 잘 되지 않습니다." }
    ]
  }
});
