import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  return {
    title: `Article — ${slug.replace(/-/g, " ")} | Tirth Sapariya`,
    description: "Read full-stack developer insights and technical notes.",
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;

  // Since no blog posts are published yet, provide a tasteful draft/preview container
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <article className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 sm:p-12 space-y-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
              <span>Article Preview</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 capitalize">
              {slug.replace(/-/g, " ")}
            </h1>

            <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pb-6 border-b border-zinc-200/60 dark:border-zinc-800/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Publication Pending
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Draft
              </span>
            </div>

            <div className="py-8 text-center space-y-3">
              <BookOpen className="w-10 h-10 text-zinc-400 dark:text-zinc-600 mx-auto" />
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                This post is currently in draft status. Follow along on GitHub or check back soon for the full published guide.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
