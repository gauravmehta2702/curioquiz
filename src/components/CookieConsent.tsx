"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mindrailo-cookie-consent";

export type ConsentChoice = "accepted" | "declined";

export default function CookieConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<ConsentChoice | null | undefined>(undefined);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setChoice(stored === "accepted" || stored === "declined" ? stored : null);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, nextChoice);
    setChoice(nextChoice);
    window.dispatchEvent(
      new CustomEvent("mindrailo-consent-changed", {
        detail: { choice: nextChoice },
      }),
    );
  }

  if (choice === undefined || choice || pathname === "/kids/play/") return null;

  return (
    <aside className="consent-banner" aria-label="Cookie preferences">
      <div>
        <strong>Privacy choices</strong>
        <p>
          Mindrailo uses essential browser storage for features such as game
          progress. Optional analytics will run only after you accept. The
          active Mindrailo Kids game does not load analytics.
        </p>
        <Link href="/privacy/">Read the privacy notice</Link>
      </div>
      <div className="consent-actions">
        <button
          className="button button-secondary"
          type="button"
          onClick={() => saveChoice("declined")}
        >
          Essential only
        </button>
        <button
          className="button button-primary"
          type="button"
          onClick={() => saveChoice("accepted")}
        >
          Accept analytics
        </button>
      </div>
    </aside>
  );
}
