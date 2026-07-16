"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Bookmark, BookmarkCheck, Clock3, Search, X } from "lucide-react";
import { categories, categoryLookup } from "@/data/categories";
import { quizzes, quizLookup } from "@/data/quizzes";
import type { Quiz } from "@/types/quiz";

const BOOKMARK_KEY = "mindrailo-bookmarks";
const RECENT_KEY = "mindrailo-recent";

function readList(key: string): string[] {
  try {
    const value = window.localStorage.getItem(key);
    const parsed = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function LibraryCard({ quiz, bookmarked, onToggle }: { quiz: Quiz; bookmarked: boolean; onToggle: () => void }) {
  const category = categoryLookup[quiz.categorySlug];
  return (
    <article className="quiz-card quiz-card-library">
      <button
        className="bookmark-button"
        type="button"
        aria-label={bookmarked ? `Remove ${quiz.title} from saved quizzes` : `Save ${quiz.title}`}
        aria-pressed={bookmarked}
        onClick={onToggle}
      >
        {bookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
      </button>
      <div className="quiz-visual" aria-hidden="true"><span>{category?.icon ?? "🧠"}</span></div>
      <div className="quiz-card-content">
        <div className="quiz-meta"><span>{category?.title ?? quiz.categorySlug}</span><span><Clock3 size={14}/> {quiz.estimatedTime}</span></div>
        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>
        <Link className="button button-card" href={`/quiz/${quiz.slug}/`}>Start quiz</Link>
      </div>
    </article>
  );
}

export default function QuizLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [bookmarks, setBookmarks] = useState<string[]>(() => typeof window === "undefined" ? [] : readList(BOOKMARK_KEY));
  const [recent] = useState<string[]>(() => typeof window === "undefined" ? [] : readList(RECENT_KEY));
  const [showSaved, setShowSaved] = useState(false);


  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return quizzes.filter((quiz) => {
      const matchesQuery = !needle || [quiz.title, quiz.description, quiz.categorySlug, ...quiz.tags].join(" ").toLowerCase().includes(needle);
      const matchesCategory = category === "all" || quiz.categorySlug === category;
      const matchesSaved = !showSaved || bookmarks.includes(quiz.slug);
      return matchesQuery && matchesCategory && matchesSaved;
    });
  }, [bookmarks, category, query, showSaved]);

  const recentQuizzes = recent.map((slug) => quizLookup[slug]).filter((quiz): quiz is Quiz => Boolean(quiz));

  function toggleBookmark(slug: string) {
    setBookmarks((current) => {
      const next = current.includes(slug) ? current.filter((item) => item !== slug) : [slug, ...current];
      window.localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
      return next;
    });
  }

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setShowSaved(false);
  }

  return (
    <>
      {recentQuizzes.length ? (
        <section className="library-section" aria-labelledby="recent-heading">
          <div className="section-heading compact-heading"><div><span className="small-label">Continue exploring</span><h2 id="recent-heading">Recently completed</h2></div></div>
          <div className="chip-row recent-row">
            {recentQuizzes.map((quiz) => <Link key={quiz.slug} className="category-chip" href={`/quiz/${quiz.slug}/`}>{quiz.shortTitle}</Link>)}
          </div>
        </section>
      ) : null}

      <section className="library-controls" aria-label="Quiz filters">
        <div className="library-search-wrap">
          <Search size={19} aria-hidden="true" />
          <label className="sr-only" htmlFor="library-search">Search all quizzes</label>
          <input id="library-search" className="library-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search quizzes" type="search" />
        </div>
        <label className="sr-only" htmlFor="library-category">Filter by category</label>
        <select id="library-category" className="library-select" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="all">All categories</option>
          {categories.map((item) => <option value={item.slug} key={item.slug}>{item.title}</option>)}
        </select>
        <button type="button" className={`button button-secondary saved-filter${showSaved ? " active" : ""}`} onClick={() => setShowSaved((value) => !value)}>
          <Bookmark size={17} /> Saved ({bookmarks.length})
        </button>
      </section>

      <div className="library-result-row">
        <p aria-live="polite"><strong>{filtered.length}</strong> quiz{filtered.length === 1 ? "" : "zes"} shown</p>
        {(query || category !== "all" || showSaved) ? <button type="button" className="clear-filter" onClick={clearFilters}><X size={16}/> Clear filters</button> : null}
      </div>

      {filtered.length ? (
        <div className="quiz-grid">{filtered.map((quiz) => <LibraryCard key={quiz.slug} quiz={quiz} bookmarked={bookmarks.includes(quiz.slug)} onToggle={() => toggleBookmark(quiz.slug)} />)}</div>
      ) : (
        <div className="page-card empty-state"><h2>No quizzes match these filters</h2><p>Try a different search term, choose another category or clear the saved-only filter.</p><button className="button button-primary" type="button" onClick={clearFilters}>Show all quizzes</button></div>
      )}
    </>
  );
}
