import type { MetadataRoute } from "next";
import { quizzes } from "@/data/quizzes";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
export const dynamic="force-static";
const base="https://mindrailo.com";
export default function sitemap():MetadataRoute.Sitemap{
 const staticRoutes=["","/quizzes","/categories","/search","/guides","/kids","/kids/play","/about","/faq","/contact","/methodology","/privacy","/terms","/disclaimer"];
 return [
  ...staticRoutes.map(route=>({url:`${base}${route}/`,lastModified:new Date("2026-07-14"),changeFrequency:(route===""?"weekly":"monthly") as "weekly"|"monthly",priority:route===""?1:route==="/quizzes"?0.9:0.6})),
  ...categories.map(c=>({url:`${base}/category/${c.slug}/`,lastModified:new Date("2026-07-14"),changeFrequency:"monthly" as const,priority:0.7})),
  ...guides.map(g=>({url:`${base}/guides/${g.slug}/`,lastModified:new Date(g.updatedDate),changeFrequency:"monthly" as const,priority:0.72})),
  ...quizzes.map(q=>({url:`${base}/quiz/${q.slug}/`,lastModified:new Date(q.updatedDate),changeFrequency:"monthly" as const,priority:0.75}))
 ];
}
