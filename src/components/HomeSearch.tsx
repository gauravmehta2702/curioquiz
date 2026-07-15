"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/search/?q=${encodeURIComponent(value)}` : "/search/");
  }

  return (
    <form className="home-search" onSubmit={submit} role="search">
      <Search size={20} aria-hidden="true" />
      <label className="sr-only" htmlFor="home-search-input">Search CurioQuiz</label>
      <input id="home-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search career, personality, learning…" />
      <button type="submit">Search</button>
    </form>
  );
}
