export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  featured?: boolean;
  rating?: number;
  priceRange?: string;
}

export const categories = [
  { slug: "standing-desks", label: "Standing Desks" },
  { slug: "monitors", label: "Monitors" },
  { slug: "chairs", label: "Chairs" },
  { slug: "accessories", label: "Accessories" },
  { slug: "setup-guides", label: "Setup Guides" },
];

export const posts: Post[] = [
  {
    slug: "best-standing-desk-under-500",
    title: "Best Standing Desks Under $500 in 2026: 6 Tested, One Clear Winner",
    excerpt: "We spent 3 months testing 6 standing desks in this price range. Here's what we found — and the one we'd actually buy.",
    category: "standing-desks",
    tags: ["standing desk", "budget", "FlexiSpot", "Uplift"],
    date: "2026-06-22",
    readTime: 11,
    featured: true,
    rating: 4.5,
    priceRange: "Under $500",
  },
  {
    slug: "best-monitor-for-home-office-2026",
    title: "Best Monitors for Home Office in 2026: Tested Across 4K, Ultrawide, and Budget Picks",
    excerpt: "After using 9 monitors over 4 months, we have a clear recommendation for every budget and use case.",
    category: "monitors",
    tags: ["monitor", "4K", "LG", "Dell"],
    date: "2026-06-19",
    readTime: 9,
    featured: true,
  },
  {
    slug: "ergonomic-chair-remote-work",
    title: "Best Ergonomic Chairs for Remote Work (That Won't Break Your Back or Budget)",
    excerpt: "Sitting 8 hours a day in a bad chair is a health crisis waiting to happen. Here are the chairs worth the investment.",
    category: "chairs",
    tags: ["ergonomic chair", "Herman Miller", "Secretlab"],
    date: "2026-06-16",
    readTime: 8,
    featured: false,
  },
  {
    slug: "home-office-setup-guide-2026",
    title: "The Complete Home Office Setup Guide for 2026",
    excerpt: "From desk choice to cable management — everything you need to build a productive, comfortable home office.",
    category: "setup-guides",
    tags: ["home office", "setup guide", "remote work"],
    date: "2026-06-13",
    readTime: 12,
    featured: false,
  },
  {
    slug: "best-webcam-video-calls",
    title: "Best Webcams for Video Calls in 2026: Tested on Zoom, Teams, and Meet",
    excerpt: "Stop showing up pixelated on video calls. These webcams make a real difference — and two of them cost under $100.",
    category: "accessories",
    tags: ["webcam", "video calls", "Logitech", "Elgato"],
    date: "2026-06-10",
    readTime: 7,
    featured: false,
  },
  {
    slug: "home-office-lighting-guide",
    title: "Home Office Lighting: Why It Matters More Than Your Monitor",
    excerpt: "Bad lighting causes eye strain, fatigue, and poor video quality. Here's how to fix it for under $150.",
    category: "accessories",
    tags: ["lighting", "ring light", "bias lighting", "home office"],
    date: "2026-06-08",
    readTime: 6,
    featured: false,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getPostsByCategory = (cat: string) => posts.filter((p) => p.category === cat);
export const getFeaturedPosts = () => posts.filter((p) => p.featured);
export const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
export const getCategoryLabel = (slug: string) => categories.find((c) => c.slug === slug)?.label ?? slug;
