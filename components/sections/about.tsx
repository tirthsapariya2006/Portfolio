import React from "react";
import { Briefcase, GraduationCap, Sparkles, Code2, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const { personal, education } = portfolioData;

  const highlights = [
    "Developing responsive and scalable web applications",
    "Writing clean, modular and maintainable code",
    "Integrating full-stack stacks with React, Node.js and MongoDB",
    "Constantly exploring emerging tools and best practices",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Background"
          title="About Me"
          description="A look into my journey, core technical philosophy, and hands-on experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-sky-500" />
                <span>Engineering Scalable &amp; User-Focused Web Solutions</span>
              </h3>

              <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
                {personal.bio}
              </p>

              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Key Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Profile Card & Experience Metric */}
          <div className="lg:col-span-5 space-y-4">
            {/* Experience Metric Card */}
            <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/5 via-indigo-500/5 to-violet-500/5 dark:from-sky-500/10 dark:via-indigo-500/10 dark:to-transparent p-6 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
                    3 Months
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    Web Development Internship Experience
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-zinc-200/60 dark:border-zinc-800/60 pt-3">
                Practical, real-world experience contributing to web-based applications at SPARK DIGISHINE.
              </p>
            </div>

            {/* Education Summary Card */}
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 p-6 backdrop-blur-md space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    {education[0].degree}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {education[0].institution} • {education[0].duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Status / Philosophy */}
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 p-5 backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 block">
                  Continuous Learning Mindset
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Actively mastering new technologies to build better, high-impact products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
