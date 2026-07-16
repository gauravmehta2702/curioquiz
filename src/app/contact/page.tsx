import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Mindrailo",
  description: "Get in touch with Mindrailo about the site, content or feedback.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">Contact</p>
            <h1>Say hello</h1>
            <p>
              If you have feedback, a question about the quizzes or a suggestion for the learning experience, send a note and we will take it on board.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="mailto:hello@mindrailo.com">
                hello@mindrailo.com
              </Link>
              <Link className="button button-secondary" href="/about/">
                Read about the project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
