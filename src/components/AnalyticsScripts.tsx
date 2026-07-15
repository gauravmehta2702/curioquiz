"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ConsentChoice } from "@/components/CookieConsent";

const STORAGE_KEY = "curioquiz-cookie-consent";

export default function AnalyticsScripts() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<ConsentChoice | null>(null);

  const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  useEffect(() => {
    const readConsent = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setConsent(stored === "accepted" ? "accepted" : stored === "declined" ? "declined" : null);
    };

    const timer = window.setTimeout(readConsent, 0);
    window.addEventListener("curioquiz-consent-changed", readConsent);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("curioquiz-consent-changed", readConsent);
    };
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || pathname === "/kids/play/") return;
    if (typeof window.gtag === "function" && gaId) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [consent, gaId, pathname]);

  if (consent !== "accepted" || pathname === "/kids/play/") return null;

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="curioquiz-ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
window.gtag = function(){dataLayer.push(arguments);};
window.gtag('js', new Date());
window.gtag('config', '${gaId}', { send_page_view: false, anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {clarityId ? (
        <Script id="curioquiz-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, 'clarity', 'script', '${clarityId}');`}
        </Script>
      ) : null}
    </>
  );
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}
