import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work History"
          title="Experience"
          description="Professional practical experience contributing to web development and engineering projects."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-10">
            {experience.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-zinc-950 border-2 border-sky-500 flex items-center justify-center text-sky-500 shadow-md">
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 sm:p-7 shadow-sm hover:border-sky-500/40 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
                        {item.company}
                      </span>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 items-center pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mr-1">
                      Applied Tech:
                    </span>
                    {item.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        size="sm"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
