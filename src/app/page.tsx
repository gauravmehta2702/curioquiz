import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Coins,
  Gamepad2,
  Heart,
  Lightbulb,
  Sparkles,
  Star,
} from "lucide-react";

const categories = [
  {
    title: "Personality",
    description: "Discover your habits, strengths and personal style.",
    icon: Sparkles,
    href: "/categories/personality/",
  },
  {
    title: "Career",
    description: "Explore careers, workplace strengths and ambitions.",
    icon: BriefcaseBusiness,
    href: "/categories/career/",
  },
  {
    title: "Psychology",
    description: "Learn about motivation, communication and decisions.",
    icon: Brain,
    href: "/categories/psychology/",
  },
  {
    title: "Money",
    description: "Understand your spending, saving and risk style.",
    icon: Coins,
    href: "/categories/money/",
  },
  {
    title: "Relationships",
    description: "Explore communication and connection styles.",
    icon: Heart,
    href: "/categories/relationships/",
  },
  {
    title: "Knowledge",
    description: "Test what you know across fascinating subjects.",
    icon: BookOpen,
    href: "/categories/knowledge/",
  },
];

const featuredQuizzes = [
  {
    title: "What Kind of Internet Creative Are You?",
    description:
      "Discover whether you are a storyteller, curator, builder or visual explorer.",
    category: "Personality",
    href: "/quiz/internet-creative-archetype/",
    time: "3 minutes",
    emoji: "🎨",
  },
  {
    title: "What Is Your Learning Style?",
    description:
      "Explore the study methods and learning habits that may suit you best.",
    category: "Education",
    href: "/quiz/learning-style/",
    time: "4 minutes",
    emoji: "📚",
  },
  {
    title: "What Is Your Money Personality?",
    description:
      "Learn whether you tend to be a planner, saver, explorer or spontaneous spender.",
    category: "Money",
    href: "/quiz/money-personality/",
    time: "3 minutes",
    emoji: "💰",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="page-container hero-grid">
          <div>
            <div className="eyebrow">
              <Sparkles size={17} />
              Free quizzes and learning games
            </div>

            <h1>Discover something interesting about yourself.</h1>

            <p className="hero-copy">
              Take thoughtful personality, career, learning and knowledge
              quizzes—or help children learn through simple, rewarding games.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" href="/quizzes/">
                Explore quizzes
                <ArrowRight size={18} />
              </Link>

              <Link className="button button-secondary" href="/kids/">
                <Gamepad2 size={18} />
                Play CurioKids
              </Link>
            </div>

            <div className="trust-row">
              <span>✓ Free to use</span>
              <span>✓ No account required</span>
              <span>✓ Mobile friendly</span>
            </div>
          </div>

          <div className="mascot-card" aria-label="Curio mascot welcome card">
            <div className="mascot-face">🦉</div>

            <div>
              <span className="small-label">Meet Curio</span>
              <h2>Your curious guide</h2>
              <p>
                Curio helps you discover new ideas, complete quizzes and
                celebrate every learning achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <span className="small-label">Start exploring</span>
              <h2>Browse by category</h2>
            </div>

            <Link className="text-link" href="/categories/">
              View all categories
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  href={category.href}
                  className="category-card"
                  key={category.title}
                >
                  <div className="icon-box">
                    <Icon size={25} />
                  </div>

                  <h3>{category.title}</h3>
                  <p>{category.description}</p>

                  <span className="card-link">
                    Explore
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <span className="small-label">Popular now</span>
              <h2>Featured quizzes</h2>
            </div>

            <Link className="text-link" href="/quizzes/">
              See all quizzes
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="quiz-grid">
            {featuredQuizzes.map((quiz) => (
              <article className="quiz-card" key={quiz.title}>
                <div className="quiz-visual">
                  <span>{quiz.emoji}</span>
                </div>

                <div className="quiz-card-content">
                  <div className="quiz-meta">
                    <span>{quiz.category}</span>
                    <span>{quiz.time}</span>
                  </div>

                  <h3>{quiz.title}</h3>
                  <p>{quiz.description}</p>

                  <Link className="button button-card" href={quiz.href}>
                    Start quiz
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container kids-banner">
          <div className="kids-art">
            <div className="floating-star star-one">
              <Star size={25} fill="currentColor" />
            </div>

            <div className="floating-star star-two">
              <Star size={18} fill="currentColor" />
            </div>

            <div className="kids-character">🦊</div>
          </div>

          <div>
            <span className="small-label small-label-light">For ages 6–7</span>

            <h2>Learn, play and unlock prizes with CurioKids</h2>

            <p>
              Children answer colourful maths, spelling and logic questions,
              hear narrated instructions and earn stars, coins, badges and new
              levels.
            </p>

            <Link className="button button-light" href="/kids/">
              Start a learning adventure
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="page-container benefits-grid">
          <div>
            <span className="small-label">Why CurioQuiz?</span>
            <h2>Useful results, not empty scores</h2>

            <p>
              Each quiz is designed to offer a clear explanation, practical
              insights and relevant next steps—not merely a label.
            </p>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <Lightbulb size={24} />

              <div>
                <h3>Thoughtful explanations</h3>
                <p>Understand what your result may mean in everyday life.</p>
              </div>
            </div>

            <div className="benefit-item">
              <Brain size={24} />

              <div>
                <h3>Designed for curiosity</h3>
                <p>Explore personality, learning, careers and knowledge.</p>
              </div>
            </div>

            <div className="benefit-item">
              <Gamepad2 size={24} />

              <div>
                <h3>Positive kids learning</h3>
                <p>Simple educational play without accounts or purchases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}