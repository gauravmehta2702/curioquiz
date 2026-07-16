import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mindrailo",
    short_name: "Mindrailo",
    description: "Free quizzes and educational learning games for curious minds.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#6755d9",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    categories: ["education", "games", "quiz"],
  };
}
