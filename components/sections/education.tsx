import React from "react";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Foundational studies in Computer Engineering focusing on software engineering, data structures, and algorithms."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 sm:p-8 shadow-sm hover:border-violet-500/40 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                      Bachelor of Engineering
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/90 px-3.5 py-1.5 rounded-full w-fit sm:self-start">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-violet-500 shrink-0" />
                  <span>Curriculum: Core Computer Science &amp; Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet-500 shrink-0" />
                  <span>Focus: Data Structures, Algorithms &amp; Web Systems</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
