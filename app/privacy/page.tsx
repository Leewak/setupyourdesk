import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | Setup Your Desk", description: "How Setup Your Desk collects, uses, and protects your personal information." };
const sections = [
  { h: "1. Information We Collect", body: "We collect information you provide (email for newsletter) and information collected automatically: IP address, browser type, pages viewed, time on site, and referral source. This is collected via Google Analytics and standard server logs." },
  { h: "2. How We Use Your Information", body: "We use collected data to operate and improve the website, send newsletters to subscribers, analyze traffic, and comply with legal obligations. We do not sell your personal information." },
  { h: "3. Google AdSense and Advertising", body: "We use Google AdSense which uses cookies to serve personalized ads. You can opt out at google.com/settings/ads. Third-party vendors including Google may use cookies to serve ads based on your prior visits to our website." },
  { h: "4. Affiliate Links", body: "Some links are affiliate links. When you click and purchase, we may earn a commission at no extra cost to you. Affiliate partners may use tracking cookies." },
  { h: "5. Cookies", body: "We use cookies for analytics, advertising, and preferences. You can control cookies through your browser settings. See our Cookie Policy for details." },
  { h: "6. Your Rights", body: "You may have rights to access, correct, or delete your data. EU/UK: GDPR applies. California: CCPA applies. Contact us to exercise your rights." },
  { h: "7. Changes", body: "We may update this policy. Changes posted here with a revised date." },
  { h: "8. Contact", body: "Questions? Email: guifrhi.khalid@gmail.com" },
];
export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ color: "#1A1916" }}>
      <p className="text-xs mb-4" style={{ color: "#6B6860" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>Privacy Policy</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B6860" }}>This Privacy Policy explains how Setup Your Desk collects, uses, and shares information when you visit setupyourdesk.info.</p>
      {sections.map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#1A1916" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
