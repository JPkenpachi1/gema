import { notFound } from "next/navigation";
import Image from "next/image";
import ViewDetailsButton from "@/app/Components/ViewDetailsButton";
import { getAllSlugs, getPage } from "@/app/lib/pages";



export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-white text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white transition-colors duration-300 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-100 opacity-60 blur-3xl dark:bg-blue-950/40 dark:opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--color-primary)" }}
              >
                Training
              </span>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>

              {page.subtitle ? (
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 transition-colors duration-300 dark:text-gray-300">
                  {page.subtitle}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Contact Us
                </a>
                {(page.timeline_items?.length ?? 0) > 0 ? (
                  <ViewDetailsButton />
                ) : null}
              </div>
            </div>

            <div>
              {page.image ? (
                <Image
                  src={page.image}
                  alt={page.title}
                  width={1200}
                  height={900}
                  className="h-full w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-xl transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
                  priority
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-400 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-500">
                  No image available
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Points */}
      {(page.points?.length ?? 0) > 0 ? (
        <section className="border-b border-slate-200 bg-white transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <h2 className="text-2xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white sm:text-3xl">
              Training Benefits
            </h2>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {page.points!.map((point, index) => (
                <li
                  key={`${page.slug}-point-${index}`}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
                >
                  <span
                    className="mt-0.5 shrink-0 text-sm font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed text-slate-700 transition-colors duration-300 dark:text-gray-300">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Timeline */}
      {(page.timeline_items?.length ?? 0) > 0 ? (
        <section
          id="timeline"
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

              {page.timeline_items!.map((item, index) => (
                <div
                  key={`${page.slug}-item-${index}`}
                  className="timeline-card relative grid gap-4 md:grid-cols-[40px_1fr]"
                >
                  <div className="hidden md:flex">
                    <div
                      className="z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white shadow-lg"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-start gap-4 md:hidden">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
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

                    {item.description ? (
                      <p className="mt-3 text-base leading-relaxed text-slate-700 transition-colors duration-300 dark:text-gray-300">
                        {item.description}
                      </p>
                    ) : null}

                    {(item.points?.length ?? 0) > 0 ? (
                      <ul className="mt-5 space-y-3">
                        {item.points!.map((point, pointIndex) => (
                          <li
                            key={`${page.slug}-item-${index}-point-${pointIndex}`}
                            className="flex items-start gap-3 text-slate-700 transition-colors duration-300 dark:text-gray-300"
                          >
                            <span
                              className="mt-2 h-2 w-2 shrink-0 rounded-full"
                              style={{ backgroundColor: "var(--color-primary)" }}
                            />
                            <span className="leading-relaxed">{point.text}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}