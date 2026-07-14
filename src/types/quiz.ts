export type QuizOption = {
  id: string;
  label: string;
  scores: Record<string, number>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export type QuizOutcome = {
  id: string;
  title: string;
  description: string;
  tips: string[];
};

export type QuizFAQ = {
  question: string;
  answer: string;
};

export type Quiz = {
  slug: string;
  title: string;
  category: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  estimatedTime: string;
  updatedAt: string;
  questions: QuizQuestion[];
  outcomes: QuizOutcome[];
  faqs: QuizFAQ[];
  relatedQuizzes: string[];
};
