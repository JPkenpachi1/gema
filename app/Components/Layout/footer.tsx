import Link from "next/link";
import pagesData from "@/app/data/pages.json";

// Same source of truth as the navbar — Services links come straight from the JSON
const serviceLinks = (pagesData as { title: string; slug: string }[]).map(
  (page) => ({
    title: page.title,
    slug: page.slug,
  })
);

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@swadesqms.com",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[.06] bg-gray-100 text-gray-600 transition-colors duration-300 dark:border-white/[.08] dark:bg-gray-900 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-primary transition-colors duration-300 dark:text-secondary"
            >
              GEMA
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Professional consulting and training in Quality, OH&S, Six Sigma
              and Lean — helping organizations achieve operational excellence.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[.08] bg-white text-gray-500 transition-colors duration-200 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/[.10] dark:bg-gray-800 dark:text-gray-400 dark:hover:border-indigo-600 dark:hover:text-indigo-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column — dynamic from JSON, scrollable when long */}
          <div className="col-span-1">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-white">
              Services
            </h3>

            <nav
              aria-label="Services"
              className="max-h-48 space-y-3 overflow-y-auto pr-2
                         [-ms-overflow-style:none] [scrollbar-width:thin]
                         [scrollbar-color:theme(colors.gray.300)_transparent]
                         dark:[scrollbar-color:theme(colors.gray.600)_transparent]"
            >
              {serviceLinks.map((page) => (
                <Link
                  key={page.slug}
                  href={`/services/${page.slug}`}
                  className="block text-sm text-gray-500 transition-colors duration-200 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  {page.title}
                </Link>
              ))}

              
            </nav>
          </div>

          {/* Company + Legal Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors duration-200 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[.06] pt-8 sm:flex-row dark:border-white/[.08]">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} GEMA. All rights reserved.
          </p>

          <p className="text-xs text-gray-400 dark:text-gray-500">
            ISO 9001 · ISO 14001 · ISO 45001 · Six Sigma · Lean
          </p>
        </div>

      </div>
    </footer>
  );
}