import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="py-14">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "#B0ADA6" }}>
          <Link href="/" className="hover:text-sd-accent">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-sd-accent">Reviews</Link>
          <span>/</span>
          <span style={{ color: "#6B6860" }}>{getCategoryLabel(post.category)}</span>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <span className="tag-pill">{getCategoryLabel(post.category)}</span>
          <span className="text-xs" style={{ color: "#B0ADA6" }}>{post.readTime} min read</span>
          <span className="text-xs" style={{ color: "#B0ADA6" }}>·</span>
          <span className="text-xs" style={{ color: "#B0ADA6" }}>{formatDate(post.date)}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-[1.2] mb-5"
          style={{ fontFamily: "var(--font-dm-serif)", color: "#1A1916", letterSpacing: "-0.02em" }}>
          {post.title}
        </h1>

        <p className="text-lg mb-8 pb-8" style={{ color: "#6B6860", borderBottom: "1px solid #E8E6E0" }}>{post.excerpt}</p>

        <div className="prose-light">
          <p>This review is coming soon. We&apos;re currently testing and will publish our full findings shortly.</p>
          <h2>What we&apos;ll cover</h2>
          <p>In this review, we cover setup, build quality, daily use over several weeks, comparison with alternatives, and our honest verdict on whether it&apos;s worth the money.</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid #E8E6E0" }}>
          {post.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
