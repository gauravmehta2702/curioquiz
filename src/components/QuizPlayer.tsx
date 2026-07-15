"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, BookmarkCheck, RotateCcw, Share2 } from "lucide-react";
import { quizLookup } from "@/data/quizzes";
import type { Quiz } from "@/types/quiz";
import { trackEvent } from "@/lib/analytics";

function calculate(quiz: Quiz, answers: Array<string | null>) {
  const totals = Object.fromEntries(quiz.outcomes.map((o, index) => [o.id, { score: 0, index }]));
  quiz.questions.forEach((question, index) => {
    const option = question.options.find((item) => item.id === answers[index]);
    if (!option) return;
    Object.entries(option.scores).forEach(([id, score]) => { if (totals[id]) totals[id].score += score; });
  });
  const id = Object.entries(totals).sort((a,b)=>b[1].score-a[1].score || a[1].index-b[1].index)[0]?.[0];
  return quiz.outcomes.find((o)=>o.id===id) ?? quiz.outcomes[0];
}

export default function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const [index,setIndex]=useState(0); const [answers,setAnswers]=useState<Array<string|null>>(Array(quiz.questions.length).fill(null));
  const [finished,setFinished]=useState(false); const [shareText,setShareText]=useState("Share result"); const [bookmarked,setBookmarked]=useState(()=>{if(typeof window==="undefined")return false;try{const saved=JSON.parse(localStorage.getItem("curioquiz-bookmarks")??"[]") as string[];return saved.includes(quiz.slug);}catch{return false;}});
  const question=quiz.questions[index]; const result=useMemo(()=>finished?calculate(quiz,answers):null,[finished,quiz,answers]);
  const progress=finished?100:((index+1)/quiz.questions.length)*100;
  useEffect(()=>{trackEvent("quiz_start",{quiz_slug:quiz.slug,quiz_category:quiz.categorySlug});},[quiz.slug,quiz.categorySlug]);
  useEffect(()=>{ if(finished){const recent=JSON.parse(localStorage.getItem("curioquiz-recent")??"[]") as string[]; localStorage.setItem("curioquiz-recent",JSON.stringify([quiz.slug,...recent.filter(x=>x!==quiz.slug)].slice(0,5)));trackEvent("quiz_complete",{quiz_slug:quiz.slug,quiz_category:quiz.categorySlug,result_id:result?.id??"unknown"});}},[finished,quiz.slug,quiz.categorySlug,result?.id]);
  const select=(id:string)=>{setAnswers(a=>a.map((v,i)=>i===index?id:v));trackEvent("quiz_answer",{quiz_slug:quiz.slug,question_number:index+1});};
  const next=()=>{ if(!answers[index])return; if(index===quiz.questions.length-1)setFinished(true); else setIndex(index+1); };
  const restart=()=>{setAnswers(Array(quiz.questions.length).fill(null));setIndex(0);setFinished(false);setShareText("Share result")};
  const share=async()=>{const url=window.location.href; try{if(navigator.share){await navigator.share({title:quiz.title,text:`My CurioQuiz result: ${result?.title}`,url});setShareText("Shared");}else{await navigator.clipboard.writeText(`${quiz.title} — My result: ${result?.title}. ${url}`);setShareText("Result copied");}trackEvent("share_result",{quiz_slug:quiz.slug,result_id:result?.id??"unknown"});}catch{setShareText("Share result")}};
  const toggleBookmark=()=>{const saved=JSON.parse(localStorage.getItem("curioquiz-bookmarks")??"[]") as string[];const next=saved.includes(quiz.slug)?saved.filter(x=>x!==quiz.slug):[quiz.slug,...saved];localStorage.setItem("curioquiz-bookmarks",JSON.stringify(next));setBookmarked(next.includes(quiz.slug));trackEvent("bookmark_quiz",{quiz_slug:quiz.slug,saved:next.includes(quiz.slug)});};
  if(!question || !result && finished) return null;
  return <div className="quiz-player">
    <div className="progress-card"><div className="progress-copy"><span>{finished?"Complete":`Question ${index+1} of ${quiz.questions.length}`}</span><strong>{Math.round(progress)}%</strong></div><div className="progress-track"><div className="progress-fill" style={{width:`${progress}%`}}/></div></div>
    {!finished ? <section className="question-card" aria-labelledby={`q-${question.id}`}>
      <h2 id={`q-${question.id}`}>{question.prompt}</h2>
      <div className="answer-list">{question.options.map(o=><button key={o.id} type="button" className={`answer-button${answers[index]===o.id?" selected":""}`} aria-pressed={answers[index]===o.id} onClick={()=>select(o.id)}>{o.label}</button>)}</div>
      <div className="quiz-actions"><button className="button button-secondary" disabled={index===0} onClick={()=>setIndex(index-1)}>Previous</button><button className="button button-primary" disabled={!answers[index]} onClick={next}>{index===quiz.questions.length-1?"See my result":"Next"}<ArrowRight size={17}/></button></div>
    </section> : <section className="result-card" aria-live="polite">
      <div className="result-hero"><div className="result-icon">{result?.icon??"✨"}</div><div><p className="small-label">Your result</p><h2>{result?.title}</h2><p>{result?.description}</p></div></div>
      <div className="result-grid"><div className="page-card result-panel"><h3>Strengths</h3><ul className="result-list">{result?.strengths.map(x=><li key={x}>{x}</li>)}</ul></div><div className="page-card result-panel"><h3>Watch-outs</h3><ul className="result-list">{result?.watchOuts.map(x=><li key={x}>{x}</li>)}</ul></div>{result?.careerIdeas?.length?<div className="page-card result-panel"><h3>Ideas to explore</h3><ul className="result-list">{result.careerIdeas.map(x=><li key={x}>{x}</li>)}</ul></div>:null}</div>
      <div className="tip-list"><h3>Practical next steps</h3>{result?.tips.map(x=><div className="benefit-item" key={x}><span>✦</span><p>{x}</p></div>)}</div>
      <div className="notice-box"><strong>Important:</strong> {quiz.disclaimer}</div>
      <div className="quiz-actions"><button className="button button-secondary" onClick={restart}><RotateCcw size={17}/>Restart</button><button className="button button-secondary" onClick={share}><Share2 size={17}/>{shareText}</button><button className="button button-secondary" onClick={toggleBookmark}>{bookmarked?<BookmarkCheck size={17}/>:<Bookmark size={17}/>} {bookmarked?"Saved":"Save quiz"}</button><Link className="button button-primary" href="/quizzes/">More quizzes<ArrowRight size={17}/></Link></div>
      <div className="page-card"><h3>Recommended next</h3><div className="category-grid">{quiz.relatedQuizSlugs.map(slug=>{const q=quizLookup[slug];return q?<Link className="category-card" key={slug} href={`/quiz/${slug}/`}><h4>{q.title}</h4><p>{q.description}</p><span className="card-link">Open quiz <ArrowRight size={16}/></span></Link>:null})}</div></div>
    </section>}
  </div>
}
