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
      "Discover your internet creative archetype through a polished 10-question quiz built for curiosity, reflection and playful self-discovery.",
    estimatedTime: "3 minutes",
    updatedAt: "2026-07-14",
    questions: [
      {
        id: "q1",
        prompt: "When you stumble on a striking idea online, what feels most natural?",
        options: [
          { id: "a", label: "I turn it into a story people will remember.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "I imagine how it could shape a bigger future.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "I want to build something useful around it.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "I start following side paths until something clicks.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q2",
        prompt: "Which online space energises you most?",
        options: [
          { id: "a", label: "A thoughtful community where a point of view can land.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "A place where big, bold ideas can take shape.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "A space for making, tinkering and shipping.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "A trail of new inspiration that keeps unfolding.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q3",
        prompt: "If you had to share an idea with others, what would feel easiest?",
        options: [
          { id: "a", label: "Crafting a clear, moving narrative around it.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "Showing them the larger pattern or opportunity.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "Turning it into something practical they can use.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "Giving them a fresh angle to explore.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q4",
        prompt: "What kind of project do you enjoy most?",
        options: [
          { id: "a", label: "Something expressive that creates an emotional response.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "A concept that could change how people think or feel.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "A useful object, experience or system you can refine.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "A playful experiment that surprises you.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q5",
        prompt: "How do you usually respond to a new trend?",
        options: [
          { id: "a", label: "I look for the story beneath it and what it means.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "I ask what future direction it might point to.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "I try to improve the experience or make it better.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "I want to test it, remix it and see what happens.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q6",
        prompt: "Which challenge feels most exciting?",
        options: [
          { id: "a", label: "Making an idea feel vivid and human.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "Connecting a bunch of ideas into something bigger.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "Solving a practical problem with elegance.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "Following a curiosity until it opens new ground.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q7",
        prompt: "What makes you feel most alive online?",
        options: [
          { id: "a", label: "Sharing something that genuinely resonates.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "Seeing a possibility others have not noticed yet.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "Creating something that makes life easier.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "Discovering a fresh angle that feels new.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q8",
        prompt: "When an idea feels unfinished, what is your instinct?",
        options: [
          { id: "a", label: "I add the human detail that makes it resonate.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "I look for the bigger shape it could become.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "I refine the structure until it works smoothly.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "I keep experimenting until the path becomes clearer.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q9",
        prompt: "What does your ideal creative evening look like?",
        options: [
          { id: "a", label: "Writing something intimate, funny or moving.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "Sketching a future version of something important.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "Building a tiny project that feels genuinely useful.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "Tumbling through new references and unexpected ideas.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
      {
        id: "q10",
        prompt: "What would you like your creative work to leave behind?",
        options: [
          { id: "a", label: "A feeling people carry with them long after.", scores: { storyteller: 3, visionary: 1, builder: 0, explorer: 1 } },
          { id: "b", label: "A possibility that changes how people think.", scores: { visionary: 3, storyteller: 1, builder: 1, explorer: 1 } },
          { id: "c", label: "Something practical that makes everyday life better.", scores: { builder: 3, visionary: 1, storyteller: 0, explorer: 1 } },
          { id: "d", label: "A new path of curiosity that others can follow.", scores: { explorer: 3, visionary: 1, storyteller: 1, builder: 0 } },
        ],
      },
    ],
    outcomes: [
      {
        id: "visionary",
        title: "The Visionary",
        description:
          "You tend to sense the bigger possibility behind a spark and connect it to a future that feels exciting, meaningful and worth building toward.",
        icon: "🌌",
        strengths: ["Big-picture thinking", "Pattern recognition", "Inspiring possibilities"],
        careers: ["Product strategist", "Brand visionary", "Experience designer", "Innovation lead"],
        famousExamples: ["Steve Jobs", "Arianna Huffington", "Maya Angelou"],
        tips: [
          "Keep a shortlist of the ideas that feel most alive to you and revisit them in a week.",
          "Pair your vision with one concrete next step so the spark becomes momentum.",
        ],
      },
      {
        id: "builder",
        title: "The Builder",
        description:
          "You know how to turn inspiration into something practical, polished and genuinely useful for the people around you.",
        icon: "🔧",
        strengths: ["Execution", "Problem solving", "Practical creativity"],
        careers: ["Product designer", "Creative technologist", "Community builder", "Workshop facilitator"],
        famousExamples: ["Martha Stewart", "Sundar Pichai", "Tim Berners-Lee"],
        tips: [
          "Choose one tiny project and finish it before you jump to the next bright idea.",
          "Turn your rough draft into a prototype, checklist or simple roadmap.",
        ],
      },
      {
        id: "storyteller",
        title: "The Storyteller",
        description:
          "You make ideas feel human, memorable and worth sharing, and you naturally shape the world through feeling, clarity and connection.",
        icon: "✍️",
        strengths: ["Emotional resonance", "Clarity", "Connection"],
        careers: ["Content strategist", "Copywriter", "Narrative designer", "Community storyteller"],
        famousExamples: ["Maya Angelou", "Neil Gaiman", "Rupi Kaur"],
        tips: [
          "Try writing one short reflection or caption a day so your voice keeps growing.",
          "Share your ideas in a warm, conversational way that invites people in.",
        ],
      },
      {
        id: "explorer",
        title: "The Explorer",
        description:
          "You are naturally drawn to curiosity, experimentation and the joy of following a fresh thread until it reveals something unexpected.",
        icon: "🧭",
        strengths: ["Curiosity", "Adaptability", "Playful experimentation"],
        careers: ["Trend researcher", "Culture writer", "Creative strategist", "Experiential designer"],
        famousExamples: ["Satoshi Tajiri", "Mick Jagger", "Annie Leibovitz"],
        tips: [
          "Keep a mood board or note capture habit for the sparks you do not want to lose.",
          "Give yourself room to explore one new path each week without pressure to perfect it.",
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
