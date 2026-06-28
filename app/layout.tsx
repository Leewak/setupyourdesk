import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmSerif = DM_Serif_Display({ variable: "--font-dm-serif", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Setup Your Desk — The Remote Worker's Gear Lab", template: "%s | Setup Your Desk" },
  description: "In-depth reviews and setup guides for home office gear. Standing desks, monitors, chairs, and everything in between.",
  metadataBase: new URL("https://setupyourdesk.info"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394532963824272" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ background: "#F5F4F0", color: "#1A1916" }}>
        <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E6E0" }}>
          <nav className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
            <a href="/" className="font-bold text-lg" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916", letterSpacing: "-0.01em" }}>
              SetupYourDesk<span style={{ color: "#2563EB" }}>.</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {["Standing Desks", "Monitors", "Chairs", "Accessories"].map((label) => (
                <a key={label} href={`/category/${label.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm transition-colors hover:text-sd-accent"
                  style={{ color: "#6B6860" }}>{label}</a>
              ))}
            </div>
            <a href="/blog" className="text-sm font-semibold px-4 py-2 rounded-lg"
              style={{ background: "#2563EB", color: "#fff" }}>All Reviews</a>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer style={{ background: "#FFFFFF", borderTop: "1px solid #E8E6E0" }}>
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-6">
              {[["Privacy Policy","/privacy"],["Cookie Policy","/cookie-policy"],["Affiliate Disclosure","/affiliate-disclosure"],["Disclaimer","/disclaimer"],["Terms of Use","/terms"],["Contact","/contact"]].map(([label,href])=>(
                <a key={label} href={href} className="text-xs" style={{ color: "#B0ADA6" }}>{label}</a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>
                SetupYourDesk<span style={{ color: "#2563EB" }}>.</span>
              </span>
              <p className="text-xs" style={{ color: "#B0ADA6" }}>
                &copy; {new Date().getFullYear()} SetupYourDesk. Contains affiliate links.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
