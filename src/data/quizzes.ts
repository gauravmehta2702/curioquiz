import type { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    slug: "internet-creative-archetype",
    title: "What kind of internet creative are you?",
    category: "Personality",
    description:
      "A playful reflection on how you usually explore ideas, share them and enjoy online spaces.",
    seoTitle: "Internet Creative Archetype Quiz | CurioQuiz",
    seoDescription:
      "Discover a playful internet creative archetype through a short, reflective quiz built for curiosity and self-exploration.",
    estimatedTime: "3 minutes",
    updatedAt: "2026-07-14",
    questions: [
      {
        id: "q1",
        prompt: "When you find an interesting idea online, what feels most natural?",
        options: [
          { id: "a", label: "I turn it into a story or post people remember.", scores: { storyteller: 3, curator: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "I collect it and save it for later inspiration.", scores: { curator: 3, storyteller: 0, builder: 1, explorer: 1 } },
          { id: "c", label: "I try to improve it or make it useful.", scores: { builder: 3, curator: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "I want to see how it feels in a new visual or playful form.", scores: { explorer: 3, storyteller: 1, curator: 1, builder: 0 } },
        ],
      },
      {
        id: "q2",
        prompt: "Which online activity feels most enjoyable to you?",
        options: [
          { id: "a", label: "Writing something personal and expressive.", scores: { storyteller: 3, curator: 0, builder: 1, explorer: 1 } },
          { id: "b", label: "Gathering thoughtful recommendations and links.", scores: { curator: 3, builder: 1, explorer: 0, storyteller: 1 } },
          { id: "c", label: "Building a mini project or tool.", scores: { builder: 3, curator: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "Browsing for fresh visual ideas and moods.", scores: { explorer: 3, curator: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q3",
        prompt: "When a topic interests you, what do you usually do first?",
        options: [
          { id: "a", label: "I look for a strong point of view to share.", scores: { storyteller: 3, curator: 0, builder: 1, explorer: 1 } },
          { id: "b", label: "I gather a few useful examples and references.", scores: { curator: 3, explorer: 1, builder: 1, storyteller: 0 } },
          { id: "c", label: "I sketch out a plan or experiment.", scores: { builder: 3, storyteller: 0, curator: 1, explorer: 1 } },
          { id: "d", label: "I explore different angles until something clicks.", scores: { explorer: 3, curator: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q4",
        prompt: "If you had a free afternoon online, you would probably choose to:",
        options: [
          { id: "a", label: "Write something warm, personal or memorable.", scores: { storyteller: 3, curator: 0, builder: 1, explorer: 1 } },
          { id: "b", label: "Collect and arrange beautiful or useful finds.", scores: { curator: 3, builder: 1, explorer: 1, storyteller: 0 } },
          { id: "c", label: "Make something practical or polished.", scores: { builder: 3, curator: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "Follow a trail of inspiration until it expands.", scores: { explorer: 3, storyteller: 1, curator: 1, builder: 0 } },
        ],
      },
      {
        id: "q5",
        prompt: "How do you like to help others enjoy a topic?",
        options: [
          { id: "a", label: "By telling a story that makes it feel human.", scores: { storyteller: 3, curator: 0, builder: 1, explorer: 1 } },
          { id: "b", label: "By recommending the most useful pieces.", scores: { curator: 3, explorer: 1, builder: 1, storyteller: 0 } },
          { id: "c", label: "By making it easier to use or understand.", scores: { builder: 3, curator: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "By bringing a fresh mood or visual approach.", scores: { explorer: 3, storyteller: 1, curator: 1, builder: 0 } },
        ],
      },
      {
        id: "q6",
        prompt: "What kind of feedback feels most energising?",
        options: [
          { id: "a", label: "That the message felt real and resonated.", scores: { storyteller: 3, curator: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "That you helped someone discover something worthwhile.", scores: { curator: 3, explorer: 1, builder: 1, storyteller: 0 } },
          { id: "c", label: "That the thing you made worked well.", scores: { builder: 3, curator: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "That the idea had a striking new angle.", scores: { explorer: 3, storyteller: 1, curator: 1, builder: 0 } },
        ],
      },
      {
        id: "q7",
        prompt: "What usually makes you feel most curious?",
        options: [
          { id: "a", label: "A story that opens up a bigger question.", scores: { storyteller: 3, curator: 0, builder: 1, explorer: 1 } },
          { id: "b", label: "A well-curated set of ideas and references.", scores: { curator: 3, explorer: 1, builder: 1, storyteller: 0 } },
          { id: "c", label: "A challenge that can be solved neatly.", scores: { builder: 3, curator: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "A spark of inspiration that feels new.", scores: { explorer: 3, storyteller: 1, curator: 1, builder: 0 } },
        ],
      },
      {
        id: "q8",
        prompt: "When you finish exploring something, what feels best?",
        options: [
          { id: "a", label: "That you shared something meaningful.", scores: { storyteller: 3, curator: 0, builder: 1, explorer: 1 } },
          { id: "b", label: "That you built a useful collection of ideas.", scores: { curator: 3, explorer: 1, builder: 1, storyteller: 0 } },
          { id: "c", label: "That you created something that works.", scores: { builder: 3, curator: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "That you opened a new creative path.", scores: { explorer: 3, storyteller: 1, curator: 1, builder: 0 } },
        ],
      },
    ],
    outcomes: [
      {
        id: "storyteller",
        title: "The Storyteller",
        description:
          "You often make ideas feel human, memorable and worth sharing. This result is reflective and entertainment-oriented rather than a clinical label.",
        tips: [
          "Try writing short reflections or captions that turn your observations into stories.",
          "Share one idea a day in a warm, conversational way.",
        ],
      },
      {
        id: "curator",
        title: "The Curator",
        description:
          "You enjoy gathering, arranging and helping others discover strong ideas and useful references.",
        tips: [
          "Create a small collection of articles, videos or quotes on a theme you love.",
          "Add a short note to each item so the collection feels personal.",
        ],
      },
      {
        id: "builder",
        title: "The Builder",
        description:
          "You tend to turn inspiration into something practical, useful and polished.",
        tips: [
          "Choose one tiny project and finish it before trying something bigger.",
          "Turn a rough idea into a checklist, plan or prototype.",
        ],
      },
      {
        id: "explorer",
        title: "The Explorer",
        description:
          "You often follow curiosity wherever it leads, looking for fresh angles and unexpected connections.",
        tips: [
          "Keep a notebook or mood board for stray ideas that feel exciting.",
          "Spend a little time each week exploring one new topic without pressure.",
        ],
      },
    ],
    faqs: [
      { question: "Is this quiz meant to be a personality test?", answer: "It is a light, reflective quiz for curiosity and inspiration. It should not be read as a formal assessment." },
      { question: "Can I take it more than once?", answer: "Yes. You can revisit it whenever you feel like exploring a different mood or moment." },
      { question: "Do I need an account?", answer: "No. The quiz is free to use and runs entirely in your browser." },
    ],
    relatedQuizzes: ["learning-style", "money-personality"],
  },
  {
    slug: "learning-style",
    title: "What is your learning style?",
    category: "Education",
    description:
      "A thoughtful way to explore how you might prefer to learn, without treating any one style as fixed.",
    seoTitle: "Learning Style Quiz | CurioQuiz",
    seoDescription:
      "Try a relaxed learning style quiz that highlights preferences for reflection, practice, discussion and structure.",
    estimatedTime: "4 minutes",
    updatedAt: "2026-07-14",
    questions: [
      {
        id: "q1",
        prompt: "When you learn something new, what usually helps first?",
        options: [
          { id: "a", label: "A clear explanation and a simple example.", scores: { reflective: 2, handsOn: 1, social: 1, structured: 3 } },
          { id: "b", label: "Trying it myself and adjusting as I go.", scores: { handsOn: 3, reflective: 1, social: 1, structured: 1 } },
          { id: "c", label: "Talking it through with someone else.", scores: { social: 3, reflective: 1, handsOn: 1, structured: 1 } },
          { id: "d", label: "A plan, list or step-by-step structure.", scores: { structured: 3, reflective: 2, handsOn: 1, social: 0 } },
        ],
      },
      {
        id: "q2",
        prompt: "Which kind of study moment feels most useful?",
        options: [
          { id: "a", label: "Reading quietly and thinking it through.", scores: { reflective: 3, structured: 1, social: 0, handsOn: 1 } },
          { id: "b", label: "Practising until I can do it myself.", scores: { handsOn: 3, structured: 1, social: 1, reflective: 1 } },
          { id: "c", label: "Discussing the idea with a friend or group.", scores: { social: 3, reflective: 1, structured: 1, handsOn: 0 } },
          { id: "d", label: "Following a checklist or framework.", scores: { structured: 3, reflective: 1, social: 0, handsOn: 1 } },
        ],
      },
      {
        id: "q3",
        prompt: "When a lesson feels confusing, what do you probably reach for?",
        options: [
          { id: "a", label: "A quiet moment to think it over.", scores: { reflective: 3, structured: 1, social: 0, handsOn: 1 } },
          { id: "b", label: "A practical example I can try.", scores: { handsOn: 3, structured: 1, social: 1, reflective: 0 } },
          { id: "c", label: "A person who can explain it differently.", scores: { social: 3, reflective: 1, structured: 1, handsOn: 0 } },
          { id: "d", label: "A clear sequence of steps.", scores: { structured: 3, reflective: 1, social: 0, handsOn: 1 } },
        ],
      },
      {
        id: "q4",
        prompt: "You are most likely to remember something if:",
        options: [
          { id: "a", label: "You can connect it to a bigger idea or question.", scores: { reflective: 3, structured: 1, social: 0, handsOn: 1 } },
          { id: "b", label: "You applied it in a real task.", scores: { handsOn: 3, structured: 1, social: 1, reflective: 0 } },
          { id: "c", label: "You talked it through with someone.", scores: { social: 3, reflective: 1, structured: 1, handsOn: 0 } },
          { id: "d", label: "You had a system or framework to follow.", scores: { structured: 3, reflective: 1, social: 0, handsOn: 1 } },
        ],
      },
      {
        id: "q5",
        prompt: "When you choose a learning resource, which sounds most appealing?",
        options: [
          { id: "a", label: "Something that invites reflection and questions.", scores: { reflective: 3, structured: 1, social: 0, handsOn: 1 } },
          { id: "b", label: "A hands-on project or challenge.", scores: { handsOn: 3, structured: 1, social: 1, reflective: 0 } },
          { id: "c", label: "A group class or conversation.", scores: { social: 3, reflective: 1, structured: 1, handsOn: 0 } },
          { id: "d", label: "A course with checkpoints and order.", scores: { structured: 3, reflective: 1, social: 0, handsOn: 1 } },
        ],
      },
      {
        id: "q6",
        prompt: "If you had to teach someone else, which approach feels natural?",
        options: [
          { id: "a", label: "I explain the idea slowly and thoughtfully.", scores: { reflective: 3, structured: 1, social: 1, handsOn: 0 } },
          { id: "b", label: "I show them how to do it step by step.", scores: { handsOn: 3, structured: 1, social: 1, reflective: 0 } },
          { id: "c", label: "I invite them into a conversation.", scores: { social: 3, reflective: 1, structured: 1, handsOn: 0 } },
          { id: "d", label: "I give them a framework and a sequence.", scores: { structured: 3, reflective: 1, social: 0, handsOn: 1 } },
        ],
      },
      {
        id: "q7",
        prompt: "Which environment helps you concentrate best?",
        options: [
          { id: "a", label: "A calm space where I can think quietly.", scores: { reflective: 3, structured: 1, social: 0, handsOn: 1 } },
          { id: "b", label: "A place where I can test ideas directly.", scores: { handsOn: 3, structured: 1, social: 1, reflective: 0 } },
          { id: "c", label: "A shared space with other people nearby.", scores: { social: 3, reflective: 1, structured: 1, handsOn: 0 } },
          { id: "d", label: "A tidy, organised setting with clear expectations.", scores: { structured: 3, reflective: 1, social: 0, handsOn: 1 } },
        ],
      },
      {
        id: "q8",
        prompt: "What would make a learning session feel more satisfying?",
        options: [
          { id: "a", label: "A sense of reflection and insight.", scores: { reflective: 3, structured: 1, social: 0, handsOn: 1 } },
          { id: "b", label: "A chance to try something practical.", scores: { handsOn: 3, structured: 1, social: 1, reflective: 0 } },
          { id: "c", label: "A lively conversation or explanation.", scores: { social: 3, reflective: 1, structured: 1, handsOn: 0 } },
          { id: "d", label: "A clear path and visible progress.", scores: { structured: 3, reflective: 1, social: 0, handsOn: 1 } },
        ],
      },
    ],
    outcomes: [
      {
        id: "reflective",
        title: "Reflective learner",
        description:
          "You may naturally enjoy pausing, connecting ideas and making sense of things in your own time. This is a gentle reflection, not a fixed rule.",
        tips: [
          "Pair reading with a short note-taking habit so ideas stay active.",
          "Leave space for quiet thinking before moving to the next step.",
        ],
      },
      {
        id: "handsOn",
        title: "Hands-on learner",
        description:
          "You may learn best when you can test, build and try things directly.",
        tips: [
          "Choose projects, mini challenges or practice tasks over passive reading.",
          "Keep a small list of experiments you want to try.",
        ],
      },
      {
        id: "social",
        title: "Social learner",
        description:
          "You may benefit from discussion, shared examples and the chance to explain ideas aloud.",
        tips: [
          "Study with a friend, tutor or study group when possible.",
          "Try teaching a concept in your own words after each session.",
        ],
      },
      {
        id: "structured",
        title: "Structured learner",
        description:
          "You may prefer clear steps, order and visible progress.",
        tips: [
          "Break learning into short milestones and check them off.",
          "Use a simple planner or checklist to stay on track.",
        ],
      },
    ],
    faqs: [
      { question: "Is this quiz scientifically definitive?", answer: "No. It is a simple way to reflect on preferences and habits, not a scientific measure of ability." },
      { question: "Can I use the result to choose study methods?", answer: "Yes, as a helpful prompt for trying different approaches and noticing what feels useful." },
      { question: "Do I need to match one outcome exactly?", answer: "Not at all. Many people notice a mix of preferences across different topics." },
    ],
    relatedQuizzes: ["internet-creative-archetype", "money-personality"],
  },
  {
    slug: "money-personality",
    title: "What is your money personality?",
    category: "Money",
    description:
      "A light, informational quiz about the way you tend to think about spending, saving and decisions.",
    seoTitle: "Money Personality Quiz | CurioQuiz",
    seoDescription:
      "Explore a friendly money personality quiz that highlights habits, preferences and practical reflection around money choices.",
    estimatedTime: "3 minutes",
    updatedAt: "2026-07-14",
    questions: [
      {
        id: "q1",
        prompt: "When you get extra money, what feels most natural?",
        options: [
          { id: "a", label: "I save a part of it before I do anything else.", scores: { planner: 3, saver: 2, explorer: 1, spontaneous: 1 } },
          { id: "b", label: "I put it somewhere safe and wait to decide.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 1 } },
          { id: "c", label: "I want to try something exciting with it.", scores: { explorer: 3, spontaneous: 2, planner: 1, saver: 0 } },
          { id: "d", label: "I spend it quickly because I want to enjoy it now.", scores: { spontaneous: 3, explorer: 2, planner: 0, saver: 1 } },
        ],
      },
      {
        id: "q2",
        prompt: "How do you usually feel about a budget?",
        options: [
          { id: "a", label: "I like a clear plan and categories.", scores: { planner: 3, saver: 1, explorer: 1, spontaneous: 0 } },
          { id: "b", label: "I want to make sure I am not wasting money.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 0 } },
          { id: "c", label: "I like keeping it flexible and adjusting as I go.", scores: { explorer: 3, planner: 1, saver: 1, spontaneous: 1 } },
          { id: "d", label: "I prefer to keep it simple and spontaneous.", scores: { spontaneous: 3, planner: 1, saver: 0, explorer: 1 } },
        ],
      },
      {
        id: "q3",
        prompt: "When you think about a big purchase, what matters most?",
        options: [
          { id: "a", label: "I want to understand the value and the trade-offs.", scores: { planner: 3, saver: 2, explorer: 1, spontaneous: 0 } },
          { id: "b", label: "I want to be certain I can afford it comfortably.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 0 } },
          { id: "c", label: "I want it to feel exciting or meaningful.", scores: { explorer: 3, spontaneous: 2, planner: 1, saver: 0 } },
          { id: "d", label: "I want to decide quickly and enjoy the moment.", scores: { spontaneous: 3, explorer: 2, planner: 0, saver: 1 } },
        ],
      },
      {
        id: "q4",
        prompt: "If a sale appears, what do you usually do?",
        options: [
          { id: "a", label: "I compare it against a plan before I buy.", scores: { planner: 3, saver: 1, explorer: 1, spontaneous: 0 } },
          { id: "b", label: "I think about whether it is truly worth it.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 0 } },
          { id: "c", label: "I see it as a chance to try something new.", scores: { explorer: 3, spontaneous: 2, planner: 1, saver: 0 } },
          { id: "d", label: "I might buy it on impulse if it feels right.", scores: { spontaneous: 3, explorer: 2, planner: 1, saver: 0 } },
        ],
      },
      {
        id: "q5",
        prompt: "How do you usually react to financial uncertainty?",
        options: [
          { id: "a", label: "I create a plan and try to prepare.", scores: { planner: 3, saver: 2, explorer: 1, spontaneous: 0 } },
          { id: "b", label: "I focus on building a cushion and staying cautious.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 0 } },
          { id: "c", label: "I look for flexible options and different paths.", scores: { explorer: 3, planner: 1, saver: 1, spontaneous: 1 } },
          { id: "d", label: "I take the pressure as it comes and adjust later.", scores: { spontaneous: 3, explorer: 2, planner: 0, saver: 1 } },
        ],
      },
      {
        id: "q6",
        prompt: "When choosing between two spending options, you are most likely to:",
        options: [
          { id: "a", label: "Weigh the long-term value first.", scores: { planner: 3, saver: 1, explorer: 1, spontaneous: 0 } },
          { id: "b", label: "Choose the safer or more sensible option.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 0 } },
          { id: "c", label: "Choose the one that feels more meaningful or interesting.", scores: { explorer: 3, spontaneous: 2, planner: 1, saver: 0 } },
          { id: "d", label: "Choose the one that feels good right now.", scores: { spontaneous: 3, explorer: 2, planner: 0, saver: 1 } },
        ],
      },
      {
        id: "q7",
        prompt: "What kind of money habit feels most sustainable for you?",
        options: [
          { id: "a", label: "A simple system with goals and checkpoints.", scores: { planner: 3, saver: 1, explorer: 1, spontaneous: 0 } },
          { id: "b", label: "A habit that helps me stay steady and avoid waste.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 0 } },
          { id: "c", label: "A flexible approach that lets me adjust to life.", scores: { explorer: 3, planner: 1, saver: 1, spontaneous: 1 } },
          { id: "d", label: "A habit that feels light and enjoyable.", scores: { spontaneous: 3, explorer: 2, planner: 0, saver: 1 } },
        ],
      },
      {
        id: "q8",
        prompt: "What would make your money approach feel healthier?",
        options: [
          { id: "a", label: "A clear plan and a few reliable habits.", scores: { planner: 3, saver: 1, explorer: 1, spontaneous: 0 } },
          { id: "b", label: "More awareness and less impulsive spending.", scores: { saver: 3, planner: 1, explorer: 1, spontaneous: 0 } },
          { id: "c", label: "More flexibility and room for life changes.", scores: { explorer: 3, planner: 1, saver: 1, spontaneous: 1 } },
          { id: "d", label: "A simpler way to enjoy money without overthinking it.", scores: { spontaneous: 3, explorer: 2, planner: 0, saver: 1 } },
        ],
      },
    ],
    outcomes: [
      {
        id: "planner",
        title: "The planner",
        description:
          "You may like structure, clearly defined priorities and a thoughtful approach to choices. This is an informational reflection, not a financial diagnosis.",
        tips: [
          "A simple weekly plan can make money decisions feel calmer.",
          "Set one or two clear goals so your plan stays useful.",
        ],
      },
      {
        id: "saver",
        title: "The saver",
        description:
          "You may be drawn to caution, stability and making sure your choices are sensible.",
        tips: [
          "Keep your savings visible so the habit feels motivating.",
          "Use a small buffer for unexpected costs.",
        ],
      },
      {
        id: "explorer",
        title: "The explorer",
        description:
          "You may prefer flexibility, new experiences and the freedom to adapt as life changes.",
        tips: [
          "Give yourself a spending range for fun so flexibility does not become chaos.",
          "Review your choices each month so they still fit your values.",
        ],
      },
      {
        id: "spontaneous",
        title: "The spontaneous spender",
        description:
          "You may enjoy living in the moment and making choices quickly. A little pause can help keep that style balanced.",
        tips: [
          "Try a 24-hour pause before larger purchases.",
          "Set aside a small fun budget so you can enjoy yourself without losing track.",
        ],
      },
    ],
    faqs: [
      { question: "Is this quiz a financial assessment?", answer: "No. It is a light, educational reflection and should not be treated as a diagnosis or a prediction of financial behavior." },
      { question: "Can I use the result to improve my habits?", answer: "Yes, as a prompt for interesting reflection and practical experiments with your money routine." },
      { question: "What if my result feels inaccurate?", answer: "That is normal. People often notice a mix of tendencies depending on the season, stress and goals in their life." },
    ],
    relatedQuizzes: ["internet-creative-archetype", "learning-style"],
  },
];

export const quizLookup = Object.fromEntries(quizzes.map((quiz) => [quiz.slug, quiz]));
export const quizSlugs = quizzes.map((quiz) => quiz.slug);
