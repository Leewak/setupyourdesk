import Link from "next/link";
import { posts, categories, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Reviews & Guides — Home Office Gear",
  description: "Browse all our in-depth home office gear reviews, comparisons, and setup guides.",
};

export default function BlogPage() {
  return (
    <div className="py-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <div className="tag-pill mb-3 inline-flex">All Content</div>
          <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>
            Reviews & Guides
          </h1>
        </div>
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`} className="tag-pill hover:border-blue-300 transition-colors">{cat.label}</Link>
          ))}
        </div>
        <div className="divide-y" style={{ borderColor: "#E8E6E0" }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-4 group block">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="tag-pill">{getCategoryLabel(post.category)}</span>
                  <span className="text-xs" style={{ color: "#B0ADA6" }}>{post.readTime} min read</span>
                </div>
                <h3 className="font-semibold leading-snug group-hover:text-blue-600 transition-colors" style={{ color: "#1A1916" }}>{post.title}</h3>
                <p className="text-sm mt-1 line-clamp-2" style={{ color: "#6B6860" }}>{post.excerpt}</p>
              </div>
              <span className="text-xs shrink-0 mt-1" style={{ color: "#B0ADA6" }}>{formatDate(post.date)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
