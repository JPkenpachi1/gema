'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowRight, ExternalLink } from 'lucide-react';

const tabs = [
  { id: 'consulting', label: 'Consulting' },
  { id: 'training', label: 'Training' },
  { id: 'auditing', label: 'Auditing' },
  { id: 'workshops', label: 'Workshops' },
];

const tabContent: Record<string, {
  title: string;
  description: string;
  href: string;
  cta: string;
  tag: string;
}[]> = {
  consulting: [
    {
      title: 'ISO 9001 Strategy',
      description: 'Full gap analysis and implementation roadmap for quality management systems.',
      href: '/consulting/iso-9001',
      cta: 'Explore Service',
      tag: 'Most Popular',
    },
    {
      title: 'IATF 16949 Implementation',
      description: 'End-to-end consulting for automotive quality compliance and certification.',
      href: '/consulting/iatf',
      cta: 'Learn More',
      tag: 'Automotive',
    },
    {
      title: 'AS 9100D Compliance',
      description: 'Aerospace quality management systems tailored for your production line.',
      href: '/consulting/as9100d',
      cta: 'Get Started',
      tag: 'Aerospace',
    },
  ],
  training: [
    {
      title: 'Six Sigma Green Belt',
      description: 'Hands-on training for process improvement and statistical analysis.',
      href: '/training/green-belt',
      cta: 'Enroll Now',
      tag: 'Certification',
    },
    {
      title: 'Lean Fundamentals',
      description: 'Core lean principles, waste elimination, and value stream mapping.',
      href: '/training/lean',
      cta: 'View Course',
      tag: 'Beginner',
    },
    {
      title: 'Internal Auditor Training',
      description: 'Become a certified internal auditor for ISO and IATF standards.',
      href: '/training/auditor',
      cta: 'Join Program',
      tag: 'Advanced',
    },
  ],
  auditing: [
    {
      title: 'Supplier Audits',
      description: 'Thorough supplier qualification audits to ensure supply chain compliance.',
      href: '/auditing/supplier',
      cta: 'Request Audit',
      tag: 'On-site',
    },
    {
      title: 'Process Audits',
      description: 'Identify process gaps and non-conformances before certification.',
      href: '/auditing/process',
      cta: 'Book Now',
      tag: 'Remote Available',
    },
    {
      title: 'System Audits',
      description: 'Full management system audits aligned with international standards.',
      href: '/auditing/system',
      cta: 'Get a Quote',
      tag: 'Comprehensive',
    },
  ],
  workshops: [
    {
      title: 'Kaizen Workshop',
      description: 'Intensive 2-day workshop on continuous improvement culture and methods.',
      href: '/workshops/kaizen',
      cta: 'Register',
      tag: '2 Days',
    },
    {
      title: '5S Implementation',
      description: 'Practical workplace organization workshop for manufacturing floors.',
      href: '/workshops/5s',
      cta: 'Sign Up',
      tag: 'Hands-on',
    },
    {
      title: 'FMEA Deep Dive',
      description: 'Risk analysis and failure mode workshop for product and process teams.',
      href: '/workshops/fmea',
      cta: 'Join Workshop',
      tag: 'Technical',
    },
  ],
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('consulting');
  const cardsRef = useRef<HTMLDivElement>(null);
  const tabIndicatorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const cardItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate tab indicator on mount
  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeTab);
    const activeBtn = tabsRef.current[activeIndex];
    if (!tabIndicatorRef.current || !activeBtn) return;

    gsap.to(tabIndicatorRef.current, {
      x: activeBtn.offsetLeft,
      width: activeBtn.offsetWidth,
      duration: 0.35,
      ease: 'power2.out',
    });
  }, [activeTab]);

  // Animate cards on tab switch
  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;

    // Animate cards out
    gsap.to(cardItemRefs.current, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      stagger: 0.05,
      ease: 'power2.in',
      onComplete: () => {
        setActiveTab(tabId);
        // Animate cards in after state updates
        requestAnimationFrame(() => {
          gsap.fromTo(
            cardItemRefs.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: 'power3.out',
            }
          );
        });
      },
    });
  };

  // Animate cards in on first mount
  useEffect(() => {
    gsap.fromTo(
      cardItemRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, []);

  // Card hover animations
  const handleCardEnter = (index: number) => {
    const card = cardItemRefs.current[index];
    if (!card) return;
    gsap.to(card, {
      y: -6,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleCardLeave = (index: number) => {
    const card = cardItemRefs.current[index];
    if (!card) return;
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const currentCards = tabContent[activeTab];

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8
                        bg-surface dark:bg-gray-950
                        transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* ─── Section Header ─── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Explore
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold
                         text-gray-900 dark:text-white
                         leading-tight tracking-tight">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-xl mx-auto">
            Choose a category to explore our full range of services and programs.
          </p>
        </div>

        {/* ─── Tab Navigation ─── */}
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center
                          bg-gray-100 dark:bg-gray-900
                          border border-gray-200 dark:border-gray-800
                          rounded-xl p-1 gap-1">

            {/* Sliding indicator */}
            <div
              ref={tabIndicatorRef}
              className="absolute top-1 left-1 h-[calc(100%-8px)]
                         bg-white dark:bg-gray-800
                         rounded-lg shadow-sm
                         pointer-events-none
                         transition-none"
              style={{ width: 0 }}
            />

            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => { tabsRef.current[index] = el; }}
                onClick={() => handleTabChange(tab.id)}
                className={`relative z-10 px-4 sm:px-6 py-2.5
                            text-sm font-semibold rounded-lg
                            transition-colors duration-200
                            whitespace-nowrap cursor-pointer
                            ${activeTab === tab.id
                              ? 'text-primary'
                              : 'text-secondary hover:text-gray-900 dark:hover:text-white'
                            }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Cards Grid ─── */}
        <div ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {currentCards.map((card, index) => (
            <div
              key={`${activeTab}-${index}`}
              ref={(el) => { cardItemRefs.current[index] = el; }}
              onMouseEnter={() => handleCardEnter(index)}
              onMouseLeave={() => handleCardLeave(index)}
              className="group relative flex flex-col
                         bg-white dark:bg-gray-900
                         border border-gray-200 dark:border-gray-800
                         rounded-2xl p-6 sm:p-7
                         shadow-sm hover:shadow-lg hover:shadow-primary/10
                         hover:border-primary/40 dark:hover:border-primary/40
                         transition-shadow transition-colors duration-300
                         will-change-transform"
            >

              {/* Tag Badge */}
              <span className="inline-flex self-start items-center
                               text-xs font-semibold
                               bg-primary-light dark:bg-primary-muted
                               text-primary
                               px-3 py-1 rounded-full mb-5">
                {card.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold
                             text-gray-900 dark:text-white mb-3
                             group-hover:text-primary
                             transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-secondary
                             leading-relaxed flex-1 mb-6">
                {card.description}
              </p>

              {/* CTA Button */}
              <Link
                href={card.href}
                className="inline-flex items-center justify-center gap-2
                           bg-primary hover:bg-primary-hover
                           text-white text-sm font-semibold
                           px-5 py-2.5 rounded-lg
                           transition-all duration-200
                           hover:-translate-y-0.5
                           hover:shadow-md hover:shadow-primary/25
                           group/btn"
              >
                {card.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200
                             group-hover/btn:translate-x-1"
                />
              </Link>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5
                              w-0 group-hover:w-full
                              bg-primary rounded-b-2xl
                              transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="flex flex-col sm:flex-row items-center
                        justify-center gap-4 mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2
                       bg-primary hover:bg-primary-hover
                       text-white font-semibold text-base
                       px-8 py-4 rounded-lg
                       transition-all duration-200
                       hover:-translate-y-0.5
                       hover:shadow-lg hover:shadow-primary/25"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2
                       text-primary hover:text-primary-hover
                       font-semibold text-base
                       underline underline-offset-4
                       transition-colors duration-200"
          >
            Talk to an Expert
            <ExternalLink size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}