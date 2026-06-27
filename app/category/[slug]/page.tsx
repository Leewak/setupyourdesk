import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getPostsByCategory, formatDate } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return { title: `${cat.label} Reviews — Setup Your Desk`, description: `All ${cat.label} reviews and guides.` };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const catPosts = getPostsByCategory(slug);

  return (
    <div className="py-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Link href="/blog" className="text-xs flex items-center gap-1.5 mb-6" style={{ color: "#6B6860" }}>
          ← All Reviews
        </Link>
        <div className="tag-pill mb-3 inline-flex">{cat.label}</div>
        <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916" }}>{cat.label}</h1>
        <p className="text-sm mb-10" style={{ color: "#B0ADA6" }}>{catPosts.length} articles</p>
        {catPosts.length > 0 ? (
          <div className="divide-y" style={{ borderColor: "#E8E6E0" }}>
            {catPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="py-5 flex items-start gap-4 group block">
                <div className="flex-1">
                  <h3 className="font-semibold leading-snug group-hover:text-blue-600 transition-colors" style={{ color: "#1A1916" }}>{post.title}</h3>
                  <p className="text-sm mt-1 line-clamp-2" style={{ color: "#6B6860" }}>{post.excerpt}</p>
                </div>
                <span className="text-xs shrink-0 mt-1" style={{ color: "#B0ADA6" }}>{formatDate(post.date)}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{ color: "#B0ADA6" }}>No articles yet. Check back soon.</p>
        )}
      </div>
    </div>
  );
}
