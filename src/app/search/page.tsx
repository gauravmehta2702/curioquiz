import type { Metadata } from "next";
import { Suspense } from "react";
import SearchExperience from "@/components/SearchExperience";
export const metadata:Metadata={title:"Search Quizzes",description:"Search Mindrailo by quiz title, topic, category or tag.",alternates:{canonical:"/search/"}};
export default function SearchPage(){return <main><section className="section"><div className="page-container"><div className="page-card page-intro"><p className="small-label">Find your next quiz</p><h1>Search Mindrailo</h1><p>Search all available quizzes instantly. Results are generated in your browser and no search history is sent to a server.</p></div><Suspense fallback={<p>Loading search…</p>}><SearchExperience/></Suspense></div></section></main>}
