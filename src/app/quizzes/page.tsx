import type { Metadata } from "next";
import Link from "next/link";
import QuizLibrary from "@/components/QuizLibrary";
import { quizzes } from "@/data/quizzes";

export const metadata: Metadata = {
  title: "All Free Quizzes",
  description: "Browse and filter all Mindrailo personality, career, psychology, money, education and fun quizzes.",
  alternates: { canonical: "/quizzes/" },
};

export default function QuizzesPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">{quizzes.length} quizzes and growing</p>
            <h1>Find your next quiz</h1>
            <p>Search by topic, filter by category, save quizzes for later and return to recently completed results. Every quiz is free and requires no account.</p>
            <div className="hero-actions"><Link className="button button-secondary" href="/categories/">Browse category guides</Link><Link className="button button-secondary" href="/kids/">Visit Mindrailo Kids</Link></div>
          </div>
          <QuizLibrary />
        </div>
      </section>
    </main>
  );
}
