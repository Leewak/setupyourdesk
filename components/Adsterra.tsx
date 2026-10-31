"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

// Adsterra ad units for setupyourdesk.info (blog-farm publisher account). Codes come from
// the Adsterra dashboard; keep them on article pages, apart from AdSense units.
const NATIVE_KEY = "7676d8b681a55523028c0f97711b5f30";
const BANNERS = {
  "728x90": "44f8557ab19ecbfde3a8be6c175cea0d",
  "300x250": "cd9026c19eab3cdaa20ed248fb4cd306",
  "320x50": "2eb5f772873057239bb97c8b6b45f5b0",
} as const;

type BannerSize = keyof typeof BANNERS;

// Each banner gets its own iframe document: Adsterra's snippet reads a global
// `atOptions`, so two banners on one page would otherwise overwrite each other.
function bannerDoc(key: string, width: number, height: number) {
  return `<!doctype html><html><body style="margin:0"><script>atOptions={'key':'${key}','format':'iframe','height':${height},'width':${width},'params':{}};</script><script src="https://bauval.org/22/${key}"></script></body></html>`;
}

function AdLabel() {
  return <p style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 4px", textAlign: "center" }}>Advertisement</p>;
}

export function AdsterraBanner({ size, className }: { size: BannerSize; className?: string }) {
  const [width, height] = size.split("x").map(Number);
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <AdLabel />
      <iframe title="Advertisement" srcDoc={bannerDoc(BANNERS[size], width, height)} width={width} height={height} scrolling="no" style={{ border: 0, display: "block", maxWidth: "100%" }} />
    </div>
  );
}

const desktopQuery = "(min-width: 768px)";
function subscribe(onChange: () => void) {
  const mq = window.matchMedia(desktopQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** In-article slot: 728x90 on desktop, 300x250 on phones. Chosen in the browser so only one unit loads. */
export function AdsterraInline({ className }: { className?: string }) {
  const desktop = useSyncExternalStore(subscribe, () => window.matchMedia(desktopQuery).matches, () => null);
  if (desktop === null) return <div className={className} style={{ minHeight: 90 }} />;
  return <AdsterraBanner key={desktop ? "d" : "m"} size={desktop ? "728x90" : "300x250"} className={className} />;
}

/** Native Banner: one per page (Adsterra targets a fixed container id). */
export function AdsterraNative({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = `https://bauval.org/21/${NATIVE_KEY}`;
    host.appendChild(script);
    return () => script.remove();
  }, []);
  return (
    <div ref={ref} className={className}>
      <AdLabel />
      <div id={`container-${NATIVE_KEY}`} />
    </div>
  );
}
