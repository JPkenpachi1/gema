"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const CheckPage = () => {
  const timelineRef = useRef<HTMLElement>(null);

  // Training Benefits
  const benefits = [
    "Understanding the concept of DMAIC Approach",
    "Overview of Six Sigma Tools",
    "Project Team Approach",
    "Reduce Process Variation",
    "Graphical and Statistical Techniques",
    "Exceed Customer Expectation",
    "Six Sigma Organisation",
  ];

  // Timeline items: Training Content, Methodology, Who Should Attend
  const timelineItems = [
    {
      id: 1,
      title: "Training Content",
      description:
        "A structured walkthrough of the Six Sigma body of knowledge, from its origins to the DMAIC problem-solving methodology.",
      points: [
        "History of Six Sigma",
        "Six Sigma Overview",
        "DMAIC - A Logical Approach to Problem Solving",
        "Overview of Tools used in Define Phase",
        "Overview of Tools used in Measure Phase",
        "Overview of Tools used in Analyze Phase",
        "Overview of Tools used in Improve Phase",
        "Overview of Tools used in Control Phase",
      ],
    },
    {
      id: 2,
      title: "Training Methodology",
      description:
        "The course is delivered through an engaging mix of instruction, discussion, and assessment.",
      points: [
        "Presentation",
        "Interactive Session",
        "Q&A Session",
        "Written Examination",
      ],
    },
    {
      id: 3,
      title: "Who Should Attend",
      description:
        "This course is ideal for anyone looking to build a solid foundation in Six Sigma concepts.",
      points: [
        "Managers & Project Sponsors",
        "Six Sigma Trainees",
        "Six Sigma Practitioners",
        "Students or any Professionals who wants to understand Six Sigma Concept",
      ],
    },
  ];

  const handleViewDetails = () => {
    if (!timelineRef.current) return;

    gsap.to(window, {
      duration: 1.4,
      scrollTo: {
        y: timelineRef.current,
        offsetY: 24,
        autoKill: true,
      },
      ease: "power3.inOut",
    });

    gsap.fromTo(
      timelineRef.current.querySelectorAll(".timeline-card"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.6,
        ease: "power2.out",
      }
    );
  };

  return (
    <main className="min-h-screen w-full bg-white text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white transition-colors duration-300 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-60 blur-3xl dark:bg-blue-950/40 dark:opacity-30" />
          <div className="absolute -bottom-20 -left-20 h-[350px] w-[350px] rounded-full bg-indigo-100 opacity-40 blur-3xl dark:bg-indigo-950/40 dark:opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2">
                <span
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                <span
                  className="text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-primary)" }}
                >
                  Training
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-5xl lg:text-6xl">
                Six Sigma Awareness Training
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 transition-colors duration-300 dark:text-gray-300">
                Six Sigma Awareness course is designed to understand the Six
                Sigma process, overview of an DMAIC structured problem solving
                methodology, potential benefits of applying to your industry,
                set of tools to drive the process improvements and metrics.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Contact Us
                </a>
                <button
                  type="button"
                  onClick={handleViewDetails}
                  className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-blue-100 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400 dark:hover:bg-blue-950"
                >
                  View Details
                </button>
              </div>
            </div>

            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-400 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-500">
              No image available
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="border-b border-slate-200 bg-white transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <h2 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white sm:text-3xl">
            Training Benefits
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
              >
                <span
                  className="mt-0.5 shrink-0 text-sm font-semibold text-blue-600 dark:text-blue-400"
                  style={{ color: "var(--color-primary)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-slate-700 transition-colors duration-300 dark:text-gray-300">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline: Content, Methodology, Audience */}
      <section
        id="timeline"
        ref={timelineRef}
        className="bg-slate-50 transition-colors duration-300 dark:bg-gray-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="mb-12 max-w-3xl">
            <span
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--color-primary)" }}
            >
              Course Details
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white sm:text-4xl">
              Training content, methodology and audience
            </h2>
          </div>

          <div className="relative space-y-8">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-200 transition-colors duration-300 dark:bg-gray-700 md:block" />

            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className="timeline-card relative grid gap-4 md:grid-cols-[40px_1fr]"
              >
                {/* Desktop number marker */}
                <div className="hidden md:flex">
                  <div
                    className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/40 bg-blue-600 text-xs font-semibold text-white shadow-lg dark:border-blue-500/30"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900">
                  {/* Mobile number marker */}
                  <div className="flex items-start gap-4 md:hidden">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-600 text-xs font-semibold text-white dark:border-blue-500/30"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <h3 className="hidden text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white md:block">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-slate-700 transition-colors duration-300 dark:text-gray-300">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-3 text-slate-700 transition-colors duration-300 dark:text-gray-300"
                      >
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500"
                          style={{ backgroundColor: "var(--color-primary)" }}
                        />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckPage;