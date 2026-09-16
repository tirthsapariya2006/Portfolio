"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle2,
  ExternalLink,
  Cpu,
  GitBranch,
  Layers,
  Zap,
  Flame,
  Award,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeetcodeIcon } from "@/components/ui/social-icons";
import { portfolioData } from "@/data/portfolio";

interface TopicCategory {
  name: string;
  count: string;
  icon: React.ElementType;
  description: string;
  highlight: string;
}

const TOPIC_CATEGORIES: TopicCategory[] = [
  {
    name: "Arrays, Strings & Two Pointers",
    count: "Core Foundation",
    icon: Layers,
    description: "Sliding window, two pointers, prefix sums, and hash map lookups.",
    highlight: "O(1) lookups & space-efficient algorithms",
  },
  {
    name: "Trees & Binary Search",
    count: "Hierarchical Structures",
    icon: GitBranch,
    description: "Binary search trees, level-order traversals (BFS/DFS), and balanced recursion.",
    highlight: "Logarithmic time complexity optimizations",
  },
  {
    name: "Dynamic Programming & Recursion",
    count: "Optimization",
    icon: Zap,
    description: "State-memoization, tabulation, subproblem overlap, and greedy strategies.",
    highlight: "Eliminating exponential bottlenecks",
  },
  {
    name: "Linked Lists & Queues / Stacks",
    count: "Sequential Data",
    icon: Cpu,
    description: "Pointer manipulation, cycle detection (Floyd's), and monotonic stack techniques.",
    highlight: "Robust pointer safety & boundary handling",
  },
];

const PROBLEM_APPROACH = [
  {
    step: "01",
    title: "Deconstruct & Analyze Constraints",
    desc: "Carefully study input limits (N <= 10^5) to deduce required time/space complexity before writing a line.",
  },
  {
    step: "02",
    title: "Optimal Strategy & Edge Cases",
    desc: "Brainstorm brute-force, transition to optimal data structure, and map boundary cases (empty, duplicates, overflow).",
  },
  {
    step: "03",
    title: "Clean, Production-Grade Code",
    desc: "Implement self-documenting code with meaningful variable naming and verified time/space complexity bounds.",
  },
];

export function ProblemSolving() {
  const leetcodeLink =
    portfolioData.socials.find((s) => s.name.toLowerCase() === "leetcode")?.url ||
    "https://leetcode.com/u/tirthsapariya/";

  return (
    <section id="problem-solving" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Algorithmic Foundations & DSA"
          title="Problem Solving & Coding Activity"
          description="Strengthening computational thinking, data structure patterns, and algorithmic problem-solving."
        />

        {/* Top Highlight Banner: LeetCode Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-amber-500/20 dark:border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-zinc-900/50 to-zinc-900/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-12"
        >
          {/* Subtle decoration */}
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* LeetCode Profile Overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-md">
                  <LeetcodeIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                      LeetCode Profile
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      <Flame className="w-3 h-3" /> Active Learner
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    Handle: <span className="font-mono text-zinc-900 dark:text-zinc-200">@tirthsapariya</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                Continuously sharpening algorithmic skills and exploring optimized time-space complexity trade-offs across classic data structures and modern programming challenges.
              </p>

              <div className="pt-1">
                <a
                  href={leetcodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 shadow-sm hover:shadow transition-all group"
                >
                  <LeetcodeIcon className="w-4 h-4 text-amber-500" />
                  <span>Explore LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                </a>
              </div>
            </div>

            {/* Problem Distribution Metrics */}
            <div className="lg:col-span-5 bg-white/70 dark:bg-zinc-950/70 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 p-5 space-y-3.5 shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2.5">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Core Problem Competencies</span>
                </span>
                <span className="font-mono text-[11px] text-zinc-500">DSA Track</span>
              </div>

              {/* Progress bars */}
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-emerald-600 dark:text-emerald-400">Easy (Foundations & Syntax)</span>
                    <span className="text-zinc-500 font-mono text-[11px]">Solid Mastery</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-amber-600 dark:text-amber-400">Medium (Core DSA & Optimization)</span>
                    <span className="text-zinc-500 font-mono text-[11px]">Active Focus</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[65%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-rose-600 dark:text-rose-400">Hard (Advanced Patterns)</span>
                    <span className="text-zinc-500 font-mono text-[11px]">Continuous Growth</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Structure Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {TOPIC_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-5 flex flex-col justify-between hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:scale-105 transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
                      {cat.count}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition">
                    {cat.name}
                  </h4>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{cat.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Algorithmic Methodology / Problem Solving Flow */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-sky-500" />
            <h4 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
              My Problem-Solving Methodology
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEM_APPROACH.map((item) => (
              <div key={item.step} className="space-y-2 relative">
                <span className="text-2xl font-extrabold font-mono text-amber-500/40 dark:text-amber-500/30">
                  {item.step}
                </span>
                <h5 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h5>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
