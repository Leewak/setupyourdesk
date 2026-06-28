"use client";
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20" style={{ color: "#1A1916" }}>
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2563EB" }}>Get in Touch</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>Contact Setup Your Desk</h1>
      <p className="mb-10 text-sm leading-relaxed" style={{ color: "#6B6860" }}>
        We are an independent home office gear review publication. We test every product we recommend and are not influenced by manufacturer relationships. Reach out for corrections, product submissions, or partnership inquiries.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { title: "Reviews", desc: "Corrections or updates to gear reviews" },
          { title: "Products", desc: "Submit a product for review consideration" },
          { title: "Partnerships", desc: "Sponsorships or affiliate programs" },
        ].map(({ title, desc }) => (
          <div key={title} className="p-4 rounded-xl" style={{ background: "#fff", border: "1px solid #E8E6E0" }}>
            <p className="font-semibold text-sm mb-1" style={{ color: "#1A1916" }}>{title}</p>
            <p className="text-xs leading-snug" style={{ color: "#6B6860" }}>{desc}</p>
          </div>
        ))}
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B6860" }}>Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #E8E6E0", color: "#1A1916" }} /></div>
          <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B6860" }}>Email</label><input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #E8E6E0", color: "#1A1916" }} /></div>
        </div>
        <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B6860" }}>Subject</label><input type="text" placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl text-sm outline-none" style={{ background: "#fff", border: "1px solid #E8E6E0", color: "#1A1916" }} /></div>
        <div><label className="block text-xs font-semibold mb-2" style={{ color: "#6B6860" }}>Message</label><textarea rows={6} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: "#fff", border: "1px solid #E8E6E0", color: "#1A1916" }} /></div>
        <button type="submit" className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: "#2563EB", color: "#fff" }}>Send Message</button>
      </form>
      <div className="mt-10 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ borderTop: "1px solid #E8E6E0" }}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#2563EB" }}>Email</p>
          <p className="text-sm" style={{ color: "#1A1916" }}>hello@setupyourdesk.info</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#2563EB" }}>Response Time</p>
          <p className="text-sm" style={{ color: "#1A1916" }}>Within 2–3 business days</p>
        </div>
      </div>
    </div>
  );
}
