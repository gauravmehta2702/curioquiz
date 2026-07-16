import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | Mindrailo",
  description: "A simple overview of privacy expectations for Mindrailo and its educational content.",
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
              Mindrailo is designed to keep things simple. Quizzes do not require an account and answers are not sent to a Mindrailo server. Essential browser storage supports features such as recent quizzes and Mindrailo Kids progress. Optional analytics load only after consent.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/terms/">
                Read terms
              </Link>
              <Link className="button button-secondary" href="/contact/">
                Contact Mindrailo
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
                <h3>Optional analytics</h3>
                <p>Google Analytics or Microsoft Clarity may be enabled later through environment settings, but they load only after a visitor accepts analytics. They are disabled on the active Mindrailo Kids game route.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
