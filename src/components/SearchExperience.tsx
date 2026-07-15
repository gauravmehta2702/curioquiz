"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import QuizCard from "@/components/QuizCard";
import { quizzes } from "@/data/quizzes";
import { trackEvent } from "@/lib/analytics";

export default function SearchExperience(){
 const params=useSearchParams(); const [query,setQuery]=useState(params.get("q")??"");
 const results=useMemo(()=>{const q=query.trim().toLowerCase(); if(!q)return quizzes; return quizzes.filter(x=>[x.title,x.description,x.categorySlug,...x.tags].join(" ").toLowerCase().includes(q));},[query]);
 return <div>
  <label className="search-label" htmlFor="quiz-search">Search quizzes by title, topic or category</label>
  <input id="quiz-search" className="search-input" type="search" value={query} onChange={e=>{setQuery(e.target.value); if(e.target.value.trim().length===3) trackEvent("search",{search_term:e.target.value.trim().toLowerCase()});}} placeholder="Try career, personality or learning" />
  <p className="search-count" aria-live="polite">{results.length} quiz{results.length===1?"":"zes"} found</p>
  {results.length?<div className="quiz-grid">{results.map(q=><QuizCard key={q.slug} quiz={q}/>)}</div>:<div className="page-card empty-state"><h2>No matching quizzes yet</h2><p>Try a broader term or browse all categories.</p></div>}
 </div>
}
