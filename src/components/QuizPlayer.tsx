"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Bookmark, BookmarkCheck, RotateCcw, Share2, Sparkles } from "lucide-react";
import { quizLookup } from "@/data/quizzes";
import type { Quiz } from "@/types/quiz";
import { trackEvent } from "@/lib/analytics";

type ScoreRow = { id: string; title: string; icon?: string; score: number; percentage: number };

function calculateScores(quiz: Quiz, answers: Array<string | null>) {
  const totals = Object.fromEntries(quiz.outcomes.map((outcome, index) => [outcome.id, { score: 0, index }]));
  quiz.questions.forEach((question, index) => {
    const option = question.options.find((item) => item.id === answers[index]);
    if (!option) return;
    Object.entries(option.scores).forEach(([id, score]) => {
      if (totals[id]) totals[id].score += score;
    });
  });
  const rows = quiz.outcomes
    .map((outcome) => ({ ...outcome, score: totals[outcome.id]?.score ?? 0, index: totals[outcome.id]?.index ?? 0 }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  const highest = Math.max(...rows.map((row) => row.score), 1);
  const scoreRows: ScoreRow[] = rows.map((row) => ({
    id: row.id,
    title: row.title,
    icon: row.icon,
    score: row.score,
    percentage: Math.max(8, Math.round((row.score / highest) * 100)),
  }));
  return { result: rows[0] ?? quiz.outcomes[0], scoreRows };
}

export default function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<string | null>>(Array(quiz.questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [shareText, setShareText] = useState("Share result");
  const [completionCount, setCompletionCount] = useState(0);
  const [bookmarked, setBookmarked] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = JSON.parse(localStorage.getItem("mindrailo-bookmarks") ?? "[]") as string[];
      return saved.includes(quiz.slug);
    } catch { return false; }
  });

  const question = quiz.questions[index];
  const calculation = useMemo(() => finished ? calculateScores(quiz, answers) : null, [finished, quiz, answers]);
  const result = calculation?.result ?? quiz.outcomes[0];
  const scoreRows = calculation?.scoreRows ?? [];
  const progress = finished ? 100 : ((index + 1) / quiz.questions.length) * 100;

  useEffect(() => { trackEvent("quiz_start", { quiz_slug: quiz.slug, quiz_category: quiz.categorySlug }); }, [quiz.slug, quiz.categorySlug]);
  useEffect(() => {
    if (!finished || !result) return;
    try {
      const recent = JSON.parse(localStorage.getItem("mindrailo-recent") ?? "[]") as string[];
      localStorage.setItem("mindrailo-recent", JSON.stringify([quiz.slug, ...recent.filter((x) => x !== quiz.slug)].slice(0, 5)));
    } catch { /* Browser storage may be unavailable. */ }
    trackEvent("quiz_complete", { quiz_slug: quiz.slug, quiz_category: quiz.categorySlug, result_id: result.id });
  }, [finished, quiz.slug, quiz.categorySlug, result]);

  const select = (id: string) => {
    setAnswers((current) => current.map((value, answerIndex) => answerIndex === index ? id : value));
    trackEvent("quiz_answer", { quiz_slug: quiz.slug, question_number: index + 1 });
  };
  const next = () => {
    if (!answers[index]) return;
    if (index === quiz.questions.length - 1) {
      try {
        const completed = JSON.parse(localStorage.getItem("mindrailo-completed") ?? "[]") as string[];
        const nextCompleted = completed.includes(quiz.slug) ? completed : [quiz.slug, ...completed];
        localStorage.setItem("mindrailo-completed", JSON.stringify(nextCompleted));
        setCompletionCount(nextCompleted.length);
      } catch { setCompletionCount(1); }
      setFinished(true);
    } else setIndex(index + 1);
  };
  const restart = () => {
    setAnswers(Array(quiz.questions.length).fill(null));
    setIndex(0); setFinished(false); setShareText("Share result");
  };
  const share = async () => {
    const url = window.location.href;
    const text = `I got ${result?.title} on the ${quiz.title} quiz at Mindrailo.`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${result?.title} | Mindrailo`, text, url });
        setShareText("Shared");
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        setShareText("Result copied");
      }
      trackEvent("share_result", { quiz_slug: quiz.slug, result_id: result?.id ?? "unknown" });
    } catch { setShareText("Share result"); }
  };
  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem("mindrailo-bookmarks") ?? "[]") as string[];
    const nextSaved = saved.includes(quiz.slug) ? saved.filter((x) => x !== quiz.slug) : [quiz.slug, ...saved];
    localStorage.setItem("mindrailo-bookmarks", JSON.stringify(nextSaved));
    setBookmarked(nextSaved.includes(quiz.slug));
    trackEvent("bookmark_quiz", { quiz_slug: quiz.slug, saved: nextSaved.includes(quiz.slug) });
  };

  if (!question || !result) return null;
  return <div className="quiz-player">
    <div className="progress-card"><div className="progress-copy"><span>{finished ? "Complete" : `Question ${index + 1} of ${quiz.questions.length}`}</span><strong>{Math.round(progress)}%</strong></div><div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div></div>
    {!finished ? <section className="question-card slide-up" aria-labelledby={`q-${question.id}`}>
      <h2 id={`q-${question.id}`}>{question.prompt}</h2>
      <div className="answer-list">{question.options.map((option) => <button key={option.id} type="button" className={`answer-button${answers[index] === option.id ? " selected" : ""}`} aria-pressed={answers[index] === option.id} onClick={() => select(option.id)}>{option.label}</button>)}</div>
      <div className="quiz-actions"><button className="button button-secondary" disabled={index === 0} onClick={() => setIndex(index - 1)}>Previous</button><button className="button button-primary" disabled={!answers[index]} onClick={next}>{index === quiz.questions.length - 1 ? "See my result" : "Next"}<ArrowRight size={17} /></button></div>
    </section> : <section className="result-card slide-up" aria-live="polite">
      <div className="result-hero"><div className="result-icon">{result.icon ?? "✨"}</div><div><p className="small-label">Your Mindrailo result</p><h2>{result.title}</h2><p>{result.description}</p></div></div>

      <div className="result-highlight-grid">
        <div className="result-highlight"><Sparkles size={22}/><div><span>Your strongest pattern</span><strong>{result.strengths[0]}</strong></div></div>
        <div className="result-highlight"><Award size={22}/><div><span>Achievement unlocked</span><strong>{completionCount > 1 ? `${completionCount} quizzes completed` : "Curiosity Starter"}</strong></div></div>
      </div>

      <div className="score-breakdown page-card">
        <div className="score-heading"><div><span className="small-label">Your complete profile</span><h3>How your answers compared</h3></div><span className="score-note">Relative match</span></div>
        <div className="score-list">{scoreRows.map((row, rowIndex) => <div className="score-row" key={row.id}><div className="score-label"><span>{row.icon ?? (rowIndex === 0 ? "✨" : "•")}</span><strong>{row.title}</strong><span>{row.percentage}%</span></div><div className="score-track"><div className="score-fill" style={{ width: `${row.percentage}%` }} /></div></div>)}</div>
        <p className="score-explainer">These percentages compare your outcome scores within this quiz. They are not scientific measurements or fixed labels.</p>
      </div>

      <div className="result-grid"><div className="page-card result-panel"><h3>Strengths</h3><ul className="result-list">{result.strengths.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="page-card result-panel"><h3>Watch-outs</h3><ul className="result-list">{result.watchOuts.map((item) => <li key={item}>{item}</li>)}</ul></div>{result.careerIdeas?.length ? <div className="page-card result-panel"><h3>Ideas to explore</h3><ul className="result-list">{result.careerIdeas.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}</div>
      <div className="tip-list"><h3>Your seven-day experiment</h3>{result.tips.map((item) => <div className="benefit-item" key={item}><span>✦</span><p>{item}</p></div>)}</div>
      <div className="notice-box"><strong>Important:</strong> {quiz.disclaimer}</div>
      <div className="quiz-actions"><button className="button button-secondary" onClick={restart}><RotateCcw size={17} />Restart</button><button className="button button-secondary" onClick={share}><Share2 size={17} />{shareText}</button><button className="button button-secondary" onClick={toggleBookmark}>{bookmarked ? <BookmarkCheck size={17} /> : <Bookmark size={17} />} {bookmarked ? "Saved" : "Save quiz"}</button><Link className="button button-primary" href="/quizzes/">More quizzes<ArrowRight size={17} /></Link></div>
      <div className="page-card result-recommendations"><h3>Recommended next</h3><p>Keep exploring with a quiz connected to this result.</p><div className="category-grid">{quiz.relatedQuizSlugs.map((slug) => { const nextQuiz = quizLookup[slug]; return nextQuiz ? <Link className="category-card" key={slug} href={`/quiz/${slug}/`}><h4>{nextQuiz.title}</h4><p>{nextQuiz.description}</p><span className="card-link">Open quiz <ArrowRight size={16} /></span></Link> : null; })}</div></div>
    </section>}
  </div>;
}
