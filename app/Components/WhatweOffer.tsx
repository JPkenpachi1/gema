'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';

const cards = [
  {
    title: 'ISO 9001 Consulting',
    description: 'Complete implementation guide for quality management systems in manufacturing.',
   
  },
  {
    title: 'IATF 16949 Training',
    description: 'Automotive quality standards training tailored for your production team.',
  
  },
  {
    title: 'Six Sigma Workshops',
    description: 'Data-driven process improvement programs from Yellow Belt to Black Belt.',
    
  },
  {
    title: 'AS 9100D Auditing',
    description: 'Aerospace quality management auditing and gap analysis services.',
  
  },
  {
    title: 'Lean Manufacturing',
    description: 'Eliminate waste and optimize flow with proven lean methodology.',
  
  },
  {
    title: 'Process Excellence',
    description: 'End-to-end operational excellence strategy for businesses of any size.',
  
  },
];

export default function WhatWeOffer() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    gsap.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8
                        bg-white dark:bg-gray-950
                        transition-colors duration-300">

      {/* ─── Section Heading ─── */}
      <div className="text-center mb-12 sm:mb-16">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </span>
          <span className="h-px w-8 bg-primary" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold
                       text-gray-900 dark:text-white
                       leading-tight tracking-tight
                       transition-colors duration-300">
          What We <span className="text-primary">Offer</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-secondary max-w-xl mx-auto">
          World-class consulting and training programs to drive operational excellence.
        </p>
      </div>

      {/* ─── Cards Grid ─── */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="group relative flex flex-col
                         rounded-2xl border border-gray-200 dark:border-gray-800
                         bg-white dark:bg-gray-900
                         p-6 sm:p-7
                         shadow-sm hover:shadow-lg hover:shadow-primary/10
                         hover:border-primary/40 dark:hover:border-primary/40
                         transition-shadow transition-colors duration-300
                         will-change-transform"
            >
              {/* Card Number */}
              <span className="text-xs font-bold text-gray-500
                               uppercase tracking-widest mb-4 block">
                0{index + 1}
              </span>

              {/* Icon */}
            

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold
                             text-gray-900 dark:text-white mb-3
                             group-hover:text-primary
                             transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-secondary
                             leading-relaxed flex-1">
                {card.description}
              </p>

              {/* Bottom accent line — CSS only, no JS needed */}
              
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}