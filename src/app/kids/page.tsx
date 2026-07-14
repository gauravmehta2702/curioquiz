import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CurioKids | CurioQuiz",
  description: "A gentle preview of CurioKids, a planned educational game for children aged 6–7 with narration, levels, stars and badges.",
  alternates: {
    canonical: "/kids/",
  },
};

export default function KidsPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">For parents and children</p>
            <h1>CurioKids is on the way</h1>
            <p>
              CurioKids is a planned learning adventure for children aged 6–7. It is being designed as a calm, colourful experience with maths, spelling, patterns and logic, plus narration, levels, stars, coins and badges.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/quizzes/">
                Try a quick quiz
              </Link>
              <Link className="button button-secondary" href="/about/">
                Learn more about CurioQuiz
              </Link>
            </div>
          </div>

          <div className="kids-banner">
            <div className="kids-art">
              <div className="kids-character" aria-hidden="true">🧒</div>
            </div>
            <div>
              <p className="small-label small-label-light">Game coming next</p>
              <h2>Planned features for a warm, child-friendly experience</h2>
              <p>
                The full game is not available yet. The aim is to offer a simple, encouraging environment where young learners can practise number ideas, sound patterns, shapes and early problem-solving in a playful way.
              </p>
            </div>
          </div>

          <div className="benefits-grid page-card">
            <div>
              <h2>Parent-friendly approach</h2>
              <p>
                CurioKids will be designed with privacy and safety in mind. There will be no adverts, affiliate links or tracking code in the children’s experience.
              </p>
            </div>
            <div className="benefit-list">
              <div className="benefit-item">
                <span aria-hidden="true">✦</span>
                <div>
                  <h3>Gentle learning</h3>
                  <p>Short tasks with encouraging feedback and clear progress.</p>
                </div>
              </div>
              <div className="benefit-item">
                <span aria-hidden="true">✦</span>
                <div>
                  <h3>Playful rewards</h3>
                  <p>Stars, coins and badges can support motivation without pressure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
