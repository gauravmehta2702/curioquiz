import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about Mindrailo quizzes, results, privacy, saved progress and Mindrailo Kids.",
};

const faqs = [
  ["Are Mindrailo quizzes free?", "Yes. The current quizzes and Mindrailo Kids learning game are free to use and do not require an account."],
  ["Are quiz results professional assessments?", "No. Results are reflective and entertainment-focused. They are not medical, psychological, educational, financial or career advice."],
  ["Does Mindrailo store my answers?", "Quiz answers are processed in your browser. Saved, recent and completed quiz information remains in your browser unless you clear its storage."],
  ["Why can my result change?", "Your choices may reflect your current mood, priorities or situation. Retaking a quiz later can produce a different result, which can itself be useful for reflection."],
  ["Is Mindrailo Kids safe for children?", "The children’s activity requires no account or purchase. Progress is stored locally in the browser, and active gameplay is designed without advertising."],
  ["Can I share my result?", "Yes. The result page can use your device’s share menu or copy a result and page address to your clipboard."],
  ["How are results calculated?", "Each answer contributes points to one or more possible outcomes. The outcome with the strongest total becomes the main result; ties use a consistent predefined order."],
  ["How can I contact Mindrailo?", "Use the contact page or email hello@mindrailo.com for general questions, feedback or corrections."],
] as const;

export default function FAQPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <main className="section"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><div className="page-container narrow-page"><span className="small-label">Help centre</span><h1>Frequently asked questions</h1><p className="page-intro">Clear answers about quizzes, results, privacy and children’s learning.</p><div className="faq-list">{faqs.map(([question, answer]) => <article className="faq-item" key={question}><h2>{question}</h2><p>{answer}</p></article>)}</div><div className="notice-box"><strong>Still need help?</strong> Visit our contact page and tell us what happened.</div><Link className="button button-primary" href="/contact/">Contact Mindrailo <ArrowRight size={17}/></Link></div></main>;
}
