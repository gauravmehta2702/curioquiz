export type KidsQuestionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type KidsQuestion = {
  id: string;
  level: KidsQuestionLevel;
  category: string;
  instruction: string;
  narrationText: string;
  question: string;
  visual?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type KidsBadge = {
  id: string;
  name: string;
  description: string;
};

export type KidsProgress = {
  highestLevelUnlocked: number;
  totalStars: number;
  totalCoins: number;
  earnedBadges: string[];
  completed: boolean;
};
