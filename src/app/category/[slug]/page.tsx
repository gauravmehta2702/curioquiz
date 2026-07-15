import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuizCard from "@/components/QuizCard";
import { categories, categoryLookup } from "@/data/categories";
import { quizzes } from "@/data/quizzes";
export function generateStaticParams(){return categories.map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const c=categoryLookup[slug];if(!c)return {title:"Category not found"};return {title:c.seoTitle,description:c.seoDescription,alternates:{canonical:`/category/${slug}/`}}}
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categoryLookup[slug];if(!c)notFound();const items=quizzes.filter(q=>q.categorySlug===slug);return <main><section className="section"><div className="page-container"><nav className="breadcrumbs"><Link href="/">Home</Link><span>›</span><Link href="/categories/">Categories</Link><span>›</span><span>{c.title}</span></nav><div className="page-card page-intro"><p className="small-label">{c.icon} Category</p><h1>{c.title} quizzes</h1><p>{c.introduction}</p></div>{items.length?<div className="quiz-grid">{items.map(q=><QuizCard key={q.slug} quiz={q}/>)}</div>:<div className="page-card"><h2>More quizzes are being prepared</h2><p>Explore another category while this collection grows.</p></div>}<div className="page-card"><h2>Explore another category</h2><div className="chip-row">{categories.filter(x=>x.slug!==slug).map(x=><Link className="category-chip" key={x.slug} href={`/category/${x.slug}/`}>{x.icon} {x.title}</Link>)}</div></div></div></section></main>}
