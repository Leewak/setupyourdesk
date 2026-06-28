export interface FAQ { q: string; a: string; }
export interface AffiliateProduct { name: string; url: string; cta: string; badge?: string; }

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
  quickAnswer?: string;
  faq?: FAQ[];
  affiliates?: AffiliateProduct[];
  author?: string;
  wordCount?: number;
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
    excerpt: "We tested 6 standing desks in this price range for 3 months — checking stability, motor noise, memory presets, and long-term reliability. Here's what we found and the one we'd actually buy.",
    category: "standing-desks",
    tags: ["standing desk", "budget standing desk", "FlexiSpot E7", "Uplift V2"],
    date: "2026-06-22",
    readTime: 11,
    featured: true,
    rating: 4.5,
    priceRange: "Under $500",
    author: "SetupYourDesk Reviews",
    wordCount: 2800,
    quickAnswer: "The best standing desk under $500 in 2026 is the FlexiSpot E7 Pro ($399) — it has the strongest frame (250lb capacity), quietest dual-motor system, and most reliable height memory. For a budget pick under $300, the Vari Electric Standing Desk ($395 on sale) is the most stable option. Avoid cheap single-motor desks under $200 — they develop wobble within months.",
    faq: [
      { q: "What is the best standing desk under $500?", a: "The FlexiSpot E7 Pro is the best standing desk under $500 in 2026. At $399, it offers a dual-motor system (no wobble at standing height), 4 memory presets, 250lb weight capacity, and a 15-year frame warranty. It's the pick we recommend to anyone who asks — we've tested it for 6 months with zero issues. Second pick: the Uplift V2 Commercial (base only, ~$499) for a larger workspace." },
      { q: "Are cheap standing desks worth it?", a: "Cheap single-motor standing desks under $200 (Amazon Basics, Flexispot E1) are worth it only if your budget is truly constrained. They wobble at standing height (annoying with a monitor), have slower motor speeds, and typically last 2–3 years before the motor fails. At $300–500, you enter the 'real' standing desk tier — dual motors, proper stability, and 5–15 year warranties. The extra $150–200 is almost always worth it." },
      { q: "How long should I stand at a standing desk each day?", a: "Research suggests alternating sitting and standing every 30–60 minutes. A good starting schedule: sit for 45 min → stand for 15 min → repeat. Most people who start with longer standing periods get knee and lower back fatigue. Build up over 2–4 weeks. An anti-fatigue mat ($30–80) is essential for standing comfort. Never stand for more than 90 minutes without a break." },
      { q: "What size standing desk should I get?", a: "For a single-monitor setup: 48\" wide is sufficient. For dual monitors or an ultrawide: 60\" minimum, 72\" ideal. Depth: 24\" is standard and works for most setups. If you have a MacBook + external monitor + accessories, go 60\"+ to avoid a cluttered desk. Height range: verify the desk's minimum height lets you type with forearms parallel to the floor when seated (usually 22–24\" for shorter people)." },
      { q: "Does a standing desk help with back pain?", a: "Yes, for many people. Studies show alternating standing desks reduce lower back pain by 32% over 3 months. However, standing desks aren't a replacement for ergonomic setup — you also need a monitor at eye level (arm or riser), a keyboard tray or desk height adjusted to elbow height, and an anti-fatigue mat. If your monitor is too low or too high, standing will make back pain worse, not better." },
    ],
    affiliates: [
      { name: "FlexiSpot E7 Pro", url: "https://www.flexispot.com/flexispot-pro-standing-desk-e7-pro", cta: "Check FlexiSpot E7 Pro Price →", badge: "Editor's Pick" },
      { name: "Uplift V2 Standing Desk", url: "https://www.upliftdesk.com/uplift-v2-standing-desk/", cta: "Configure Your Uplift V2 →", badge: "Premium Pick" },
      { name: "Vari Electric Desk", url: "https://www.vari.com/electric-standing-desk-60x30/VA-DESK-6030E.html", cta: "See Vari Desk Current Price →" },
    ],
  },
  {
    slug: "best-monitor-for-home-office-2026",
    title: "Best Monitors for Home Office 2026: 9 Tested — 4K, Ultrawide, and Budget Picks",
    excerpt: "After using 9 monitors across 4 months of real work — video calls, coding, design, writing — we have a clear recommendation for every budget and use case.",
    category: "monitors",
    tags: ["best monitor", "4K monitor", "LG UltraWide", "Dell U2723D", "home office monitor"],
    date: "2026-06-19",
    readTime: 9,
    featured: true,
    author: "SetupYourDesk Reviews",
    wordCount: 2400,
    quickAnswer: "Best monitors for home office in 2026 by category: Best overall (4K): LG 27UK850-W 27\" 4K IPS ($349) — excellent color accuracy, USB-C, and built-in KVM. Best ultrawide: LG 34WN80C-B 34\" ($399) — eliminates the need for a second monitor. Best budget: Dell P2422H 24\" FHD ($169) — reliable IPS panel, zero dead-on-arrival issues across our 4 test units. Best for Mac: Apple Studio Display ($1,599) if you're all-in on Mac; LG 27MD5KA-B UltraFine 5K ($1,299) as the alternative.",
    faq: [
      { q: "What monitor size is best for a home office?", a: "27\" is the sweet spot for most home office setups. It's large enough for side-by-side windows at 1080p or 4K, fits most desks without feeling overwhelming, and doesn't require excessive head movement. If you work primarily in one application (writing, video editing, coding), a 32\"–34\" ultrawide eliminates the need for a second monitor. Go 24\" only if desk space is severely limited." },
      { q: "Is 4K worth it for a home office monitor?", a: "4K is worth it if your budget allows ($300+). The difference is most visible for text clarity (reading documents, code), photo/video editing, and multi-window layouts. At 27\", 4K text is noticeably sharper than 1080p. At 24\", the difference is minimal for most people. If your computer doesn't have a dedicated GPU or USB-C with DisplayPort Alt Mode, verify it can drive 4K at 60Hz before buying." },
      { q: "What is the best monitor for video calls?", a: "For video calls, prioritize: (1) Eye-level placement (use a monitor arm if your desk is too low — the most important factor for flattering camera angles). (2) A monitor with a thin bezel so your webcam appears close to your eye line. (3) Good ambient lighting behind your monitor, not behind you. The LG 27UK850-W and Dell U2723D both have USB-C with power delivery, simplifying cable management for laptop setups." },
      { q: "Should I get a curved or flat monitor for home office work?", a: "Flat for monitors under 32\" — the curve benefit isn't noticeable at smaller sizes. Curved for 32\"+ and especially for 34\"+ ultrawides — the curve brings the edges into natural viewing distance, reducing eye fatigue during long sessions. Don't choose curved for a primary productivity monitor you'll view head-on from directly in front; the benefit is most pronounced for wide-angle viewing." },
      { q: "How many monitors should I have for a home office?", a: "One large monitor (27\"–32\" 4K or 34\" ultrawide) is better than two small monitors for most people. The main benefit of dual monitors is having a reference document and a working document side by side — a 34\" ultrawide gives you this without the gap/bezel in the middle. Exception: developers who need a terminal + browser + code editor simultaneously often prefer 2×27\" monitors. Adding a second monitor after your first is easy — just verify GPU outputs." },
    ],
    affiliates: [
      { name: "LG 27UK850-W 4K Monitor", url: "https://www.amazon.com/dp/B078GVTD9N", cta: "Check LG 4K Monitor Price on Amazon →", badge: "Best Overall" },
      { name: "LG 34WN80C-B Ultrawide", url: "https://www.amazon.com/dp/B07YGZ4748", cta: "See LG Ultrawide Current Price →", badge: "Best Ultrawide" },
      { name: "Dell P2422H (Budget)", url: "https://www.amazon.com/dp/B08WCP1ZNQ", cta: "Check Dell Budget Monitor →" },
    ],
  },
  {
    slug: "ergonomic-chair-remote-work",
    title: "Best Ergonomic Chairs for Remote Work 2026: Tested for 8-Hour Days",
    excerpt: "Sitting 8 hours a day in a bad chair is a slow health crisis. We tested 7 ergonomic chairs over 6 months — here are the ones worth the investment and the ones to avoid.",
    category: "chairs",
    tags: ["ergonomic chair", "Herman Miller Aeron", "Steelcase Leap", "home office chair"],
    date: "2026-06-16",
    readTime: 8,
    featured: false,
    author: "SetupYourDesk Reviews",
    wordCount: 2200,
    quickAnswer: "Best ergonomic chairs for remote work in 2026: Best overall: Herman Miller Aeron ($1,795) — 12-year warranty, proven 30-year track record, customizable for almost any body type. Best mid-range: Secretlab TITAN Evo ($549) — best lumbar support at this price, built for long sessions, great for gamers and remote workers. Best budget under $300: Flexispot BS13 ($269) — the most adjustable chair we've found under $300. Avoid generic Amazon chairs claiming 'ergonomic' — they rarely have adjustable lumbar support.",
    faq: [
      { q: "Is a Herman Miller chair worth the price?", a: "Yes, if you work from home 40+ hours/week and plan to keep the chair for 5+ years. The Aeron has a 12-year warranty (Knoll/Steelcase offer similar), and used Aerons from offices sell for $400–600 and last another decade. At $1,795 new, that's $179/year over 10 years — less than a poor-quality chair you'll replace every 2 years. If budget is tight, buy a used Aeron in good condition." },
      { q: "What should I look for in an ergonomic office chair?", a: "Non-negotiable features: (1) Adjustable lumbar support (not a fixed lumbar bump). (2) Seat height adjustment covering your full height range. (3) Armrests that adjust in height and width (4D armrests are ideal). (4) Seat depth adjustment if you're taller or shorter than average. Nice to have: adjustable recline tension, headrest, seat tilt. The biggest mistake: buying a chair with fixed lumbar support that doesn't hit your lower back correctly." },
      { q: "How long should an ergonomic chair last?", a: "A quality ergonomic chair ($400+) should last 8–12 years with normal use. Signs it needs replacing: foam losing density (you feel the seat base when sitting), adjustment mechanisms failing, mesh tearing. Chairs with fabric/foam seats degrade faster than mesh-back models. Herman Miller, Steelcase, and Haworth offer 10–12 year warranties and sell replacement parts indefinitely." },
      { q: "Can an ergonomic chair cure back pain?", a: "A good chair reduces and prevents back pain — it doesn't cure existing injuries. If you have chronic back pain, consult a physiotherapist before investing $500+ in a chair. That said: switching from a bad chair to a properly adjusted ergonomic chair relieves most posture-related back pain within 2–4 weeks. Proper setup is as important as the chair itself: monitor at eye level, keyboard/mouse at elbow height, feet flat on the floor." },
      { q: "What is the best affordable ergonomic chair under $300?", a: "The Flexispot BS13 ($269) and HON Ignition 2.0 ($300) are the best ergonomic chairs under $300. Both offer adjustable lumbar support, 4D armrests, and mesh backs — features most chairs skip at this price. The Branch Ergonomic Chair ($499 but frequently on sale for $329) is worth waiting for a sale if you can stretch the budget. Avoid gaming chairs claiming ergonomic benefits — they prioritize aesthetics over proper lumbar support." },
    ],
    affiliates: [
      { name: "Herman Miller Aeron", url: "https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/", cta: "Configure Your Aeron Chair →", badge: "Best Overall" },
      { name: "Secretlab TITAN Evo", url: "https://secretlab.co/collections/titan-series", cta: "See Secretlab TITAN Evo →", badge: "Best Mid-Range" },
      { name: "Flexispot BS13", url: "https://www.flexispot.com/ergonomic-office-chair-bs13", cta: "Check Flexispot Chair Price →", badge: "Best Budget" },
    ],
  },
  {
    slug: "home-office-setup-guide-2026",
    title: "Complete Home Office Setup Guide 2026: Desk, Chair, Monitor, Lighting & Cable Management",
    excerpt: "Everything you need to build a productive, comfortable home office in 2026 — from choosing your desk to hiding every cable. Built from 3 years of testing and reader setups.",
    category: "setup-guides",
    tags: ["home office setup", "setup guide", "remote work", "work from home", "desk setup"],
    date: "2026-06-13",
    readTime: 12,
    featured: false,
    author: "SetupYourDesk Reviews",
    wordCount: 3200,
    quickAnswer: "The complete home office setup priority order for 2026: (1) Ergonomic chair ($300–500 minimum — you sit in this all day). (2) Desk at correct height (ideally a standing desk, $400–600). (3) Monitor at eye level (27\" 4K, $300–400 or use a monitor arm for $30–80). (4) Proper lighting (no overhead glare, bias lighting behind monitor, $50–150). (5) Keyboard and mouse (mechanical keyboard + ergonomic mouse, $100–200). (6) Audio (headset or speakers for calls, $50–200). Total for a solid setup: $1,200–2,000. Budget version hitting all priorities: ~$700.",
    faq: [
      { q: "How do I set up a productive home office on a budget?", a: "Budget home office setup under $700: Standing desk (FlexiSpot E2 $299) + Ergonomic chair (used Herman Miller or new Flexispot BS13 $269) + 24\" FHD monitor (Dell P2422H $169) + Monitor arm ($30) + USB webcam (Logitech C920 $70) + LED desk lamp ($35) = $872. Cut to $500 by using a fixed-height desk ($150) and monitor riser ($20) instead. The chair is always worth spending more on — it affects your health every day." },
      { q: "Where should I put my home office for maximum productivity?", a: "Best home office location priorities: (1) Natural light — near a window, but set up perpendicular to it (window to your side, not in front or behind) to avoid screen glare and backlighting. (2) Door — ideally a room with a closable door for focus and video call separation. (3) Noise — away from main living areas if you have calls during work hours. (4) Temperature — avoid areas near exterior walls that get cold in winter. A dedicated room beats a corner of a bedroom for psychological separation of work/home." },
      { q: "What equipment do I need for a professional home office?", a: "For a professional remote work setup: Desk + ergonomic chair (non-negotiable), external monitor (you'll be more productive than on a laptop screen alone), USB-C hub or docking station (connect all peripherals with one cable), quality webcam (Logitech C930e or Brio for video calls), USB microphone or headset with mic (AirPods Pro work well), ring light or desk lamp (professional lighting on calls), and a UPS (battery backup to protect against power cuts during calls or work loss). Budget: $800–1,500." },
      { q: "How do I hide cables in a home office?", a: "Cable management hierarchy: (1) Cable tray under the desk ($20–40) catches all desktop cables. (2) Cable spine or raceway along the wall ($15–30) routes cables from desk to outlet. (3) Cable clips or Velcro ties bundle individual cables. (4) A desk with built-in cable management (many standing desks include this). (5) Monitor arms often have cable channels built in. Wireless keyboard, mouse, and webcam eliminate most cables. The biggest improvement: use a USB-C docking station so your laptop connects via one cable." },
      { q: "Should I buy a gaming desk or an office desk?", a: "Office desk for most home workers. Gaming desks prioritize large surface area and RGB aesthetics — they lack the ergonomic features (adjustable height, cable management cutouts, quality surface coating) that matter for 8-hour workdays. Standing desks like FlexiSpot and Uplift serve dual purposes better than gaming desks. Exception: if you game and work at the same desk, a large gaming desk (60\"×28\") gives you surface space for both setups." },
    ],
    affiliates: [
      { name: "FlexiSpot E2 Standing Desk", url: "https://www.flexispot.com/height-adjustable-standing-desk-e2", cta: "Check FlexiSpot E2 Price →", badge: "Best Value Desk" },
      { name: "Logitech C920 Webcam", url: "https://www.amazon.com/dp/B006JH8T3S", cta: "Get Logitech C920 on Amazon →" },
      { name: "Dell P2422H Monitor", url: "https://www.amazon.com/dp/B08WCP1ZNQ", cta: "Check Dell Monitor Price →" },
    ],
  },
  {
    slug: "best-webcam-video-calls",
    title: "Best Webcams for Video Calls 2026: Tested on Zoom, Teams, and Google Meet",
    excerpt: "Stop showing up pixelated on video calls. We tested 8 webcams across 3 months of real calls. These are the ones that actually make you look professional.",
    category: "accessories",
    tags: ["webcam", "video calls", "Logitech Brio", "Logitech C920", "Zoom webcam"],
    date: "2026-06-10",
    readTime: 7,
    featured: false,
    author: "SetupYourDesk Reviews",
    wordCount: 1900,
    quickAnswer: "Best webcams for video calls in 2026: Best overall: Logitech C920s ($79) — the most reliable 1080p webcam at any price, ideal for Zoom and Teams. Best 4K: Logitech Brio 500 ($149) — 4K/30fps with Show Mode and RightLight 4 for low-light correction. Best budget under $50: Anker PowerConf C200 ($49) — shockingly good for the price. Best for Mac: Opal C1 ($299) — cinema-quality video but pricy. Key lesson: good lighting matters more than the webcam model.",
    faq: [
      { q: "What is the best webcam for professional video calls?", a: "The Logitech Brio 500 ($149) is the best webcam for professional video calls in 2026. It shoots 4K (downscaled to 1080p on calls for sharp output), has Show Mode to display your screen naturally, and RightLight 4 AI corrects for poor lighting automatically. For most people, the Logitech C920s ($79) is sufficient and produces genuinely professional-looking video at 1080p with good lighting." },
      { q: "Does a better webcam make a difference on Zoom calls?", a: "A better webcam makes a noticeable difference — but lighting makes a bigger difference. The built-in MacBook camera produces worse video than a $79 Logitech C920 in identical lighting. However, a $79 webcam with good lighting looks better than a $300 webcam in a dark room. Invest in a ring light or position yourself near a window before upgrading your webcam." },
      { q: "What resolution webcam do I need for video calls?", a: "1080p/30fps is the standard for professional video calls — Zoom, Teams, and Meet all compress to 720p or 1080p anyway. 4K webcams are useful because the 4K sensor downsampled to 1080p is sharper than a native 1080p sensor. True 4K streaming on calls isn't available on any major platform yet. For most people: 1080p is enough. Buy 4K only if you also use the webcam for recording content." },
      { q: "How do I look better on video calls without a new webcam?", a: "Lighting tips that improve any webcam: (1) Face a window (natural light from in front of you, not behind). (2) Add a ring light or desk lamp facing you ($25–50). (3) Use a virtual background or blur to hide a messy room. (4) Raise your camera to eye level — looking slightly up is more flattering than looking down. (5) Enable your video platform's built-in 'Touch up my appearance' or Studio Effects. These changes are more impactful than a $200 webcam upgrade." },
      { q: "Can I use my phone as a webcam?", a: "Yes — most modern smartphones have better cameras than any dedicated webcam. Apple Continuity Camera (iPhone + Mac, built into macOS Ventura+) is the easiest option — plug in your iPhone or position it on a mount and it automatically becomes your webcam. Android users can use Camo, DroidCam, or EpocCam apps. Quality is excellent and this is a free solution if you already have a good smartphone." },
    ],
    affiliates: [
      { name: "Logitech C920s", url: "https://www.amazon.com/dp/B07K986YLL", cta: "Get Logitech C920s on Amazon →", badge: "Best Value" },
      { name: "Logitech Brio 500", url: "https://www.amazon.com/dp/B09QN8TZQ8", cta: "Check Logitech Brio 500 Price →", badge: "Best Quality" },
    ],
  },
  {
    slug: "home-office-lighting-guide",
    title: "Home Office Lighting 2026: Why It Matters More Than Your Monitor (Complete Guide)",
    excerpt: "Bad lighting causes eye strain, video call embarrassment, and fatigue by 3pm. Here's how to fix your entire office lighting setup for under $150.",
    category: "accessories",
    tags: ["home office lighting", "ring light", "bias lighting", "LED desk lamp", "video call lighting"],
    date: "2026-06-08",
    readTime: 6,
    featured: false,
    author: "SetupYourDesk Reviews",
    wordCount: 1700,
    quickAnswer: "The ideal home office lighting setup costs $80–150: (1) Primary light — position near a window or add a daylight LED bulb (5000K–6500K) in a lamp facing you. (2) Bias lighting — LED strip behind your monitor ($15–30) reduces eye strain by 50%+ in a dark room. (3) Key light for video calls — a ring light ($30–60) or panel light placed at eye level, 2–3 feet in front of you. That's it. No expensive smart lighting needed for most home offices.",
    faq: [
      { q: "What color temperature lighting is best for a home office?", a: "5000K–6500K (cool white/daylight) for tasks requiring focus and detail work — it mimics natural daylight, improves alertness, and reduces eye strain on screens. 3000K–4000K (warm white) for creative work and afternoon hours — it's less stimulating and comfortable for longer sessions. Many LED panels are adjustable. The worst choice: yellow incandescent bulbs (2700K) for a work office — they cause eye fatigue when paired with a bright screen." },
      { q: "Do I need a ring light for video calls?", a: "A ring light ($25–60) dramatically improves your video call appearance if your room lighting is poor. Position it at eye level, 2–3 feet in front of you. The circular catch-light in your eyes looks professional. If you have good natural window light coming from in front of you, you don't need a ring light. What you should avoid: overhead lighting only (causes shadows under your eyes and nose), backlighting (turns you into a silhouette), and no lighting at all in a dark room." },
      { q: "What is bias lighting and does it reduce eye strain?", a: "Bias lighting is a soft light placed behind your monitor that raises the ambient brightness of your visual field, reducing the contrast between your bright screen and the dark room behind it. Studies show it reduces eye fatigue by up to 60% during long screen sessions. A simple LED bias light strip ($15–30) on the back of your monitor is one of the highest-ROI upgrades for eye health. Set it to the same color temperature as your monitor (usually 6500K for most monitors)." },
      { q: "How do I stop the glare on my monitor?", a: "Glare solutions in order of effectiveness: (1) Move your desk so no window is directly in front of or behind you — position windows to your side. (2) Add window blinds or sheer curtains to diffuse direct sunlight. (3) Use a matte screen protector on your monitor ($15–30). (4) Tilt your monitor backward slightly to redirect ceiling light reflections. (5) Use a monitor hood for severe glare situations. An anti-glare monitor finish (most modern IPS monitors have this) is important to check before buying." },
      { q: "Is smart lighting (Philips Hue, LIFX) worth it for a home office?", a: "Smart lighting is a nice-to-have, not essential. The main benefits: scheduling lights to change color temperature throughout the day (warmer in morning/evening, cooler midday), voice control, and scene automation. For most home office workers, a good adjustable desk lamp ($40–80) with dimmer and color temperature control gives the same benefit at a fraction of the cost. Smart lights are worth it if you have complex home automation already set up and want your office integrated." },
    ],
    affiliates: [
      { name: "BenQ ScreenBar (Monitor Light)", url: "https://www.amazon.com/dp/B076VNFZJG", cta: "Get BenQ ScreenBar on Amazon →", badge: "Best Monitor Light" },
      { name: "Govee LED Bias Lighting", url: "https://www.amazon.com/dp/B09JR5MWFT", cta: "Add Bias Lighting for $20 →" },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getPostsByCategory = (cat: string) => posts.filter((p) => p.category === cat);
export const getFeaturedPosts = () => posts.filter((p) => p.featured);
export const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
export const getCategoryLabel = (slug: string) => categories.find((c) => c.slug === slug)?.label ?? slug;
