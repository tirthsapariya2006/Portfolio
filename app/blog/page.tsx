import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Blog & Articles | Tirth Sapariya",
  description: "Technical writings, full-stack insights, and tutorials by Tirth Sapariya.",
};

export default function BlogPage() {
  const futureTopics = [
    "Full-Stack Web Architecture with Next.js & Node.js",
    "Securing React Apps with Firebase Authentication",
    "Integrating Payment Gateways with Razorpay",
    "Optimizing Database Queries in MongoDB Atlas",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <SectionHeading
            eyebrow="Writings &amp; Thoughts"
            title="Articles &amp; Tech Notes"
            description="Deep dives into full-stack architecture, web development patterns, and lessons learned while building digital products."
          />

          {/* Tasteful Coming Soon Card */}
          <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Writing in Progress — Coming Soon
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I am currently writing technical tutorials and engineering retrospectives based on real projects. Articles will be published here soon.
              </p>
            </div>

            {/* Upcoming topics preview */}
            <div className="max-w-md mx-auto pt-4 text-left border-t border-zinc-200/60 dark:border-zinc-800/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-3 text-center">
                Upcoming Planned Topics
              </span>
              <div className="space-y-2.5">
                {futureTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60"
                  >
                    <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
              >
                <span>Suggest a Topic</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
