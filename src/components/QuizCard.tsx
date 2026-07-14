import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Quiz } from "@/types/quiz";

type QuizCardProps = {
  quiz: Quiz;
};

export default function QuizCard({ quiz }: QuizCardProps) {
  return (
    <article className="quiz-card">
      <div className="quiz-visual" aria-hidden="true">
        <span>🧠</span>
      </div>

      <div className="quiz-card-content">
        <div className="quiz-meta">
          <span>{quiz.category}</span>
          <span>{quiz.estimatedTime}</span>
        </div>

        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>

        <Link className="button button-card" href={`/quiz/${quiz.slug}/`}>
          Try this quiz
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
