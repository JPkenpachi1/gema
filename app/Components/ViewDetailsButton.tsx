"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ViewDetailsButton() {
  const handleClick = () => {
    const target = document.getElementById("timeline");
    if (!target) return;

    gsap.to(window, {
      duration: 1.4,
      scrollTo: { y: target, offsetY: 24, autoKill: true },
      ease: "power3.inOut",
    });

    gsap.fromTo(
      target.querySelectorAll(".timeline-card"),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, delay: 0.6, ease: "power2.out" }
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-blue-100 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-400 dark:hover:bg-blue-950"
    >
      View Details
    </button>
  );
}