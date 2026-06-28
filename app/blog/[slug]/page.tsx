import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts, formatDate, getCategoryLabel } from "@/lib/posts";
import type { Metadata } from "next";

const SITE_URL = "https://setupyourdesk.info";
const SITE_NAME = "Setup Your Desk";
const AUTHOR = "SetupYourDesk Reviews";

export async function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author ?? AUTHOR }],
    openGraph: { title: post.title, description: post.excerpt, url: `${SITE_URL}/blog/${post.slug}`, siteName: SITE_NAME, type: "article", publishedTime: post.date },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blogSchema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.excerpt,
    author: { "@type": "Person", name: post.author ?? AUTHOR },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` } },
    datePublished: post.date, dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    keywords: post.tags.join(", "), articleSection: getCategoryLabel(post.category), wordCount: post.wordCount ?? 1500,
  };

  const faqSchema = post.faq?.length ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div className="py-12" style={{ background: "#F5F4F0" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 text-xs mb-8" style={{ color: "#9CA3AF" }}>
            <Link href="/" className="hover:text-blue-600 transition-colors" style={{ color: "#6B7280" }}>Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors" style={{ color: "#6B7280" }}>Reviews</Link>
            <span>/</span>
            <span>{getCategoryLabel(post.category)}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2.5 py-1 rounded font-medium" style={{ background: "#DBEAFE", color: "#1D4ED8" }}>{getCategoryLabel(post.category)}</span>
            <span className="text-xs" style={{ color: "#9CA3AF" }}>{post.readTime} min · {formatDate(post.date)}</span>
            {post.rating && <span className="text-xs" style={{ color: "#D97706" }}>{"★".repeat(Math.floor(post.rating))} {post.rating}/5</span>}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-dm-serif)", color: "#111827" }}>{post.title}</h1>
          <div className="flex items-center gap-3 mb-8 pb-8" style={{ borderBottom: "1px solid #E5E7EB" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#2563EB", color: "#fff" }}>S</div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#1F2937" }}>{post.author ?? AUTHOR}</p>
              <p className="text-xs" style={{ color: "#9CA3AF" }}>Updated {formatDate(post.date)}</p>
            </div>
          </div>
          {/* Quick Answer AEO box */}
          {post.quickAnswer && (
            <div className="mb-8 p-5 rounded-xl" style={{ background: "#EFF6FF", border: "2px solid #BFDBFE" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#2563EB" }}>Quick Answer</p>
              <p className="text-sm leading-relaxed" style={{ color: "#1E3A5F" }}>{post.quickAnswer}</p>
            </div>
          )}
          <div className="mb-6 p-3 rounded-lg text-xs" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", color: "#9CA3AF" }}>
            <strong style={{ color: "#6B7280" }}>Disclosure:</strong> We earn a small commission on purchases through our links at no extra cost to you. Opinions are our own — we never accept payment for positive reviews.
          </div>
          {post.affiliates && post.affiliates[0] && (
            <div className="mb-8 p-5 rounded-xl" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
              <p className="text-xs font-bold mb-1" style={{ color: "#2563EB" }}>{post.affiliates[0].badge ?? "Our Top Pick"}</p>
              <p className="font-bold text-lg mb-3" style={{ fontFamily: "var(--font-dm-serif)", color: "#111827" }}>{post.affiliates[0].name}</p>
              <a href={post.affiliates[0].url} target="_blank" rel="noopener sponsored" className="inline-block text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "#2563EB", color: "#fff" }}>{post.affiliates[0].cta}</a>
            </div>
          )}
          <div style={{ color: "#374151", lineHeight: "1.8" }}>
            <p className="text-lg mb-6" style={{ color: "#4B5563" }}>{post.excerpt}</p>
            {post.sections?.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#111827" }}>{section.h2}</h2>
                {section.image && (
                  <div className="my-5 rounded-xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
                    <img src={section.image.src} alt={section.image.alt} className="w-full object-cover" style={{ maxHeight: 380 }} />
                    {section.image.caption && <p className="text-xs text-center py-2 px-4" style={{ color: "#9CA3AF", background: "#F9FAFB" }}>{section.image.caption}</p>}
                  </div>
                )}
                {section.paras.map((para, j) => <p key={j} className="mb-4 leading-relaxed" style={{ color: "#374151" }}>{para}</p>)}
                {section.list && (
                  <ul className="my-4 space-y-2 pl-4">
                    {section.list.map((item, k) => (
                      <li key={k} className="text-sm flex items-start gap-2" style={{ color: "#374151" }}>
                        <span className="mt-1 shrink-0" style={{ color: "#2563EB" }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.tip && (
                  <div className="my-4 p-4 rounded-lg text-sm leading-relaxed" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", color: "#1E40AF" }}>
                    <strong>Pro tip: </strong>{section.tip}
                  </div>
                )}
              </div>
            ))}
            {!post.sections && (
              <>
                <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#111827" }}>How We Test</h2>
                <p>Every product in this guide was purchased and tested by our team for a minimum of 4 weeks under real work conditions. We don&apos;t accept review units in exchange for positive coverage.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-dm-serif)", color: "#111827" }}>What to Look For</h2>
                <p>The home office product market is full of overhyped gear. We cut through the noise by focusing on: build quality, long-term durability, real ergonomic benefit, value for money, and customer support quality.</p>
              </>
            )}
          </div>
          {post.affiliates && post.affiliates.length > 1 && (
            <div className="my-10 p-5 rounded-xl" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
              <p className="text-xs font-bold mb-1" style={{ color: "#15803D" }}>{post.affiliates[1].badge ?? "Runner Up"}</p>
              <p className="font-bold text-lg mb-3" style={{ fontFamily: "var(--font-dm-serif)", color: "#111827" }}>{post.affiliates[1].name}</p>
              <a href={post.affiliates[1].url} target="_blank" rel="noopener sponsored" className="inline-block text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "#16A34A", color: "#fff" }}>{post.affiliates[1].cta}</a>
            </div>
          )}
          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-dm-serif)", color: "#111827" }}>Your Questions Answered</h2>
              <div className="divide-y" style={{ borderColor: "#E5E7EB" }}>
                {post.faq.map((item, i) => (
                  <div key={i} className="py-5">
                    <h3 className="font-semibold text-sm mb-2" style={{ color: "#111827" }}>{item.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {post.affiliates && post.affiliates.length > 0 && (
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid #E5E7EB" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9CA3AF" }}>Where to Buy</h3>
              <div className="space-y-3">
                {post.affiliates.map((aff, i) => (
                  <a key={i} href={aff.url} target="_blank" rel="noopener sponsored" className="flex items-center justify-between p-4 rounded-xl group hover:shadow-sm transition-all" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
                    <div>
                      {aff.badge && <span className="text-xs mb-0.5 block" style={{ color: "#2563EB" }}>{aff.badge}</span>}
                      <span className="font-semibold text-sm" style={{ color: "#111827" }}>{aff.name}</span>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-lg font-medium shrink-0 ml-4" style={{ background: "#2563EB", color: "#fff" }}>{aff.cta.replace(" →", "")}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid #E5E7EB" }}>
            {post.tags.map((tag) => <span key={tag} className="text-xs px-2.5 py-1 rounded" style={{ background: "#F3F4F6", color: "#6B7280" }}>{tag}</span>)}
          </div>
          <div className="mt-10">
            <Link href="/blog" className="text-sm font-medium hover:underline" style={{ color: "#2563EB" }}>← All Reviews</Link>
          </div>
        </div>
      </div>
    </>
  );
}
