import type { Metadata } from "next";
import Link from "next/link";
import QuizCard from "@/components/QuizCard";
import { quizzes } from "@/data/quizzes";

export const metadata: Metadata = {
  title: "Quizzes | CurioQuiz",
  description: "Browse a curated set of free, informative quizzes for personality, learning, money and creativity.",
  alternates: {
    canonical: "/quizzes/",
  },
};

export default function QuizzesPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">Curious by design</p>
            <h1>Explore free quizzes</h1>
            <p>
              These short quizzes are built to spark reflection, encourage gentle self-exploration and help you discover a few new ideas without pressure.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/categories/">
                Browse categories
              </Link>
              <Link className="button button-secondary" href="/kids/">
                Learn about CurioKids
              </Link>
            </div>
          </div>

          <div className="quiz-grid">
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.slug} quiz={quiz} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
