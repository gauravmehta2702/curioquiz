import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { categoryLookup } from "@/data/categories";
import type { Quiz } from "@/types/quiz";

export default function QuizCard({ quiz }: { quiz: Quiz }) {
  const category = categoryLookup[quiz.categorySlug];
  return (
    <article className="quiz-card">
      <div className="quiz-visual" aria-hidden="true"><span>{category?.icon ?? "🧠"}</span></div>
      <div className="quiz-card-content">
        <div className="quiz-meta"><span>{category?.title ?? quiz.categorySlug}</span><span><Clock3 size={14}/> {quiz.estimatedTime}</span></div>
        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>
        <Link className="button button-card" href={`/quiz/${quiz.slug}/`}>Start quiz <ArrowRight size={17}/></Link>
      </div>
    </article>
  );
}
