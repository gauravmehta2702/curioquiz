import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CurioQuiz",
    short_name: "CurioQuiz",
    description: "Free quizzes and educational learning games for curious minds.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#6755d9",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    categories: ["education", "games", "quiz"],
  };
}
