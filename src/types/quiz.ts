export type QuizOption = { id: string; label: string; scores: Record<string, number>; };
export type QuizQuestion = { id: string; prompt: string; options: QuizOption[]; };
export type QuizOutcome = {
  id: string; title: string; icon?: string; description: string; strengths: string[]; watchOuts: string[]; tips: string[]; careerIdeas?: string[];
};
export type QuizFAQ = { question: string; answer: string; };
export type Quiz = {
  slug: string; title: string; shortTitle: string; categorySlug: string; description: string; seoTitle: string; seoDescription: string; introduction: string; estimatedTime: string; updatedDate: string; tags: string[]; disclaimer: string; questions: QuizQuestion[]; outcomes: QuizOutcome[]; faqs: QuizFAQ[]; relatedQuizSlugs: string[];
};
