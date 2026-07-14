import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | CurioQuiz",
  description: "A simple overview of privacy expectations for CurioQuiz and its educational content.",
  alternates: {
    canonical: "/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">Privacy</p>
            <h1>Privacy and respect</h1>
            <p>
              CurioQuiz is designed to keep things simple. The quizzes do not require an account and the experience does not send quiz answers to a server.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/terms/">
                Read terms
              </Link>
              <Link className="button button-secondary" href="/contact/">
                Contact CurioQuiz
              </Link>
            </div>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>No account required</h3>
                <p>There is no sign-up flow for the current quiz experience.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Local by design</h3>
                <p>Answers stay in your browser while you complete the quiz.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Respectful content</h3>
                <p>CurioQuiz avoids misleading claims and keeps its content focused on helpful reflection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
