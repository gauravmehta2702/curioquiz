import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | CurioQuiz",
  description: "Learn about CurioQuiz, a calm and useful place for short quizzes, curiosity and educational play.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">About CurioQuiz</p>
            <h1>Thoughtful quizzes for everyday curiosity</h1>
            <p>
              CurioQuiz offers short, approachable experiences that invite reflection and learning. The content is designed to be useful, original and easy to explore on a phone or desktop.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/quizzes/">
                Start exploring
              </Link>
              <Link className="button button-secondary" href="/contact/">
                Contact us
              </Link>
            </div>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Useful and concise</h3>
                <p>Each quiz is built around a simple idea and a clear experience.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Free and accessible</h3>
                <p>No account is required, and the quizzes run locally in the browser.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Educational, not diagnostic</h3>
                <p>Results are meant to encourage reflection rather than serve as a fixed judgment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
