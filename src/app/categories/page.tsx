import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { quizzes } from "@/data/quizzes";
export const metadata:Metadata={title:"Quiz Categories",description:"Browse personality, career, psychology, money, education and fun quiz categories.",alternates:{canonical:"/categories/"}};
export default function CategoriesPage(){return <main><section className="section"><div className="page-container"><div className="page-card page-intro"><p className="small-label">Browse by interest</p><h1>Quiz categories</h1><p>Explore focused collections of thoughtful quizzes. Each category links only to relevant, available quizzes.</p></div><div className="category-grid">{categories.map(c=>{const count=quizzes.filter(q=>q.categorySlug===c.slug).length;return <Link key={c.slug} className="category-card" href={`/category/${c.slug}/`}><div className="icon-box"><span>{c.icon}</span></div><h2>{c.title}</h2><p>{c.description}</p><span className="card-link">{count} quiz{count===1?"":"zes"} <ArrowRight size={16}/></span></Link>})}</div></div></section></main>}
