export type Category = {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
};

export const categories: Category[] = [
  {
    "slug": "personality",
    "title": "Personality",
    "description": "Explore everyday patterns in how you think, create and recharge.",
    "introduction": "Explore everyday patterns in how you think, create and recharge. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "✨",
    "seoTitle": "Personality Quizzes | CurioQuiz",
    "seoDescription": "Browse free personality quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  },
  {
    "slug": "career",
    "title": "Career",
    "description": "Reflect on workplace strengths, interests and preferred ways of contributing.",
    "introduction": "Reflect on workplace strengths, interests and preferred ways of contributing. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "💼",
    "seoTitle": "Career Quizzes | CurioQuiz",
    "seoDescription": "Browse free career quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  },
  {
    "slug": "psychology",
    "title": "Psychology",
    "description": "Gentle, non-clinical quizzes about habits, decisions and emotional awareness.",
    "introduction": "Gentle, non-clinical quizzes about habits, decisions and emotional awareness. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "🧠",
    "seoTitle": "Psychology Quizzes | CurioQuiz",
    "seoDescription": "Browse free psychology quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  },
  {
    "slug": "money",
    "title": "Money",
    "description": "Informational quizzes about spending, saving and everyday financial habits.",
    "introduction": "Informational quizzes about spending, saving and everyday financial habits. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "💰",
    "seoTitle": "Money Quizzes | CurioQuiz",
    "seoDescription": "Browse free money quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  },
  {
    "slug": "relationships",
    "title": "Relationships",
    "description": "Explore communication, connection and cooperation in everyday relationships.",
    "introduction": "Explore communication, connection and cooperation in everyday relationships. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "💬",
    "seoTitle": "Relationships Quizzes | CurioQuiz",
    "seoDescription": "Browse free relationships quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  },
  {
    "slug": "education",
    "title": "Education",
    "description": "Discover study habits and learning approaches worth experimenting with.",
    "introduction": "Discover study habits and learning approaches worth experimenting with. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "📚",
    "seoTitle": "Education Quizzes | CurioQuiz",
    "seoDescription": "Browse free education quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  },
  {
    "slug": "knowledge",
    "title": "Knowledge",
    "description": "Test and expand your curiosity across useful and fascinating topics.",
    "introduction": "Test and expand your curiosity across useful and fascinating topics. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "🔎",
    "seoTitle": "Knowledge Quizzes | CurioQuiz",
    "seoDescription": "Browse free knowledge quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  },
  {
    "slug": "fun",
    "title": "Fun",
    "description": "Light-hearted quizzes designed for playful self-discovery.",
    "introduction": "Light-hearted quizzes designed for playful self-discovery. Each quiz is designed for reflection and entertainment rather than diagnosis or prediction.",
    "icon": "🎈",
    "seoTitle": "Fun Quizzes | CurioQuiz",
    "seoDescription": "Browse free fun quizzes on CurioQuiz. Explore thoughtful questions, useful explanations and related quiz ideas."
  }
] as Category[];

export const categoryLookup = Object.fromEntries(categories.map((category) => [category.slug, category])) as Record<string, Category>;
