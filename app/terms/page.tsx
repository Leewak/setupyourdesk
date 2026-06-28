import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Use | Setup Your Desk", description: "Terms and conditions for Setup Your Desk." };
export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ color: "#1A1916" }}>
      <p className="text-xs mb-4" style={{ color: "#6B6860" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>Terms of Use</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B6860" }}>By using setupyourdesk.info, you agree to these terms.</p>
      {[
        { h: "1. Acceptance", body: "Accessing this site means you agree to these terms. If you disagree, please do not use the site." },
        { h: "2. Intellectual Property", body: "All content including reviews, photography descriptions, and guides is property of Setup Your Desk. Excerpts with proper attribution are permitted." },
        { h: "3. Permitted Use", body: "This site is for personal, non-commercial use. No bulk scraping, content redistribution, or interference with site operations." },
        { h: "4. Disclaimer of Warranties", body: "Site is provided 'as is'. We disclaim all warranties to the fullest extent permitted by law." },
        { h: "5. Limitation of Liability", body: "We shall not be liable for any damages arising from use of this website." },
        { h: "6. Changes", body: "We may modify these Terms at any time. Continued use constitutes acceptance." },
        { h: "7. Contact", body: "Email hello@setupyourdesk.info" },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#1A1916" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
