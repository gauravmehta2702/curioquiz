export type Category = {
  slug: string;
  title: string;
  description: string;
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "personality",
    title: "Personality",
    description: "Reflective quizzes that explore how you tend to think, interact and create.",
    accent: "#6755d9",
  },
  {
    slug: "career",
    title: "Career",
    description: "Light, useful prompts for exploring strengths, ambitions and work style.",
    accent: "#7b6be9",
  },
  {
    slug: "psychology",
    title: "Psychology",
    description: "Short, thoughtful reflections on motivation, habits and decision-making.",
    accent: "#8e7ef0",
  },
  {
    slug: "money",
    title: "Money",
    description: "Informational quizzes about spending, saving and everyday financial habits.",
    accent: "#ffbd59",
  },
  {
    slug: "relationships",
    title: "Relationships",
    description: "Gentle prompts for reflection around connection, communication and caring.",
    accent: "#f4a7b2",
  },
  {
    slug: "education",
    title: "Education",
    description: "Explore how you might prefer to learn, reflect and practice.",
    accent: "#6dc7b3",
  },
  {
    slug: "knowledge",
    title: "Knowledge",
    description: "Fun, concise quizzes that invite curiosity across a variety of topics.",
    accent: "#4fb9d6",
  },
  {
    slug: "fun",
    title: "Fun",
    description: "Playful prompts that turn curiosity into a short, enjoyable experience.",
    accent: "#f49f57",
  },
];
