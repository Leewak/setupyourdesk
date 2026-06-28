import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy | Setup Your Desk", description: "How Setup Your Desk uses cookies." };
export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ color: "#1A1916" }}>
      <p className="text-xs mb-4" style={{ color: "#6B6860" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>Cookie Policy</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B6860" }}>This policy explains how Setup Your Desk uses cookies on setupyourdesk.info.</p>
      {[
        { h: "What Are Cookies?", body: "Cookies are small text files placed on your device when you visit a website, helping the site remember your actions and preferences." },
        { h: "Cookies We Use", body: "Essential cookies (site functionality), Google Analytics cookies (_ga, _gid, _gat — anonymized traffic analysis), Google AdSense cookies (personalized advertising), and affiliate tracking cookies (set when you click affiliate product links)." },
        { h: "Google Analytics Opt-Out", body: "You can opt out of Google Analytics tracking at tools.google.com/dlpage/gaoptout." },
        { h: "Google AdSense Opt-Out", body: "Opt out of personalized advertising at google.com/settings/ads." },
        { h: "Control Cookies", body: "Manage cookies in your browser: Chrome — Settings > Privacy > Cookies. Firefox — Options > Privacy & Security. Safari — Preferences > Privacy." },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#1A1916" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
