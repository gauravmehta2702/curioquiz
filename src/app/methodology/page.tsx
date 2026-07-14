import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology | CurioQuiz",
  description: "See how CurioQuiz designs its short quizzes and why they are meant to be reflective and educational.",
  alternates: {
    canonical: "/methodology/",
  },
};

export default function MethodologyPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">How it works</p>
            <h1>A simple approach to short quizzes</h1>
            <p>
              CurioQuiz uses a lightweight structure: clear questions, a small number of choices and a simple scoring process that leads to an informational result.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/quizzes/">
                Try a quiz
              </Link>
              <Link className="button button-secondary" href="/privacy/">
                Read privacy notes
              </Link>
            </div>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Short and focused</h3>
                <p>Each experience is designed to stay concise and clear.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Reflective, not definitive</h3>
                <p>Outcomes are presented as helpful prompts, not fixed judgments.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Built for curiosity</h3>
                <p>The goal is to encourage thought, discovery and a little play.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
