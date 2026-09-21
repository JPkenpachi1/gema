'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Eye, MessageCircle, Clock, ArrowRight, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────
type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  views: number;
  comments: number;
  date: string;
  image: string;
  featured?: boolean;
};

type Category = {
  label: string;
  count: number;
};

type RecentPost = {
  title: string;
  href: string;
};

// ─────────────────────────────────────────
// DATA — Edit everything here
// ─────────────────────────────────────────
const CATEGORIES: Category[] = [
  { label: 'All',              count: 20 },
  { label: 'Lean Manufacturing', count: 5 },
  { label: 'IATF Core Tools',  count: 6 },
  { label: 'IATF 16949',       count: 4 },
  { label: 'ISO 9001',         count: 1 },
  { label: 'AS 9100D',         count: 1 },
  { label: 'Quality Tools',    count: 3 },
];

const RECENT_POSTS: RecentPost[] = [
  { title: 'PPAP 18 Documents | Requirement | Implementation', href: '/blog/ppap-18-documents' },
  { title: 'What is a Control Chart?',                          href: '/blog/control-chart' },
  { title: 'Failure Mode and Effects Analysis (FMEA): A Complete Guide', href: '/blog/fmea-guide' },
  { title: 'What is Industry 4.0?',                            href: '/blog/industry-4' },
  { title: 'Mastering MTBF, MTTR, MTTF, MTTA & MDT: The Complete Guide', href: '/blog/mtbf-guide' },
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'what-is-industry-4',
    title: 'What is Industry 4.0?',
    excerpt: 'Quality 4.0 refers to the integration of digital technologies with traditional quality management principles to improve efficiency, compliance, and customer satisfaction.',
    category: 'Lean Manufacturing',
    readTime: '5 min read',
    views: 57,
    comments: 0,
    date: 'March 15, 2024',
    image: 'https://picsum.photos/seed/industry4/800/500',
    featured: true,
  },
  {
    id: 2,
    slug: 'kaizen-continuous-improvement',
    title: 'KAIZEN: Building a Culture of Continuous Improvement in Manufacturing',
    excerpt: 'Kaizen is a core principle of manufacturing excellence — a production philosophy focused on maximizing customer value while minimizing waste.',
    category: 'Lean Manufacturing',
    readTime: '7 min read',
    views: 69,
    comments: 0,
    date: 'March 10, 2024',
    image: 'https://picsum.photos/seed/kaizen/600/400',
  },
  {
    id: 3,
    slug: 'lean-manufacturing-principles',
    title: 'Understanding Lean Manufacturing: Principles and Practices',
    excerpt: 'A production philosophy focused on maximizing customer value while minimizing waste. Originated from the Toyota Production System.',
    category: 'Lean Manufacturing',
    readTime: '6 min read',
    views: 108,
    comments: 0,
    date: 'February 28, 2024',
    image: 'https://picsum.photos/seed/lean/600/400',
  },
  {
    id: 4,
    slug: '5s-lean-manufacturing',
    title: '5S in Lean Manufacturing – A Practical Introduction',
    excerpt: '5S is one of the foundational tools of Lean Manufacturing. Learn how Sort, Set, Shine, Standardize and Sustain can transform your workplace.',
    category: 'Lean Manufacturing',
    readTime: '8 min read',
    views: 123,
    comments: 0,
    date: 'February 20, 2024',
    image: 'https://picsum.photos/seed/5stools/600/400',
  },
  {
    id: 5,
    slug: 'kaizen-practical-guide',
    title: 'Kaizen for Continuous Improvement – A Practical Guide',
    excerpt: 'This practical guide walks through implementation strategies for teams of any size, from initial planning to sustained results.',
    category: 'Lean Manufacturing',
    readTime: '9 min read',
    views: 114,
    comments: 0,
    date: 'February 12, 2024',
    image: 'https://picsum.photos/seed/kaizen2/600/400',
  },
  {
    id: 6,
    slug: 'iatf-16949-requirements',
    title: 'IATF 16949: Key Requirements for Automotive Quality',
    excerpt: 'A deep dive into the IATF 16949 standard and what automotive manufacturers need to know to achieve and maintain certification.',
    category: 'IATF 16949',
    readTime: '10 min read',
    views: 95,
    comments: 2,
    date: 'January 30, 2024',
    image: 'https://picsum.photos/seed/iatf16/600/400',
  },
  {
    id: 7,
    slug: 'iso-9001-guide',
    title: 'ISO 9001:2015 – A Complete Implementation Guide',
    excerpt: 'Everything you need to know about implementing ISO 9001:2015 in your organization, from gap analysis to certification audit.',
    category: 'ISO 9001',
    readTime: '12 min read',
    views: 200,
    comments: 4,
    date: 'January 10, 2024',
    image: 'https://picsum.photos/seed/iso9001/600/400',
  },
  {
    id: 8,
    slug: 'control-charts-quality',
    title: 'What is a Control Chart? A Quality Tool Deep Dive',
    excerpt: 'Control charts are essential statistical process control tools. Learn how to read, create, and interpret them for manufacturing quality.',
    category: 'Quality Tools',
    readTime: '6 min read',
    views: 88,
    comments: 1,
    date: 'December 18, 2023',
    image: 'https://picsum.photos/seed/controlchart/600/400',
  },
];

// ─────────────────────────────────────────
// BLOG CARD — Sub-component
// ─────────────────────────────────────────
function BlogCard({ post }: { post: BlogPost }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const onEnter = () => {
    gsap.to(cardRef.current, {
      y: -6,
      scale: 1.015,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power3.out',
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/blog/${post.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group flex flex-col rounded-2xl overflow-hidden
                 border border-gray-200 dark:border-gray-800
                 bg-white dark:bg-gray-900
                 hover:border-primary/40 dark:hover:border-primary/40
                 hover:shadow-lg hover:shadow-primary/10
                 transition-shadow transition-colors duration-300
                 will-change-transform"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover
                     group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={600}
          height={400}
        />
        <span className="absolute top-3 left-3 text-xs font-bold uppercase
                         tracking-wider bg-primary text-white px-2.5 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs text-secondary mb-2">{post.date}</p>
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2
                       group-hover:text-primary transition-colors duration-200
                       line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed line-clamp-2 flex-1 mb-4">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-secondary
                        pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={12} /> {post.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={12} /> {post.comments}
            </span>
          </div>
          <span className="text-primary font-semibold flex items-center gap-1
                           group-hover:gap-2 transition-all duration-200">
            Read <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;

    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        y: 16,
        duration: 0.18,
        stagger: 0.04,
        ease: 'power2.in',
        onComplete: () => {
          setActiveCategory(cat);
          requestAnimationFrame(() => {
            if (gridRef.current) {
              gsap.fromTo(
                gridRef.current.children,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.35, stagger: 0.07, ease: 'power3.out' }
              );
            }
          });
        },
      });
    } else {
      setActiveCategory(cat);
    }
  };

  return (
    <section className="w-full py-16 sm:py-20
                        bg-white dark:bg-gray-950
                        transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Header ─── */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold
                         text-gray-900 dark:text-white
                         tracking-tight leading-tight">
            Resources &{' '}
            <span className="text-primary">Insights</span>
          </h1>
          <p className="mt-3 text-base text-secondary max-w-lg">
            Practical guides, tools, and strategies for manufacturing excellence.
          </p>
        </div>

        {/* ─── Category Filter Pills ─── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryChange(cat.label)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border
                         transition-all duration-200 cursor-pointer
                         ${activeCategory === cat.label
                           ? 'bg-primary text-white border-primary'
                           : 'bg-white dark:bg-gray-900 text-secondary border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                         }`}
            >
              {cat.label}
              <span className={`ml-1.5 text-xs
                ${activeCategory === cat.label ? 'opacity-80' : 'opacity-50'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* ─── Main Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          {/* ── Posts Column ── */}
          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-secondary">
                No posts in this category yet.
              </div>
            ) : (
              <>
                {/* Featured Post */}
                {featured && (
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group block mb-8"
                  >
                    <div className="relative rounded-2xl overflow-hidden
                                    border border-gray-200 dark:border-gray-800
                                    hover:border-primary/40 dark:hover:border-primary/40
                                    hover:shadow-xl hover:shadow-primary/10
                                    transition-all duration-300">
                      {/* Hero image */}
                      <div className="relative h-64 sm:h-80 overflow-hidden">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-full object-cover
                                     group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width={800}
                          height={400}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t
                                        from-black/60 to-transparent" />
                        <span className="absolute top-4 left-4 bg-primary text-white
                                         text-xs font-bold px-3 py-1 rounded-full
                                         uppercase tracking-wider">
                          Featured
                        </span>
                        <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm
                                         text-white text-xs font-semibold px-3 py-1
                                         rounded-full border border-white/30">
                          {featured.category}
                        </span>
                      </div>

                      {/* Featured body */}
                      <div className="p-6 sm:p-8 bg-white dark:bg-gray-900">
                        <p className="text-xs text-secondary mb-2">{featured.date}</p>
                        <h2 className="text-xl sm:text-2xl font-bold
                                       text-gray-900 dark:text-white
                                       group-hover:text-primary
                                       transition-colors duration-200 mb-3">
                          {featured.title}
                        </h2>
                        <p className="text-secondary text-sm sm:text-base
                                      leading-relaxed mb-5 line-clamp-2">
                          {featured.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-secondary">
                            <span className="flex items-center gap-1.5">
                              <Clock size={13} /> {featured.readTime}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Eye size={13} /> {featured.views}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MessageCircle size={13} /> {featured.comments}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-sm
                                           font-semibold text-primary
                                           group-hover:gap-2 transition-all duration-200">
                            Read More <ArrowRight size={15} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Cards Grid */}
                <div
                  ref={gridRef}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {rest.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="flex flex-col gap-8">

            {/* Categories */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800
                            bg-gray-50 dark:bg-gray-900 p-6">
              <h3 className="text-base font-bold text-gray-900 dark:text-white
                             mb-5 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                Categories
              </h3>
              <ul className="space-y-2">
                {CATEGORIES.filter((c) => c.label !== 'All').map((cat) => (
                  <li key={cat.label}>
                    <button
                      onClick={() => handleCategoryChange(cat.label)}
                      className={`w-full flex items-center justify-between
                                 px-3 py-2.5 rounded-lg text-sm font-medium
                                 transition-all duration-200 cursor-pointer
                                 ${activeCategory === cat.label
                                   ? 'bg-primary text-white'
                                   : 'text-secondary hover:bg-primary-light dark:hover:bg-primary-muted hover:text-primary'
                                 }`}
                    >
                      <span className="flex items-center gap-2">
                        <ChevronRight
                          size={14}
                          className={activeCategory === cat.label ? 'text-white' : 'text-primary'}
                        />
                        {cat.label}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full
                                       ${activeCategory === cat.label
                                         ? 'bg-white/20 text-white'
                                         : 'bg-gray-200 dark:bg-gray-700 text-secondary'
                                       }`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800
                            bg-gray-50 dark:bg-gray-900 p-6">
              <h3 className="text-base font-bold text-gray-900 dark:text-white
                             mb-5 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {RECENT_POSTS.map((post, i) => (
                  <li key={i}>
                    <Link
                      href={post.href}
                      className="group flex items-start gap-3 text-sm text-secondary
                                 hover:text-primary transition-colors duration-200"
                    >
                      <span className="mt-0.5 text-xs font-bold text-primary
                                       bg-primary-light dark:bg-primary-muted
                                       w-6 h-6 rounded-full flex items-center
                                       justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="leading-snug group-hover:underline underline-offset-2">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-primary p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Expert Help?</h3>
              <p className="text-sm text-white/80 mb-5 leading-relaxed">
                Book a free consultation with our manufacturing excellence team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary
                           font-semibold text-sm px-5 py-2.5 rounded-lg
                           hover:bg-gray-100 transition-colors duration-200"
              >
                Book Now <ArrowRight size={15} />
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}