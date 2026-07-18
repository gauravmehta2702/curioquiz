import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuizCard from "@/components/QuizCard";
import { guideLookup, guides } from "@/data/guides";
import { quizLookup } from "@/data/quizzes";
import { categoryLookup } from "@/data/categories";

export function generateStaticParams(){return guides.map(guide=>({slug:guide.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const guide=guideLookup[slug];
  if(!guide)return{title:"Guide not found"};
  return {title:guide.seoTitle,description:guide.seoDescription,alternates:{canonical:`/guides/${slug}/`},openGraph:{title:guide.seoTitle,description:guide.seoDescription,type:"article",url:`https://mindrailo.com/guides/${slug}/`,modifiedTime:guide.updatedDate}};
}

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const guide=guideLookup[slug]; if(!guide)notFound();
  const category=categoryLookup[guide.categorySlug];
  const related=guide.relatedQuizSlugs.map(item=>quizLookup[item]).filter(Boolean);
  const articleSchema={"@context":"https://schema.org","@type":"Article",headline:guide.title,description:guide.description,dateModified:guide.updatedDate,datePublished:guide.updatedDate,author:{"@type":"Organization",name:"Mindrailo"},publisher:{"@type":"Organization",name:"Mindrailo",url:"https://mindrailo.com/"},mainEntityOfPage:`https://mindrailo.com/guides/${guide.slug}/`};
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:guide.faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
  return <main><section className="section"><article className="page-container narrow-page">
    <nav className="breadcrumbs"><Link href="/">Home</Link><span>›</span><Link href="/guides/">Guides</Link><span>›</span><span>{category?.title}</span></nav>
    <header className="page-card guide-hero"><p className="small-label">{category?.icon} {category?.title} · {guide.readTime}</p><h1>{guide.title}</h1><p>{guide.intro}</p><p className="guide-updated">Reviewed and updated {new Date(guide.updatedDate).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}</p></header>
    <div className="page-card article-body">{guide.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.points&&<ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul>}</section>)}</div>
    <section className="page-card"><h2>Try a related quiz</h2><p>Use the result as another prompt for reflection, not a fixed label or professional assessment.</p><div className="quiz-grid compact-quiz-grid">{related.map(quiz=><QuizCard key={quiz.slug} quiz={quiz}/>)}</div></section>
    <section className="page-card"><h2>Frequently asked questions</h2><div className="faq-list">{guide.faqs.map(faq=><article className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </article></section></main>;
}
