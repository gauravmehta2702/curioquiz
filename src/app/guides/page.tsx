import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { guides } from "@/data/guides";
import { categoryLookup } from "@/data/categories";

export const metadata: Metadata = {
  title: "Practical Guides for Curiosity, Learning and Reflection | Mindrailo",
  description: "Read practical, evergreen guides on personality quizzes, career direction, study habits and everyday money habits.",
  alternates: { canonical: "/guides/" }
};

export default function GuidesPage() {
  return <main><section className="section"><div className="page-container">
    <nav className="breadcrumbs"><Link href="/">Home</Link><span>›</span><span>Guides</span></nav>
    <header className="page-card page-intro"><p className="small-label"><BookOpen size={16}/> Mindrailo guides</p><h1>Practical ideas you can actually test</h1><p>Short, evergreen guides that turn quiz themes into useful experiments. No fixed labels, exaggerated promises or pressure to become a different person overnight.</p></header>
    <div className="guide-grid">{guides.map(guide=>{const category=categoryLookup[guide.categorySlug];return <article className="page-card guide-card" key={guide.slug}><p className="small-label">{category?.icon} {category?.title} · {guide.readTime}</p><h2>{guide.title}</h2><p>{guide.description}</p><Link className="text-link" href={`/guides/${guide.slug}/`}>Read guide <ArrowRight size={17}/></Link></article>})}</div>
  </div></section></main>;
}
