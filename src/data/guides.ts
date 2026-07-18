export type GuideSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  categorySlug: string;
  updatedDate: string;
  readTime: string;
  intro: string;
  sections: GuideSection[];
  relatedQuizSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-use-personality-quizzes",
    title: "How to use personality quizzes without putting yourself in a box",
    description: "A practical guide to treating personality quiz results as useful prompts rather than permanent labels.",
    seoTitle: "How to Use Personality Quizzes Thoughtfully | Mindrailo",
    seoDescription: "Learn how to use free personality quizzes for reflection without treating a result as a diagnosis or fixed identity.",
    categorySlug: "personality",
    updatedDate: "2026-07-17",
    readTime: "6 minute read",
    intro: "Personality quizzes can help you notice patterns, start conversations and test new ideas. They become less useful when a result is treated as a permanent verdict. This guide explains a balanced way to use them.",
    sections: [
      {
        heading: "Treat the result as a snapshot",
        paragraphs: [
          "Your answers are influenced by your current responsibilities, energy, environment and recent experiences. A result can describe what feels natural today without defining what will always be true.",
          "A better question than ‘Is this exactly who I am?’ is ‘Which parts of this result feel useful, and where do I see exceptions?’"
        ]
      },
      {
        heading: "Look for patterns you can test",
        paragraphs: [
          "The strongest value often comes from turning a broad result into a small experiment. A person who receives a planning-oriented result might test a weekly planning session. Someone with an exploratory result might protect time for open-ended learning."
        ],
        points: [
          "Choose one strength that already helps you.",
          "Choose one watch-out that sometimes creates friction.",
          "Try one practical change for seven days.",
          "Review what happened before accepting or rejecting the idea."
        ]
      },
      {
        heading: "Compare results with real evidence",
        paragraphs: [
          "Think about specific situations rather than general impressions. How do you behave when a deadline is close? What happens in an unfamiliar group? How do you recover after a demanding week? Real examples make reflection more useful.",
          "It is also normal for different quizzes to highlight different sides of you. Context matters, and people are more flexible than a four-part profile can show."
        ]
      },
      {
        heading: "Know when a quiz is not enough",
        paragraphs: [
          "Entertainment and self-reflection quizzes are not clinical assessments and should not be used to diagnose a condition, make a major medical decision or determine whether someone is suitable for a job. Use qualified professional support when the decision carries serious consequences."
        ]
      }
    ],
    relatedQuizSlugs: ["introvert-extrovert-ambivert", "communication-style", "decision-making-style"],
    faqs: [
      { question: "Are online personality quizzes accurate?", answer: "They can highlight useful patterns, but accuracy varies. Treat a result as a prompt for reflection and compare it with real examples from your life." },
      { question: "Can my personality quiz result change?", answer: "Yes. Answers can shift with context, experience, responsibilities and mood. A result is better understood as a snapshot than a permanent label." },
      { question: "Should I use a personality quiz for hiring or diagnosis?", answer: "No. A general online quiz should not replace validated assessments, professional judgement or clinical advice." }
    ]
  },
  {
    slug: "career-direction-without-perfect-answer",
    title: "How to explore career direction when there is no perfect answer",
    description: "A low-pressure method for turning career interests and strengths into practical next steps.",
    seoTitle: "How to Explore Career Direction | Mindrailo",
    seoDescription: "Use strengths, interests and small experiments to explore career direction without waiting for one perfect answer.",
    categorySlug: "career",
    updatedDate: "2026-07-17",
    readTime: "7 minute read",
    intro: "Career direction rarely appears as one perfect answer. A more reliable approach is to combine evidence about your interests, strengths, working preferences and real-world constraints, then run small experiments.",
    sections: [
      {
        heading: "Separate interests from job titles",
        paragraphs: [
          "Job titles change quickly, but the activities behind them are more stable. You may enjoy explaining, organising, persuading, investigating, designing or supporting. Start with activities that hold your attention instead of searching for one magical title."
        ],
        points: [
          "Which tasks make time pass quickly?",
          "Which problems do other people ask you to solve?",
          "Which responsibilities give you energy rather than only status?",
          "Which constraints—location, income, schedule or training—must be respected?"
        ]
      },
      {
        heading: "Use strengths as evidence, not flattery",
        paragraphs: [
          "A useful strength is something you can demonstrate with examples. ‘Good with people’ becomes stronger when you can point to resolving a customer issue, explaining a difficult idea or coordinating a team during a busy period.",
          "Write down three situations where your contribution changed the outcome. The repeated actions are often more informative than the industry in which they happened."
        ]
      },
      {
        heading: "Run a small career experiment",
        paragraphs: [
          "Before paying for a long course or making a major move, test the work in a smaller way. Complete a short project, speak with someone doing the role, volunteer for a related task or create a portfolio sample.",
          "The goal is not to prove that a career is perfect. It is to collect better information than you had before."
        ]
      },
      {
        heading: "Choose the next useful step",
        paragraphs: [
          "A career decision does not need to settle the next twenty years. It needs to create a sensible next chapter. Choose the option that builds transferable skills, keeps important constraints manageable and gives you more evidence about what suits you."
        ]
      }
    ],
    relatedQuizSlugs: ["career-interests", "workplace-strengths", "leadership-style"],
    faqs: [
      { question: "Can a quiz tell me the best career for me?", answer: "A quiz can suggest patterns and questions, but it cannot account for every skill, opportunity, responsibility or labour-market condition. Use it as one input." },
      { question: "What should I do when I have several career interests?", answer: "Look for shared activities and transferable skills, then test one direction through a small project, conversation or short course." },
      { question: "Do I need to find my passion before choosing a career?", answer: "No. Interest often grows through competence, useful work and good conditions. A practical next step can be more valuable than waiting for certainty." }
    ]
  },
  {
    slug: "build-better-study-habits",
    title: "How to build study habits that fit the way you actually learn",
    description: "A practical guide to testing study routines, recall methods and realistic planning.",
    seoTitle: "How to Build Better Study Habits | Mindrailo",
    seoDescription: "Build better study habits with realistic planning, active recall, spaced practice and small weekly experiments.",
    categorySlug: "education",
    updatedDate: "2026-07-17",
    readTime: "7 minute read",
    intro: "A good study method is not the one that sounds most impressive. It is the one you can repeat, that helps you remember, and that matches the kind of material you are learning.",
    sections: [
      {
        heading: "Start with the outcome",
        paragraphs: [
          "Different tasks require different methods. Remembering vocabulary is not the same as solving a maths problem or writing an essay. Define what you need to be able to do at the end of the session."
        ],
        points: [
          "Recall key facts without looking.",
          "Explain the idea in your own words.",
          "Solve a new problem using the method.",
          "Create an outline or argument from evidence."
        ]
      },
      {
        heading: "Replace some rereading with retrieval",
        paragraphs: [
          "Rereading can feel fluent because the material is familiar, but familiarity is not the same as being able to recall it later. Close the book and write what you remember, answer practice questions or explain the topic aloud.",
          "Check your answer afterwards. The correction step matters because it stops an early mistake from becoming a repeated one."
        ]
      },
      {
        heading: "Use shorter sessions more consistently",
        paragraphs: [
          "A realistic thirty-minute session repeated across the week is usually more sustainable than an ambitious plan that depends on perfect motivation. Decide in advance when the session begins, what resource you need and what ‘finished’ means.",
          "Leave a visible note for the next session so restarting takes less effort."
        ]
      },
      {
        heading: "Review the method, not only the result",
        paragraphs: [
          "Once a week, ask which method helped you recall or apply the material most effectively. Keep what worked, change one weak point and avoid redesigning your entire routine after one difficult day."
        ]
      }
    ],
    relatedQuizSlugs: ["learning-approach", "study-habits", "decision-making-style"],
    faqs: [
      { question: "What is the best study technique?", answer: "There is no single method for every task. Active recall, spaced practice, worked examples and feedback are useful starting points, depending on what you need to learn." },
      { question: "How long should a study session be?", answer: "Use a duration you can repeat with good attention. For many people, 25–45 focused minutes followed by a short break is a practical starting point." },
      { question: "Are learning styles fixed?", answer: "People have preferences, but it is usually better to match the method to the subject and task rather than treating yourself as one fixed type of learner." }
    ]
  },
  {
    slug: "understand-everyday-money-habits",
    title: "How to understand your everyday money habits without shame",
    description: "A calm, non-judgemental framework for noticing spending, saving and planning patterns.",
    seoTitle: "Understand Your Everyday Money Habits | Mindrailo",
    seoDescription: "Reflect on everyday spending, saving and planning habits with a practical, non-judgemental framework.",
    categorySlug: "money",
    updatedDate: "2026-07-17",
    readTime: "6 minute read",
    intro: "Money behaviour is shaped by income, responsibilities, habits, emotions and the systems around us. Reflection is most useful when it produces clearer choices rather than guilt.",
    sections: [
      {
        heading: "Notice the situation around the decision",
        paragraphs: [
          "Instead of labelling a purchase as simply good or bad, notice what was happening. Were you tired, celebrating, solving an urgent problem, influenced by a discount or avoiding a difficult task? Context reveals patterns that a total alone cannot show."
        ]
      },
      {
        heading: "Create a small pause",
        paragraphs: [
          "For non-essential purchases, a short waiting rule can separate genuine value from temporary urgency. The pause might be twenty-four hours for a small item or a week for a larger one.",
          "The goal is not to remove enjoyment. It is to make sure the decision still feels worthwhile after the strongest emotion has passed."
        ]
      },
      {
        heading: "Automate the behaviour you want",
        paragraphs: [
          "Good intentions compete with busy days. A scheduled transfer, calendar reminder or separate spending category reduces the number of decisions you need to make repeatedly.",
          "Start with an amount that is sustainable. A smaller system that continues is more useful than an impressive plan that stops after two weeks."
        ]
      },
      {
        heading: "Use reflection, not comparison",
        paragraphs: [
          "Another person's spending or saving target may be unsuitable for your income, family, location or priorities. Compare your decisions with your own goals and constraints.",
          "For regulated financial decisions, investments, debt or tax questions, use reliable current information and qualified advice where appropriate."
        ]
      }
    ],
    relatedQuizSlugs: ["money-personality", "decision-making-style", "workplace-strengths"],
    faqs: [
      { question: "Can a money personality quiz give financial advice?", answer: "No. It can help you reflect on habits, but it cannot assess your full circumstances or replace regulated financial advice." },
      { question: "How can I change an impulsive spending habit?", answer: "Start with one trigger, add a short waiting period and make the preferred alternative easier. Review the pattern without treating one setback as failure." },
      { question: "Is saving automatically always better?", answer: "Saving can support resilience and goals, but the right balance depends on essentials, debt, responsibilities and quality of life. Context matters." }
    ]
  }
];

export const guideLookup = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<string, Guide>;
