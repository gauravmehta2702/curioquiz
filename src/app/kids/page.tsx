import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Learning Game for Children Aged 6–7 | Mindrailo Kids",
  description: "Play a free graphical learning adventure with maths, spelling, patterns, narration, levels and virtual rewards for children aged 6–7.",
  alternates: {
    canonical: "/kids/",
  },
};

export default function KidsPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro kids-landing-card">
            <p className="small-label">For parents and children</p>
            <h1>Rilo’s Treasure Garden</h1>
            <p>
              Designed for children aged 6–7, this gentle learning adventure introduces maths, spelling, patterns and logic through calm questions, cheerful rewards and optional narration.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/kids/play/">
                Start Playing
              </Link>
              <Link className="button button-secondary" href="/quizzes/">
                Try a quiz too
              </Link>
            </div>
          </div>

          <div className="kids-banner kids-landing-banner">
            <div className="kids-art">
              <div className="kids-character" aria-hidden="true">🦊</div>
            </div>
            <div>
              <p className="small-label small-label-light">Learning adventure</p>
              <h2>Playful learning with no pressure</h2>
              <p>
                Children can enjoy short tasks, friendly feedback and virtual rewards while parents can see that the game stays in the browser and does not require an account.
              </p>
            </div>
          </div>

          <div className="benefits-grid">
            <div className="page-card">
              <h2>Parent information</h2>
              <p>
                Progress is stored in this browser only. There is no account, no personal information and no purchases. The experience is designed to be educational and reassuring rather than competitive.
              </p>
            </div>
            <div className="benefit-list">
              <div className="benefit-item">
                <span aria-hidden="true">✦</span>
                <div>
                  <h3>Built for ages 6–7</h3>
                  <p>Friendly questions across maths, spelling, patterns and logic.</p>
                </div>
              </div>
              <div className="benefit-item">
                <span aria-hidden="true">✦</span>
                <div>
                  <h3>Optional narration and sound</h3>
                  <p>Audio can be switched on or off at any time.</p>
                </div>
              </div>
              <div className="benefit-item">
                <span aria-hidden="true">✦</span>
                <div>
                  <h3>Virtual rewards only</h3>
                  <p>Stars, coins and badges are playful and cannot be purchased.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-card kids-disclaimer">
            <h2>Educational disclaimer</h2>
            <p>
              Rilo’s Treasure Garden is designed to support curiosity and early learning. It does not guarantee improved grades or learning outcomes, and it is not a diagnostic or academic assessment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
