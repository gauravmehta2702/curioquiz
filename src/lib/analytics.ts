export function trackEvent(name: string, parameters: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem("curioquiz-cookie-consent") !== "accepted") return;
  window.gtag?.("event", name, parameters);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
