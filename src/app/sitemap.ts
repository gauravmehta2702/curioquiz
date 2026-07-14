import type { MetadataRoute } from "next";
import { quizzes } from "@/data/quizzes";

export const dynamic = "force-static";

const baseUrl = "https://curioquiz.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/quizzes",
    "/categories",
    "/kids",
    "/about",
    "/contact",
    "/methodology",
    "/privacy",
    "/terms",
    "/disclaimer",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const quizRoutes = quizzes.map((quiz) => ({
    url: `${baseUrl}/quiz/${quiz.slug}/`,
    lastModified: new Date(quiz.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...quizRoutes];
}
