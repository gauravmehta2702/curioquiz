import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | Mindrailo",
  description: "Important notes on the informational nature of Mindrailo quizzes and results.",
  alternates: {
    canonical: "/disclaimer/",
  },
};

export default function DisclaimerPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">Disclaimer</p>
            <h1>Informational content only</h1>
            <p>
              Mindrailo quizzes are designed for entertainment, reflection and learning. Results are not diagnostic, and they should not be taken as a scientific or medical assessment.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/quizzes/">
                Explore quizzes
              </Link>
              <Link className="button button-secondary" href="/methodology/">
                See methodology
              </Link>
            </div>
          </div>

          <div className="benefit-list">
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Use with perspective</h3>
                <p>Results are best read as a prompt for reflection, not a fixed conclusion.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Not a substitute</h3>
                <p>These experiences are not replacements for professional advice or formal assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
