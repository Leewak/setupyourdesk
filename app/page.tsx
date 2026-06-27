import Link from "next/link";
import { posts, getFeaturedPosts, categories, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Your Desk — The Remote Worker's Gear Lab",
  description: "In-depth reviews and guides for home office gear. We test it, you decide.",
};

export default function HomePage() {
  const featured = getFeaturedPosts();
  const latest = posts.filter((p) => !p.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E6E0" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="tag-pill mb-5 inline-flex">The Remote Worker&apos;s Gear Lab</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5"
              style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916", letterSpacing: "-0.02em" }}>
              We test home office gear so you don&apos;t waste money.
            </h1>
            <p className="text-lg mb-8" style={{ color: "#6B6860" }}>
              In-depth reviews, honest comparisons, and practical setup guides from people who actually work from home.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/blog" className="px-5 py-2.5 rounded-lg text-sm font-semibold" style={{ background: "#2563EB", color: "#fff" }}>
                Browse All Reviews
              </Link>
              <Link href="/category/setup-guides" className="px-5 py-2.5 rounded-lg text-sm font-semibold border" style={{ borderColor: "#E8E6E0", color: "#1A1916", background: "#fff" }}>
                Setup Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8" style={{ borderBottom: "1px solid #E8E6E0" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}
                className="tag-pill hover:border-blue-300 transition-colors">{cat.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="font-bold text-xl mb-8" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>
            Editor&apos;s Picks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-xl overflow-hidden" style={{ border: "1px solid #E8E6E0", background: "#fff" }}>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="tag-pill">{getCategoryLabel(post.category)}</span>
                    {post.priceRange && <span className="tag-pill" style={{ color: "#16A34A", borderColor: "#BBF7D0", background: "#F0FDF4" }}>{post.priceRange}</span>}
                  </div>
                  <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>{post.title}</h3>
                  <p className="text-sm mb-4" style={{ color: "#6B6860" }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#B0ADA6" }}>{formatDate(post.date)}</span>
                    <span className="text-xs font-semibold" style={{ color: "#2563EB" }}>{post.readTime} min read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="py-10 pb-20" style={{ borderTop: "1px solid #E8E6E0" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="font-bold text-xl mb-8" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>Latest Reviews</h2>
          <div className="divide-y" style={{ borderColor: "#E8E6E0" }}>
            {latest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-4 group block">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="tag-pill">{getCategoryLabel(post.category)}</span>
                    <span className="text-xs" style={{ color: "#B0ADA6" }}>{post.readTime} min read</span>
                  </div>
                  <h3 className="font-semibold leading-snug group-hover:text-blue-600 transition-colors" style={{ color: "#1A1916" }}>{post.title}</h3>
                  <p className="text-sm mt-1 line-clamp-1" style={{ color: "#6B6860" }}>{post.excerpt}</p>
                </div>
                <span className="text-xs shrink-0 mt-1" style={{ color: "#B0ADA6" }}>{formatDate(post.date)}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/blog" className="text-sm font-semibold" style={{ color: "#2563EB" }}>View all reviews →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
