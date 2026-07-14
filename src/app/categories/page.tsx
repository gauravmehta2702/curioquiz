import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Categories | CurioQuiz",
  description: "Browse CurioQuiz categories for personality, education, money, psychology and more.",
  alternates: {
    canonical: "/categories/",
  },
};

export default function CategoriesPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">Start anywhere</p>
            <h1>Browse by category</h1>
            <p>
              Each category offers a different kind of curiosity, from reflective personality prompts to practical learning and money-themed ideas.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/quizzes/">
                See featured quizzes
              </Link>
              <Link className="button button-secondary" href="/about/">
                Learn about CurioQuiz
              </Link>
            </div>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.slug} className="category-card">
                <div className="icon-box" style={{ background: `${category.accent}1a`, color: category.accent }}>
                  <span aria-hidden="true">✦</span>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link className="card-link" href="/quizzes/">
                  Explore quizzes
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
