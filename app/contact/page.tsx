"use client";

import React, { useState } from "react";
import Link from "next/link";

const trainingCourses = [
  "Six Sigma Awareness",
  "Six Sigma Green Belt",
  "Six Sigma Black Belt",
  "ISO 9001:2015 Lead Auditor",
  "IATF 16949 Training",
  "AS 9100D Aerospace Quality",
  "Lean Manufacturing",
  "Custom Corporate Training",
];

const contactInfo = [
  {
    title: "Call & WhatsApp",
    lines: ["+966 55 123 4567", "+966 55 987 6543"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Working Hours",
    lines: ["Sunday – Thursday: 8am – 5pm", "Friday & Saturday: Closed"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Write to Us",
    lines: ["info@yourcompany.com", "training@yourcompany.com"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    date: "",
    participants: 1,
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "participants" ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your API call, e.g.:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });

    await new Promise((r) => setTimeout(r, 1200)); // simulate request

    setLoading(false);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-500 dark:focus:bg-gray-900 dark:focus:ring-blue-950";

  return (
    <main className="min-h-screen w-full bg-white text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white transition-colors duration-300 dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-blue-100 opacity-60 blur-3xl dark:bg-blue-950/40 dark:opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12 lg:pt-20">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <span
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--color-primary)" }}
              >
                Get In Touch
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Contact Us
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500 dark:text-gray-400 lg:text-right">
              Tell us which training program you&apos;re interested in and
              we&apos;ll confirm availability and a custom quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Form + Image Card ─── */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 p-10 text-center transition-colors duration-300 dark:border-blue-900 dark:bg-blue-950/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}>
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-6 text-2xl font-semibold">Request Received!</h2>
                <p className="mt-3 max-w-md text-slate-600 dark:text-gray-300">
                  Thanks, {form.name.split(" ")[0] || "there"}! Our training
                  coordinators will reach out within 24 hours to confirm your{" "}
                  <span className="font-medium">{form.course || "training"}</span>{" "}
                  booking.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      course: "",
                      date: "",
                      participants: 1,
                      company: "",
                      message: "",
                    });
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-medium text-blue-700 transition-all hover:-translate-y-0.5 dark:border-blue-800 dark:bg-gray-900 dark:text-blue-400"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Full Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Ahmed Al-Rashid"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Phone / WhatsApp <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+966 55 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  {/* Course select */}
                  <div>
                    <label htmlFor="course" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Training Program <span className="text-blue-500">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={form.course}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer ${form.course === "" ? "text-slate-400 dark:text-gray-500" : ""}`}
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      {trainingCourses.map((course) => (
                        <option key={course} value={course} className="text-slate-900 dark:text-white">
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred date */}
                  <div>
                    <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Preferred Start Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer [color-scheme:light] dark:[color-scheme:dark]`}
                    />
                  </div>

                  {/* Participants */}
                  <div>
                    <label htmlFor="participants" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Number of Participants
                    </label>
                    <input
                      id="participants"
                      name="participants"
                      type="number"
                      min={1}
                      max={500}
                      value={form.participants}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  {/* Company */}
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="e.g. Saudi Manufacturing Co."
                      value={form.company}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-gray-300">
                      Message / Special Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your team, goals, or any specific requirements..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex min-h-[48px] cursor-pointer items-center gap-3 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Reserve Your Spot
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Image card — sticky on desktop */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white"
                style={{ background: "linear-gradient(135deg, var(--color-primary), #3730a3)" }}>
                <div className="px-8 text-center">
                  <svg className="mx-auto h-16 w-16 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="mt-4 text-sm font-medium text-white/70">
                    Training Facility
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Replace with your facility image
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-lg backdrop-blur-sm dark:bg-gray-900/90 dark:text-blue-400">
                Response within 24h
              </div>

              {/* Bottom caption */}
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/90 p-4 backdrop-blur-sm transition-colors duration-300 dark:bg-gray-900/90">
                <p className="text-sm font-semibold">On-site & In-house Training</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-gray-400">
                  We deliver programs at your facility anywhere in the Kingdom, or at our Riyadh training center.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── Info Cards ─── */}
      <section className="border-t border-slate-200 bg-slate-50 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
              >
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400"
                  style={{ color: "var(--color-primary)" }}
                >
                  {info.icon}
                </div>
                <h3 className="mt-4 font-semibold">{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p
                    key={i}
                    className="mt-1.5 text-sm text-slate-600 transition-colors duration-300 dark:text-gray-400"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
