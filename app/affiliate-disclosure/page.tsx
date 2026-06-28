import type { Metadata } from "next";
export const metadata: Metadata = { title: "Affiliate Disclosure | Setup Your Desk", description: "Our affiliate disclosure." };
export default function AffiliatePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ color: "#1A1916" }}>
      <p className="text-xs mb-4" style={{ color: "#6B6860" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>Affiliate Disclosure</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B6860" }}>Setup Your Desk discloses affiliate relationships per FTC guidelines.</p>
      {[
        { h: "FTC Disclosure", body: "Some links on this site are affiliate links. If you click a link and make a purchase, we may receive a commission at no additional cost to you." },
        { h: "Same Price for You", body: "You pay exactly the same price whether you use our affiliate link or go directly to the retailer's site. The commission comes from the retailer's marketing budget." },
        { h: "Our Review Standards", body: "We only recommend home office products we have personally tested or thoroughly researched. We test gear for ergonomics, build quality, and value for money. Affiliate relationships do not affect our ratings." },
        { h: "Products with Affiliate Links", body: "Affiliate relationships include but are not limited to standing desk brands, ergonomic chair companies, monitor arm manufacturers, and home office accessory retailers." },
        { h: "Contact", body: "Questions? Email hello@setupyourdesk.info" },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#1A1916" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
