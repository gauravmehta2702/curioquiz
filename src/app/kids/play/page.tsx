import type { Metadata } from "next";
import KidsGame from "@/components/kids/KidsGame";

export const metadata: Metadata = {
  title: "Rilo’s Treasure Garden | Mindrailo Kids",
  description: "Play a free graphical learning adventure for children aged 6–7 with maths, spelling, patterns, narration and gentle rewards.",
  alternates: {
    canonical: "/kids/play/",
  },
};

export default function KidsPlayPage() {
  return (
    <main>
      <section className="section">
        <div className="page-container">
          <KidsGame />
        </div>
      </section>
    </main>
  );
}
