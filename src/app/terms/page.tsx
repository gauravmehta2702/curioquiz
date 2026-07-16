import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms | Mindrailo",
  description: "Read the simple terms for using Mindrailo and its free educational content.",
  alternates: {
    canonical: "/terms/",
  },
};

export default function TermsPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">Terms</p>
            <h1>Terms of use</h1>
            <p>
              Mindrailo content is provided for general educational and entertainment purposes. Please use it respectfully and do not treat it as a diagnostic tool.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/disclaimer/">
                Read disclaimer
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
                <h3>Use responsibly</h3>
                <p>Enjoy the quizzes as a light and reflective experience.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span aria-hidden="true">✦</span>
              <div>
                <h3>Keep it simple</h3>
                <p>Do not rely on the results as the sole basis for major decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
