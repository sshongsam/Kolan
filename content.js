/*
 * Gachon Korean-English Campus App — Learning Content
 * 가천 한국어-영어 캠퍼스 앱 — 학습 콘텐츠
 *
 * Data structure follows the spec (section 10).
 * Loaded via <script> so the app works directly from file:// without a server.
 */
window.KOLAN_CONTENT = {
  meta: {
    app_name_en: "Gachon Korean-English Campus App",
    app_name_ko: "가천 한국어-영어 캠퍼스 앱",
    tagline_ko: "한국 대학생활에 필요한 한국어를 영어와 함께 쉽고 빠르게 배우세요.",
    tagline_en: "Learn the Korean you need for university life in Korea — easily, with English."
  },
  modules: [
    {
      module_id: 1,
      module_title_ko: "인사와 자기소개",
      module_title_en: "Greetings & Self-introduction",
      level: "beginner",
      is_free: true,
      situation: "First day of class, meeting professors and classmates",
      culture_tip:
        "In Korea, a polite bow with “안녕하세요” is the standard greeting. Add “잘 부탁드립니다” (literally “please take good care of me”) when you join a new group — it shows humility and is expected from new students.",
      roleplay: {
        prompt_ko: "수업 첫날, 옆자리 학생에게 자기소개를 해보세요.",
        prompt_en: "It's the first day of class. Introduce yourself to the student next to you.",
        role_a_ko: "학생 A: 안녕하세요. 저는 마리아입니다. 만나서 반갑습니다.",
        role_b_ko: "학생 B: 안녕하세요. 저는 민준입니다. 어느 학과 학생이에요?",
        expressions: ["안녕하세요.", "저는 ○○입니다.", "만나서 반갑습니다.", "잘 부탁드립니다."]
      },
      sentences: [
        {
          sentence_id: "1-1",
          sentence_ko: "안녕하세요. 저는 마리아입니다.",
          sentence_en: "Hello. I am Maria.",
          explanation_en: "The most common polite greeting plus introducing your name. Replace the name with your own.",
          pronunciation: "an-nyeong-ha-se-yo. jeo-neun ma-ri-a-im-ni-da.",
          level: "beginner",
          situation: "Introducing yourself",
          quiz_question: "What does “저는 ○○입니다” mean?",
          quiz_options: ["I am ○○", "Where is ○○?", "Thank you, ○○", "See you, ○○"],
          quiz_answer: "I am ○○",
          is_free: true
        },
        {
          sentence_id: "1-2",
          sentence_ko: "저는 컴퓨터공학과 학생입니다.",
          sentence_en: "I am a student in the Computer Science department.",
          explanation_en: "Use “○○학과 학생입니다” to say which department you belong to.",
          pronunciation: "jeo-neun keom-pyu-teo-gong-hak-gwa hak-saeng-im-ni-da.",
          level: "beginner",
          situation: "Saying your major",
          quiz_question: "What does “학과” mean?",
          quiz_options: ["department", "homework", "library", "professor"],
          quiz_answer: "department",
          is_free: true
        },
        {
          sentence_id: "1-3",
          sentence_ko: "만나서 반갑습니다.",
          sentence_en: "Nice to meet you.",
          explanation_en: "A standard polite phrase used when meeting someone for the first time.",
          pronunciation: "man-na-seo ban-gap-seum-ni-da.",
          level: "beginner",
          situation: "Meeting someone new",
          quiz_question: "When do you say “만나서 반갑습니다”?",
          quiz_options: ["When meeting someone new", "When leaving class", "When asking for help", "When apologizing"],
          quiz_answer: "When meeting someone new",
          is_free: true
        },
        {
          sentence_id: "1-4",
          sentence_ko: "잘 부탁드립니다.",
          sentence_en: "I look forward to working with you. (Please take good care of me.)",
          explanation_en: "Said when joining a new group, class, or team. It politely asks others for their kindness and cooperation.",
          pronunciation: "jal bu-tak-deu-rim-ni-da.",
          level: "beginner",
          situation: "Joining a new group",
          quiz_question: "“잘 부탁드립니다” is mainly used to ___.",
          quiz_options: ["politely ask for others' cooperation", "order food", "ask for directions", "say goodbye forever"],
          quiz_answer: "politely ask for others' cooperation",
          is_free: true
        },
        {
          sentence_id: "1-5",
          sentence_ko: "저는 외국인 유학생입니다.",
          sentence_en: "I am an international student.",
          explanation_en: "Use this to explain that you are an international student, for example when asking for help.",
          pronunciation: "jeo-neun oe-gug-in yu-hak-saeng-im-ni-da.",
          level: "beginner",
          situation: "Explaining you are an international student",
          quiz_question: "What does “유학생” mean?",
          quiz_options: ["international/exchange student", "graduate", "teacher", "freshman only"],
          quiz_answer: "international/exchange student",
          is_free: true
        }
      ]
    },
    {
      module_id: 2,
      module_title_ko: "수강신청",
      module_title_en: "Course Registration",
      level: "beginner",
      is_free: true,
      situation: "Registering for classes, asking about credits and timetables",
      culture_tip:
        "Course registration (수강신청) in Korea is often first-come, first-served and can fill up within seconds. Know your registration time slot in advance and prepare a backup course list.",
      roleplay: {
        prompt_ko: "행정실에서 수강신청 기간에 대해 물어보세요.",
        prompt_en: "Ask the administrative office about the course registration period.",
        role_a_ko: "학생: 수강신청 기간이 언제입니까?",
        role_b_ko: "직원: 다음 주 월요일부터 수요일까지입니다.",
        expressions: ["수강신청 기간이 언제입니까?", "이 수업을 신청하고 싶습니다.", "수강정정은 어디에서 합니까?"]
      },
      sentences: [
        {
          sentence_id: "2-1",
          sentence_ko: "이 수업을 신청하고 싶습니다.",
          sentence_en: "I would like to register for this class.",
          explanation_en: "Use “-고 싶습니다” to politely express what you want to do.",
          pronunciation: "i su-eob-eul sin-cheong-ha-go sip-seum-ni-da.",
          level: "beginner",
          situation: "Asking to register for a class",
          quiz_question: "“-고 싶습니다” is used to express ___.",
          quiz_options: ["what you want to do", "a past event", "an order", "a question only"],
          quiz_answer: "what you want to do",
          is_free: true
        },
        {
          sentence_id: "2-2",
          sentence_ko: "수강신청 기간이 언제입니까?",
          sentence_en: "When is the course registration period?",
          explanation_en: "“언제입니까?” means “when is it?” — useful for asking about any date or period.",
          pronunciation: "su-gang-sin-cheong gi-gan-i eon-je-im-ni-kka?",
          level: "beginner",
          situation: "Asking about the registration period",
          quiz_question: "What does “언제입니까?” mean?",
          quiz_options: ["When is it?", "Where is it?", "How much is it?", "Who is it?"],
          quiz_answer: "When is it?",
          is_free: true
        },
        {
          sentence_id: "2-3",
          sentence_ko: "이 과목은 몇 학점입니까?",
          sentence_en: "How many credits is this course?",
          explanation_en: "“학점” means academic credits. “몇” means “how many”.",
          pronunciation: "i gwa-mok-eun myeot hak-jeom-im-ni-kka?",
          level: "beginner",
          situation: "Asking about credits",
          quiz_question: "What does “학점” mean?",
          quiz_options: ["academic credits", "classroom", "grade report", "tuition"],
          quiz_answer: "academic credits",
          is_free: false
        },
        {
          sentence_id: "2-4",
          sentence_ko: "시간표를 변경할 수 있습니까?",
          sentence_en: "Can I change my timetable?",
          explanation_en: "“-ㄹ 수 있습니까?” asks whether something is possible.",
          pronunciation: "si-gan-pyo-reul byeon-gyeong-hal su it-seum-ni-kka?",
          level: "beginner",
          situation: "Asking to change a timetable",
          quiz_question: "What does “시간표” mean?",
          quiz_options: ["timetable/schedule", "credit", "exam", "tuition"],
          quiz_answer: "timetable/schedule",
          is_free: false
        },
        {
          sentence_id: "2-5",
          sentence_ko: "수강정정은 어디에서 합니까?",
          sentence_en: "Where do I make course changes (add/drop)?",
          explanation_en: "“수강정정” is the add/drop correction period. “어디에서” means “where”.",
          pronunciation: "su-gang-jeong-jeong-eun eo-di-e-seo ham-ni-kka?",
          level: "intermediate",
          situation: "Asking where to add/drop courses",
          quiz_question: "“어디에서” means ___.",
          quiz_options: ["where", "when", "why", "who"],
          quiz_answer: "where",
          is_free: false
        }
      ]
    },
    {
      module_id: 3,
      module_title_ko: "출석과 지각",
      module_title_en: "Attendance & Lateness",
      level: "beginner",
      is_free: false,
      situation: "Explaining attendance, lateness, and absence politely",
      culture_tip:
        "Attendance often counts toward your grade in Korean universities. If you must miss class, email your professor in advance and submit an absence note (결석계) with documentation when required.",
      roleplay: {
        prompt_ko: "수업에 늦게 도착해 교수님께 양해를 구하세요.",
        prompt_en: "You arrived late. Politely apologize to your professor.",
        role_a_ko: "학생: 교수님, 죄송합니다. 제가 조금 늦었습니다.",
        role_b_ko: "교수: 괜찮아요. 자리에 앉으세요.",
        expressions: ["제가 조금 늦었습니다.", "몸이 아파서 결석했습니다.", "결석계를 제출해야 합니까?"]
      },
      sentences: [
        {
          sentence_id: "3-1",
          sentence_ko: "오늘 출석 확인을 했습니까?",
          sentence_en: "Did you take attendance today?",
          explanation_en: "“출석 확인” means checking/taking attendance.",
          pronunciation: "o-neul chul-seok hwag-in-eul haet-seum-ni-kka?",
          level: "beginner",
          situation: "Asking about attendance check",
          quiz_question: "What does “출석” mean?",
          quiz_options: ["attendance", "absence", "homework", "exam"],
          quiz_answer: "attendance",
          is_free: false
        },
        {
          sentence_id: "3-2",
          sentence_ko: "제가 조금 늦었습니다.",
          sentence_en: "I am a little late.",
          explanation_en: "A polite way to acknowledge that you arrived late.",
          pronunciation: "je-ga jo-geum neu-jeot-seum-ni-da.",
          level: "beginner",
          situation: "Arriving late",
          quiz_question: "“늦었습니다” means ___.",
          quiz_options: ["I am late", "I am early", "I am here", "I am sick"],
          quiz_answer: "I am late",
          is_free: false
        },
        {
          sentence_id: "3-3",
          sentence_ko: "몸이 아파서 결석했습니다.",
          sentence_en: "I was absent because I was sick.",
          explanation_en: "“-아서/어서” gives a reason. “결석” means absence.",
          pronunciation: "mom-i a-pa-seo gyeol-seok-haet-seum-ni-da.",
          level: "intermediate",
          situation: "Explaining an absence",
          quiz_question: "What does “결석” mean?",
          quiz_options: ["absence", "attendance", "lateness", "leave early"],
          quiz_answer: "absence",
          is_free: false
        },
        {
          sentence_id: "3-4",
          sentence_ko: "결석계를 제출해야 합니까?",
          sentence_en: "Do I need to submit an absence note?",
          explanation_en: "“-해야 합니까?” asks whether you must do something. “결석계” is an official absence note.",
          pronunciation: "gyeol-seok-gye-reul je-chul-hae-ya ham-ni-kka?",
          level: "intermediate",
          situation: "Asking about an absence note",
          quiz_question: "“-해야 합니까?” asks about ___.",
          quiz_options: ["obligation (must I?)", "the past", "preference", "location"],
          quiz_answer: "obligation (must I?)",
          is_free: false
        },
        {
          sentence_id: "3-5",
          sentence_ko: "출석 점수는 어떻게 반영됩니까?",
          sentence_en: "How is the attendance score reflected (in the grade)?",
          explanation_en: "“어떻게” means “how”. “반영되다” means “to be reflected/counted”.",
          pronunciation: "chul-seok jeom-su-neun eo-tteo-ke ban-yeong-doem-ni-kka?",
          level: "intermediate",
          situation: "Asking how attendance affects grades",
          quiz_question: "What does “어떻게” mean?",
          quiz_options: ["how", "when", "where", "what"],
          quiz_answer: "how",
          is_free: false
        }
      ]
    },
    {
      module_id: 4,
      module_title_ko: "과제 제출",
      module_title_en: "Assignment Submission",
      level: "beginner",
      is_free: true,
      situation: "Asking about assignment content, deadlines, and submission",
      culture_tip:
        "Many courses use an LMS such as Cyber Campus to submit assignments. Check the accepted file format and submit before the deadline — late submissions are often penalized automatically.",
      roleplay: {
        prompt_ko: "조교에게 과제 제출 방법을 물어보세요.",
        prompt_en: "Ask the teaching assistant how to submit the assignment.",
        role_a_ko: "학생: 과제를 어디에 제출하면 됩니까?",
        role_b_ko: "조교: 사이버캠퍼스에 PDF 파일로 올리면 됩니다.",
        expressions: ["과제 제출 기한이 언제입니까?", "과제를 어디에 제출하면 됩니까?", "파일 형식은 무엇입니까?"]
      },
      sentences: [
        {
          sentence_id: "4-1",
          sentence_ko: "과제 제출 기한이 언제입니까?",
          sentence_en: "When is the assignment deadline?",
          explanation_en: "Use this sentence when you want to politely ask your professor or teaching assistant about the deadline for an assignment.",
          pronunciation: "gwa-je je-chul gi-han-i eon-je-im-ni-kka?",
          level: "beginner",
          situation: "Asking about an assignment deadline",
          quiz_question: "What does “과제 제출 기한” mean?",
          quiz_options: ["assignment deadline", "exam date", "class time", "tuition fee"],
          quiz_answer: "assignment deadline",
          is_free: true
        },
        {
          sentence_id: "4-2",
          sentence_ko: "과제를 어디에 제출하면 됩니까?",
          sentence_en: "Where should I submit the assignment?",
          explanation_en: "“-하면 됩니까?” politely asks what is the correct way to do something.",
          pronunciation: "gwa-je-reul eo-di-e je-chul-ha-myeon doem-ni-kka?",
          level: "beginner",
          situation: "Asking where to submit",
          quiz_question: "What does “제출” mean?",
          quiz_options: ["submission", "attendance", "deadline", "grade"],
          quiz_answer: "submission",
          is_free: true
        },
        {
          sentence_id: "4-3",
          sentence_ko: "파일 형식은 무엇입니까?",
          sentence_en: "What is the file format?",
          explanation_en: "“무엇입니까?” means “what is it?”. Use it to ask about required formats.",
          pronunciation: "pa-il hyeong-sik-eun mu-eos-im-ni-kka?",
          level: "beginner",
          situation: "Asking about file format",
          quiz_question: "“무엇입니까?” means ___.",
          quiz_options: ["What is it?", "Where is it?", "When is it?", "Who is it?"],
          quiz_answer: "What is it?",
          is_free: false
        },
        {
          sentence_id: "4-4",
          sentence_ko: "제출이 조금 늦어질 것 같습니다.",
          sentence_en: "I think my submission will be a little late.",
          explanation_en: "“-ㄹ 것 같습니다” softly expresses a guess or expectation. Polite for warning about a delay.",
          pronunciation: "je-chul-i jo-geum neu-jeo-jil geot gat-seum-ni-da.",
          level: "intermediate",
          situation: "Warning about a late submission",
          quiz_question: "“-ㄹ 것 같습니다” expresses ___.",
          quiz_options: ["a guess/expectation", "a command", "a finished action", "a greeting"],
          quiz_answer: "a guess/expectation",
          is_free: false
        },
        {
          sentence_id: "4-5",
          sentence_ko: "참고문헌은 어떻게 작성하면 됩니까?",
          sentence_en: "How should I write the references?",
          explanation_en: "“참고문헌” means references/bibliography. Useful for reports and papers.",
          pronunciation: "cham-go-mun-heon-eun eo-tteo-ke jak-seong-ha-myeon doem-ni-kka?",
          level: "intermediate",
          situation: "Asking how to write references",
          quiz_question: "What does “참고문헌” mean?",
          quiz_options: ["references/bibliography", "deadline", "attendance", "title page"],
          quiz_answer: "references/bibliography",
          is_free: false
        }
      ]
    },
    {
      module_id: 5,
      module_title_ko: "교수님께 이메일 쓰기",
      module_title_en: "Writing an Email to a Professor",
      level: "intermediate",
      is_free: false,
      situation: "Writing a polite email to a professor",
      culture_tip:
        "Always begin a professor email with “교수님, 안녕하세요”, state your course and name, keep it short and polite, and close with “감사합니다”. Avoid casual abbreviations.",
      roleplay: {
        prompt_ko: "교수님께 과제 질문 이메일을 쓰는 연습을 하세요.",
        prompt_en: "Practice writing an email to your professor with a question about an assignment.",
        role_a_ko: "학생: 교수님, 안녕하세요. 저는 한국어1 수업을 듣는 마리아입니다.",
        role_b_ko: "교수: 네, 마리아 학생. 무엇이 궁금한가요?",
        expressions: ["교수님, 안녕하세요.", "질문이 있어 이메일을 드립니다.", "확인해 주시면 감사하겠습니다."]
      },
      sentences: [
        {
          sentence_id: "5-1",
          sentence_ko: "교수님, 안녕하세요.",
          sentence_en: "Hello, Professor.",
          explanation_en: "The standard polite opening for an email or conversation with a professor.",
          pronunciation: "gyo-su-nim, an-nyeong-ha-se-yo.",
          level: "beginner",
          situation: "Opening an email",
          quiz_question: "What does “교수님” mean?",
          quiz_options: ["professor", "classmate", "staff", "senior student"],
          quiz_answer: "professor",
          is_free: false
        },
        {
          sentence_id: "5-2",
          sentence_ko: "저는 ○○수업을 듣는 학생입니다.",
          sentence_en: "I am a student taking your ○○ class.",
          explanation_en: "“수업을 듣다” means “to take a class”. This identifies which class you are in.",
          pronunciation: "jeo-neun ○○-su-eob-eul deut-neun hak-saeng-im-ni-da.",
          level: "intermediate",
          situation: "Identifying your class",
          quiz_question: "“수업을 듣다” means ___.",
          quiz_options: ["to take a class", "to skip a class", "to teach a class", "to cancel a class"],
          quiz_answer: "to take a class",
          is_free: false
        },
        {
          sentence_id: "5-3",
          sentence_ko: "질문이 있어 이메일을 드립니다.",
          sentence_en: "I am writing this email because I have a question.",
          explanation_en: "“이메일을 드리다” is a humble/polite way to say “I am sending you an email”.",
          pronunciation: "jil-mun-i it-seo i-me-il-eul deu-rim-ni-da.",
          level: "intermediate",
          situation: "Stating the purpose of the email",
          quiz_question: "What does “질문” mean?",
          quiz_options: ["question", "answer", "grade", "deadline"],
          quiz_answer: "question",
          is_free: false
        },
        {
          sentence_id: "5-4",
          sentence_ko: "확인해 주시면 감사하겠습니다.",
          sentence_en: "I would be grateful if you could check this.",
          explanation_en: "A very polite request. “-주시면 감사하겠습니다” is common in formal Korean emails.",
          pronunciation: "hwag-in-hae ju-si-myeon gam-sa-ha-get-seum-ni-da.",
          level: "intermediate",
          situation: "Politely requesting a reply",
          quiz_question: "“-주시면 감사하겠습니다” is used to ___.",
          quiz_options: ["politely make a request", "give an order", "apologize", "say goodbye to a friend"],
          quiz_answer: "politely make a request",
          is_free: false
        },
        {
          sentence_id: "5-5",
          sentence_ko: "감사합니다.",
          sentence_en: "Thank you.",
          explanation_en: "The standard polite closing for emails and conversations.",
          pronunciation: "gam-sa-ham-ni-da.",
          level: "beginner",
          situation: "Closing an email",
          quiz_question: "What does “감사합니다” mean?",
          quiz_options: ["Thank you", "Sorry", "Hello", "Goodbye"],
          quiz_answer: "Thank you",
          is_free: false
        }
      ]
    },
    {
      module_id: 6,
      module_title_ko: "발표와 토론",
      module_title_en: "Presentations & Discussion",
      level: "intermediate",
      is_free: false,
      situation: "Giving a presentation, sharing opinions, answering questions",
      culture_tip:
        "Presentations (발표) are common and often graded. Open with “지금부터 발표를 시작하겠습니다” and close with “이상으로 발표를 마치겠습니다” — these set phrases signal structure and sound professional.",
      roleplay: {
        prompt_ko: "조별 발표를 시작하고 마무리하는 연습을 하세요.",
        prompt_en: "Practice starting and ending a group presentation.",
        role_a_ko: "발표자: 지금부터 발표를 시작하겠습니다.",
        role_b_ko: "청중: 네, 잘 듣겠습니다.",
        expressions: ["지금부터 발표를 시작하겠습니다.", "제 의견은 다음과 같습니다.", "이상으로 발표를 마치겠습니다."]
      },
      sentences: [
        {
          sentence_id: "6-1",
          sentence_ko: "지금부터 발표를 시작하겠습니다.",
          sentence_en: "I will now begin my presentation.",
          explanation_en: "A formal opening phrase for a presentation. “-겠습니다” shows polite intention.",
          pronunciation: "ji-geum-bu-teo bal-pyo-reul si-jak-ha-get-seum-ni-da.",
          level: "intermediate",
          situation: "Starting a presentation",
          quiz_question: "What does “발표” mean?",
          quiz_options: ["presentation", "discussion only", "exam", "homework"],
          quiz_answer: "presentation",
          is_free: false
        },
        {
          sentence_id: "6-2",
          sentence_ko: "제 의견은 다음과 같습니다.",
          sentence_en: "My opinion is as follows.",
          explanation_en: "Use this to introduce your point in a discussion or presentation.",
          pronunciation: "je ui-gyeon-eun da-eum-gwa gat-seum-ni-da.",
          level: "intermediate",
          situation: "Stating your opinion",
          quiz_question: "What does “의견” mean?",
          quiz_options: ["opinion", "question", "answer", "topic"],
          quiz_answer: "opinion",
          is_free: false
        },
        {
          sentence_id: "6-3",
          sentence_ko: "질문해 주셔서 감사합니다.",
          sentence_en: "Thank you for your question.",
          explanation_en: "A polite response when an audience member asks you a question.",
          pronunciation: "jil-mun-hae ju-syeo-seo gam-sa-ham-ni-da.",
          level: "intermediate",
          situation: "Responding to a question",
          quiz_question: "When do you say “질문해 주셔서 감사합니다”?",
          quiz_options: ["After someone asks you a question", "Before class starts", "When submitting homework", "When you are late"],
          quiz_answer: "After someone asks you a question",
          is_free: false
        },
        {
          sentence_id: "6-4",
          sentence_ko: "다시 설명드리겠습니다.",
          sentence_en: "Let me explain again.",
          explanation_en: "Use this when you want to re-explain something more clearly.",
          pronunciation: "da-si seol-myeong-deu-ri-get-seum-ni-da.",
          level: "intermediate",
          situation: "Re-explaining a point",
          quiz_question: "“다시” means ___.",
          quiz_options: ["again", "now", "slowly", "first"],
          quiz_answer: "again",
          is_free: false
        },
        {
          sentence_id: "6-5",
          sentence_ko: "이상으로 발표를 마치겠습니다.",
          sentence_en: "This concludes my presentation.",
          explanation_en: "The standard formal closing phrase for a presentation.",
          pronunciation: "i-sang-eu-ro bal-pyo-reul ma-chi-get-seum-ni-da.",
          level: "intermediate",
          situation: "Ending a presentation",
          quiz_question: "“마치겠습니다” means ___.",
          quiz_options: ["I will finish/conclude", "I will start", "I will ask", "I will repeat"],
          quiz_answer: "I will finish/conclude",
          is_free: false
        }
      ]
    },
    {
      module_id: 7,
      module_title_ko: "조별과제",
      module_title_en: "Group Projects",
      level: "intermediate",
      is_free: false,
      situation: "Dividing roles and scheduling meetings for group work",
      culture_tip:
        "Group projects (조별과제) are very common. Decide roles early, exchange contact info (often via KakaoTalk), and share files in a common drive. Volunteering with “제가 ○○을 맡겠습니다” is appreciated.",
      roleplay: {
        prompt_ko: "조별과제 첫 회의에서 역할을 나누세요.",
        prompt_en: "Divide roles at the first group project meeting.",
        role_a_ko: "조원 A: 제가 발표를 맡겠습니다.",
        role_b_ko: "조원 B: 그럼 저는 자료 조사를 하겠습니다.",
        expressions: ["우리 조의 주제는 무엇입니까?", "회의는 언제 할까요?", "제가 발표를 맡겠습니다."]
      },
      sentences: [
        {
          sentence_id: "7-1",
          sentence_ko: "우리 조의 주제는 무엇입니까?",
          sentence_en: "What is our group's topic?",
          explanation_en: "“조” means group/team. “주제” means topic.",
          pronunciation: "u-ri jo-ui ju-je-neun mu-eos-im-ni-kka?",
          level: "intermediate",
          situation: "Asking about the group topic",
          quiz_question: "What does “주제” mean?",
          quiz_options: ["topic", "group", "role", "meeting"],
          quiz_answer: "topic",
          is_free: false
        },
        {
          sentence_id: "7-2",
          sentence_ko: "제 역할은 무엇입니까?",
          sentence_en: "What is my role?",
          explanation_en: "“역할” means role. Use this to ask what part you should take.",
          pronunciation: "je yeok-hal-eun mu-eos-im-ni-kka?",
          level: "beginner",
          situation: "Asking about your role",
          quiz_question: "What does “역할” mean?",
          quiz_options: ["role", "topic", "schedule", "file"],
          quiz_answer: "role",
          is_free: false
        },
        {
          sentence_id: "7-3",
          sentence_ko: "회의는 언제 할까요?",
          sentence_en: "When shall we have the meeting?",
          explanation_en: "“-ㄹ까요?” politely suggests or asks for a group decision. “회의” means meeting.",
          pronunciation: "hoe-ui-neun eon-je hal-kka-yo?",
          level: "intermediate",
          situation: "Scheduling a meeting",
          quiz_question: "“회의” means ___.",
          quiz_options: ["meeting", "topic", "exam", "role"],
          quiz_answer: "meeting",
          is_free: false
        },
        {
          sentence_id: "7-4",
          sentence_ko: "자료를 공유해 주세요.",
          sentence_en: "Please share the materials.",
          explanation_en: "“공유하다” means to share. “-아/어 주세요” is a polite request.",
          pronunciation: "ja-ryo-reul gong-yu-hae ju-se-yo.",
          level: "intermediate",
          situation: "Asking to share files",
          quiz_question: "What does “자료” mean?",
          quiz_options: ["materials/data", "role", "meeting", "topic"],
          quiz_answer: "materials/data",
          is_free: false
        },
        {
          sentence_id: "7-5",
          sentence_ko: "제가 발표를 맡겠습니다.",
          sentence_en: "I will take charge of the presentation.",
          explanation_en: "“맡다” means to take charge of / be responsible for a task.",
          pronunciation: "je-ga bal-pyo-reul mat-get-seum-ni-da.",
          level: "intermediate",
          situation: "Volunteering for a task",
          quiz_question: "“맡겠습니다” means ___.",
          quiz_options: ["I will take charge", "I will quit", "I will ask", "I will be late"],
          quiz_answer: "I will take charge",
          is_free: false
        }
      ]
    },
    {
      module_id: 8,
      module_title_ko: "도서관과 행정실 이용",
      module_title_en: "Library & Administrative Office",
      level: "beginner",
      is_free: false,
      situation: "Asking for documents and services at the library and office",
      culture_tip:
        "You'll often need certificates (증명서) such as enrollment or transcript documents from the administrative office, and a student ID (학생증) doubles as a library card. Many can also be issued from self-service kiosks.",
      roleplay: {
        prompt_ko: "행정실에서 증명서 발급을 문의하세요.",
        prompt_en: "Ask the administrative office about issuing a certificate.",
        role_a_ko: "학생: 증명서를 발급받을 수 있습니까?",
        role_b_ko: "직원: 네, 무인 발급기를 이용하시면 됩니다.",
        expressions: ["학생증을 발급받고 싶습니다.", "증명서를 발급받을 수 있습니까?", "책을 대출하고 싶습니다."]
      },
      sentences: [
        {
          sentence_id: "8-1",
          sentence_ko: "학생증을 발급받고 싶습니다.",
          sentence_en: "I would like to get a student ID card.",
          explanation_en: "“학생증” is your student ID card. “발급받다” means to be issued (a document/card).",
          pronunciation: "hak-saeng-jeung-eul bal-geup-bat-go sip-seum-ni-da.",
          level: "beginner",
          situation: "Requesting a student ID",
          quiz_question: "What does “학생증” mean?",
          quiz_options: ["student ID card", "certificate", "library book", "timetable"],
          quiz_answer: "student ID card",
          is_free: false
        },
        {
          sentence_id: "8-2",
          sentence_ko: "증명서를 발급받을 수 있습니까?",
          sentence_en: "Can I get a certificate issued?",
          explanation_en: "“증명서” means an official certificate (e.g., enrollment, transcript).",
          pronunciation: "jeung-myeong-seo-reul bal-geup-bat-eul su it-seum-ni-kka?",
          level: "intermediate",
          situation: "Requesting a certificate",
          quiz_question: "What does “증명서” mean?",
          quiz_options: ["certificate", "student ID", "library", "deadline"],
          quiz_answer: "certificate",
          is_free: false
        },
        {
          sentence_id: "8-3",
          sentence_ko: "도서관 이용 시간은 언제입니까?",
          sentence_en: "What are the library opening hours?",
          explanation_en: "“이용 시간” means hours of use/operation. “도서관” means library.",
          pronunciation: "do-seo-gwan i-yong si-gan-eun eon-je-im-ni-kka?",
          level: "beginner",
          situation: "Asking library hours",
          quiz_question: "What does “도서관” mean?",
          quiz_options: ["library", "office", "dormitory", "cafeteria"],
          quiz_answer: "library",
          is_free: false
        },
        {
          sentence_id: "8-4",
          sentence_ko: "책을 대출하고 싶습니다.",
          sentence_en: "I would like to borrow a book.",
          explanation_en: "“대출하다” means to borrow/check out (a book or money).",
          pronunciation: "chaeg-eul dae-chul-ha-go sip-seum-ni-da.",
          level: "beginner",
          situation: "Borrowing a book",
          quiz_question: "What does “대출” mean?",
          quiz_options: ["borrowing/checkout", "returning", "buying", "reading room"],
          quiz_answer: "borrowing/checkout",
          is_free: false
        },
        {
          sentence_id: "8-5",
          sentence_ko: "어디에서 문의하면 됩니까?",
          sentence_en: "Where should I ask (make an inquiry)?",
          explanation_en: "“문의하다” means to inquire. A useful general phrase for asking where to go.",
          pronunciation: "eo-di-e-seo mun-ui-ha-myeon doem-ni-kka?",
          level: "beginner",
          situation: "Asking where to inquire",
          quiz_question: "What does “문의” mean?",
          quiz_options: ["inquiry", "certificate", "book", "ID card"],
          quiz_answer: "inquiry",
          is_free: false
        }
      ]
    },
    {
      module_id: 9,
      module_title_ko: "가천대학교 이해",
      module_title_en: "Understanding Gachon University",
      level: "beginner",
      is_free: false,
      situation: "Understanding the university's history, campus, and vision",
      culture_tip:
        "Gachon University (가천대학교) was formed through university mergers and is known for its medical, IT, and AI programs. Knowing a little about your school's history and vision helps you connect with campus life.",
      roleplay: {
        prompt_ko: "친구에게 가천대학교를 소개하세요.",
        prompt_en: "Introduce Gachon University to a friend.",
        role_a_ko: "친구: 가천대학교는 어떤 대학입니까?",
        role_b_ko: "나: 가천대학교는 의학과 AI로 유명한 대학입니다.",
        expressions: ["가천대학교는 어떤 대학입니까?", "가천대학교의 비전은 무엇입니까?", "저는 가천대학교 학생입니다."]
      },
      sentences: [
        {
          sentence_id: "9-1",
          sentence_ko: "가천대학교는 어떤 대학입니까?",
          sentence_en: "What kind of university is Gachon University?",
          explanation_en: "“어떤” means “what kind of”. Use it to ask about characteristics.",
          pronunciation: "ga-cheon-dae-hak-gyo-neun eo-tteon dae-hag-im-ni-kka?",
          level: "beginner",
          situation: "Asking about the university",
          quiz_question: "What does “어떤” mean?",
          quiz_options: ["what kind of", "how many", "where", "when"],
          quiz_answer: "what kind of",
          is_free: false
        },
        {
          sentence_id: "9-2",
          sentence_ko: "이길여 총장님은 어떤 분입니까?",
          sentence_en: "Who is Chancellor Lee Gil-ya?",
          explanation_en: "“총장” means university chancellor/president. “분” is a polite counter for a person.",
          pronunciation: "i-gil-yeo chong-jang-nim-eun eo-tteon bun-im-ni-kka?",
          level: "intermediate",
          situation: "Asking about the chancellor",
          quiz_question: "What does “총장” mean?",
          quiz_options: ["university chancellor/president", "professor", "department head", "classmate"],
          quiz_answer: "university chancellor/president",
          is_free: false
        },
        {
          sentence_id: "9-3",
          sentence_ko: "가천대학교의 비전은 무엇입니까?",
          sentence_en: "What is Gachon University's vision?",
          explanation_en: "“비전” (vision) is borrowed from English and used in university mottos.",
          pronunciation: "ga-cheon-dae-hak-gyo-ui bi-jeon-eun mu-eos-im-ni-kka?",
          level: "intermediate",
          situation: "Asking about the vision",
          quiz_question: "What does “비전” mean?",
          quiz_options: ["vision", "history", "campus", "tuition"],
          quiz_answer: "vision",
          is_free: false
        },
        {
          sentence_id: "9-4",
          sentence_ko: "학교의 주요 시설은 어디에 있습니까?",
          sentence_en: "Where are the main facilities of the school?",
          explanation_en: "“시설” means facilities. “주요” means main/major.",
          pronunciation: "hak-gyo-ui ju-yo si-seol-eun eo-di-e it-seum-ni-kka?",
          level: "intermediate",
          situation: "Asking about facilities",
          quiz_question: "What does “시설” mean?",
          quiz_options: ["facilities", "history", "vision", "schedule"],
          quiz_answer: "facilities",
          is_free: false
        },
        {
          sentence_id: "9-5",
          sentence_ko: "저는 가천대학교 학생입니다.",
          sentence_en: "I am a Gachon University student.",
          explanation_en: "A simple, useful sentence to state which university you attend.",
          pronunciation: "jeo-neun ga-cheon-dae-hak-gyo hak-saeng-im-ni-da.",
          level: "beginner",
          situation: "Saying which university you attend",
          quiz_question: "How do you say “I am a Gachon University student”?",
          quiz_options: [
            "저는 가천대학교 학생입니다.",
            "가천대학교는 어떤 대학입니까?",
            "학교의 시설은 어디에 있습니까?",
            "감사합니다."
          ],
          quiz_answer: "저는 가천대학교 학생입니다.",
          is_free: false
        }
      ]
    },
    {
      module_id: 10,
      module_title_ko: "AI Vision과 미래 학습",
      module_title_en: "AI Vision & Future Learning",
      level: "intermediate",
      is_free: false,
      situation: "Talking about AI, self-directed learning, and your career",
      culture_tip:
        "Korean universities increasingly emphasize AI literacy and self-directed learning (자기주도 학습). Being able to talk about how you use AI tools and prepare for your career is a real advantage.",
      roleplay: {
        prompt_ko: "진로 상담에서 AI 활용 계획을 이야기하세요.",
        prompt_en: "Talk about your plan to use AI during a career counseling session.",
        role_a_ko: "상담사: 앞으로 어떻게 공부할 계획인가요?",
        role_b_ko: "학생: 저는 AI를 활용해 공부하고 있습니다.",
        expressions: ["저는 AI를 활용해 공부하고 있습니다.", "대학에서 AI 활용 능력은 중요합니다.", "저는 새로운 기술을 배우고 싶습니다."]
      },
      sentences: [
        {
          sentence_id: "10-1",
          sentence_ko: "저는 AI를 활용해 공부하고 있습니다.",
          sentence_en: "I am studying using AI.",
          explanation_en: "“활용하다” means to use/utilize. “-고 있습니다” shows an ongoing action.",
          pronunciation: "jeo-neun AI-reul hwal-yong-hae gong-bu-ha-go it-seum-ni-da.",
          level: "intermediate",
          situation: "Talking about how you study",
          quiz_question: "What does “활용하다” mean?",
          quiz_options: ["to use/utilize", "to forget", "to teach", "to finish"],
          quiz_answer: "to use/utilize",
          is_free: false
        },
        {
          sentence_id: "10-2",
          sentence_ko: "AI는 학습을 도와줄 수 있습니다.",
          sentence_en: "AI can help with learning.",
          explanation_en: "“도와주다” means to help. “-ㄹ 수 있습니다” means “can / is able to”.",
          pronunciation: "AI-neun hak-seub-eul do-wa-jul su it-seum-ni-da.",
          level: "intermediate",
          situation: "Describing what AI can do",
          quiz_question: "What does “학습” mean?",
          quiz_options: ["learning", "homework", "exam", "career"],
          quiz_answer: "learning",
          is_free: false
        },
        {
          sentence_id: "10-3",
          sentence_ko: "저는 미래 진로를 준비하고 있습니다.",
          sentence_en: "I am preparing for my future career.",
          explanation_en: "“진로” means career path. “준비하다” means to prepare.",
          pronunciation: "jeo-neun mi-rae jin-ro-reul jun-bi-ha-go it-seum-ni-da.",
          level: "intermediate",
          situation: "Talking about your career",
          quiz_question: "What does “진로” mean?",
          quiz_options: ["career path", "learning", "vision", "facility"],
          quiz_answer: "career path",
          is_free: false
        },
        {
          sentence_id: "10-4",
          sentence_ko: "대학에서 AI 활용 능력은 중요합니다.",
          sentence_en: "AI skills are important at university.",
          explanation_en: "“능력” means ability/skill. “중요하다” means to be important.",
          pronunciation: "dae-hag-e-seo AI hwal-yong neung-nyeog-eun jung-yo-ham-ni-da.",
          level: "intermediate",
          situation: "Emphasizing the importance of AI skills",
          quiz_question: "What does “중요합니다” mean?",
          quiz_options: ["it is important", "it is difficult", "it is easy", "it is finished"],
          quiz_answer: "it is important",
          is_free: false
        },
        {
          sentence_id: "10-5",
          sentence_ko: "저는 새로운 기술을 배우고 싶습니다.",
          sentence_en: "I want to learn new technology/skills.",
          explanation_en: "“기술” means technology/skill. “배우다” means to learn.",
          pronunciation: "jeo-neun sae-ro-un gi-sul-eul bae-u-go sip-seum-ni-da.",
          level: "intermediate",
          situation: "Expressing what you want to learn",
          quiz_question: "What does “배우다” mean?",
          quiz_options: ["to learn", "to teach", "to forget", "to prepare"],
          quiz_answer: "to learn",
          is_free: false
        }
      ]
    }
  ]
};
