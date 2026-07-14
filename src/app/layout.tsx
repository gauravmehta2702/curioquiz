import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Menu } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://curioquiz.xyz"),

  title: {
    default: "CurioQuiz | Free Quizzes and Learning Games",
    template: "%s | CurioQuiz",
  },

  description:
    "Discover free personality, career, learning and knowledge quizzes, plus educational games for children.",

  applicationName: "CurioQuiz",

  keywords: [
    "free quizzes",
    "personality quizzes",
    "career quiz",
    "learning style quiz",
    "educational games for kids",
    "learning games for 6 year olds",
    "kids maths games",
  ],

  authors: [
    {
      name: "CurioQuiz",
    },
  ],

  creator: "CurioQuiz",
  publisher: "CurioQuiz",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "CurioQuiz",
    title: "CurioQuiz | Free Quizzes and Learning Games",
    description:
      "Discover free personality, career, learning and knowledge quizzes, plus educational games for children.",
    url: "https://curioquiz.xyz",
  },

  twitter: {
    card: "summary_large_image",
    title: "CurioQuiz | Free Quizzes and Learning Games",
    description:
      "Discover free quizzes and educational learning games for children.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CurioQuiz",
              url: "https://curioquiz.xyz",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CurioQuiz",
              url: "https://curioquiz.xyz",
            }),
          }}
        />

        <header className="site-header">
          <div className="page-container navigation">
            <Link className="brand" href="/" aria-label="CurioQuiz homepage">
              <span className="brand-icon">
                <Brain size={24} aria-hidden="true" />
              </span>

              <span>CurioQuiz</span>
            </Link>

            <nav className="desktop-nav" aria-label="Main navigation">
              <Link href="/quizzes/">Quizzes</Link>
              <Link href="/categories/">Categories</Link>
              <Link href="/kids/">CurioKids</Link>
              <Link href="/about/">About</Link>
            </nav>

            <Link className="nav-action" href="/quizzes/">
              Start a quiz
            </Link>

            <button
              className="mobile-menu"
              type="button"
              aria-label="Open navigation menu"
            >
              <Menu size={25} aria-hidden="true" />
            </button>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="page-container footer-grid">
            <div>
              <Link
                className="brand footer-brand"
                href="/"
                aria-label="CurioQuiz homepage"
              >
                <span className="brand-icon">
                  <Brain size={23} aria-hidden="true" />
                </span>

                <span>CurioQuiz</span>
              </Link>

              <p>
                Free quizzes and learning games designed to make curiosity
                useful, enjoyable and easy to explore.
              </p>
            </div>

            <div>
              <h2>Explore</h2>
              <Link href="/quizzes/">All quizzes</Link>
              <Link href="/categories/">Categories</Link>
              <Link href="/kids/">CurioKids</Link>
            </div>

            <div>
              <h2>Company</h2>
              <Link href="/about/">About</Link>
              <Link href="/contact/">Contact</Link>
              <Link href="/methodology/">Methodology</Link>
            </div>

            <div>
              <h2>Legal</h2>
              <Link href="/privacy/">Privacy</Link>
              <Link href="/terms/">Terms</Link>
              <Link href="/disclaimer/">Disclaimer</Link>
            </div>
          </div>

          <div className="page-container footer-bottom">
            <span>© {currentYear} CurioQuiz</span>
            <span>Built for curiosity and learning.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}