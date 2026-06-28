import type { Metadata } from "next";
export const metadata: Metadata = { title: "Disclaimer | Setup Your Desk", description: "Important disclaimers for Setup Your Desk." };
export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20" style={{ color: "#1A1916" }}>
      <p className="text-xs mb-4" style={{ color: "#6B6860" }}>Last updated: June 2026</p>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>Disclaimer</h1>
      <p className="mb-10 text-sm" style={{ color: "#6B6860" }}>Please read this disclaimer before using setupyourdesk.info.</p>
      {[
        { h: "General Information", body: "All content on Setup Your Desk is for informational and educational purposes only. We are not licensed ergonomics professionals. Always consult a qualified professional for serious workplace health concerns." },
        { h: "Product Reviews", body: "Our reviews reflect our personal testing experience. Individual results may vary. Ergonomic comfort is subjective and depends on body type, existing conditions, and usage patterns." },
        { h: "Third-Party Products", body: "Prices, availability, and specifications change frequently. Verify current details directly with retailers before purchasing. We are not liable for changes made by manufacturers after our review." },
        { h: "External Links", body: "We link to external sites including Amazon, retailer websites, and manufacturer pages. We do not control their content and are not responsible for their accuracy." },
        { h: "Limitation of Liability", body: "Setup Your Desk shall not be liable for any damages arising from product purchases made based on our reviews or recommendations." },
      ].map(({ h, body }) => (
        <div key={h} className="mb-8">
          <h2 className="text-base font-bold mb-2" style={{ color: "#1A1916" }}>{h}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6860" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}
