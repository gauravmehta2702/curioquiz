import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuizPlayer from "@/components/QuizPlayer";
import { quizLookup, quizzes } from "@/data/quizzes";

export async function generateStaticParams() {
  return quizzes.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const quiz = quizLookup[slug];

  if (!quiz) {
    return {
      title: "Quiz not found | CurioQuiz",
      description: "The requested quiz could not be found.",
    };
  }

  return {
    title: quiz.seoTitle,
    description: quiz.seoDescription,
    openGraph: {
      title: quiz.seoTitle,
      description: quiz.seoDescription,
      type: "article",
    },
    alternates: {
      canonical: `/quiz/${quiz.slug}/`,
    },
  };
}

export default async function QuizPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quiz = quizLookup[slug];

  if (!quiz) {
    notFound();
  }

  return (
    <main>
      <section className="section">
        <div className="page-container">
          <div className="page-card page-intro">
            <p className="small-label">Quiz experience</p>
            <h1>{quiz.title}</h1>
            <p>
              This interactive quiz is designed for curiosity and reflection. It uses simple scoring and offers informative results rather than a diagnosis.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/quizzes/">
                Browse more quizzes
              </Link>
              <Link className="button button-secondary" href="/categories/">
                Explore categories
              </Link>
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://curioquiz.xyz/" },
                  { "@type": "ListItem", position: 2, name: "Quizzes", item: "https://curioquiz.xyz/quizzes/" },
                  { "@type": "ListItem", position: 3, name: quiz.title, item: `https://curioquiz.xyz/quiz/${quiz.slug}/` },
                ],
              }),
            }}
          />

          <QuizPlayer quiz={quiz} />
        </div>
      </section>
    </main>
  );
}
