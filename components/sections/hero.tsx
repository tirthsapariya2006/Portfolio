"use client";

import React from "react";
import { ArrowRight, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/social-icons";

export function Hero() {
  const { personal, socials, siteConfig } = portfolioData;

  const socialIcons: Record<string, React.ReactNode> = {
    github: <GithubIcon className="w-4 h-4" />,
    linkedin: <LinkedinIcon className="w-4 h-4" />,
    code: <LeetcodeIcon className="w-4 h-4" />,
  };

  const coreTech = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4rem)] flex items-center justify-center pt-16 sm:pt-18 pb-4 sm:pb-6 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/15 to-violet-500/20 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-6">
        <div className="space-y-4 sm:space-y-5 flex flex-col items-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/25 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>FULL-STACK DEVELOPER</span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span className="text-zinc-600 dark:text-zinc-400 normal-case font-medium">
              {personal.status}
            </span>
          </motion.div>

          {/* Main Heading & Secondary Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="gradient-text-primary">
                {personal.name}.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-200 leading-snug">
              Building responsive, scalable &amp; user-focused web experiences.
            </p>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed"
          >
            Developing clean, efficient, and user-friendly digital solutions with technologies like{" "}
            <span className="text-zinc-900 dark:text-white font-semibold">React.js</span>,{" "}
            <span className="text-zinc-900 dark:text-white font-semibold">Node.js</span>, and{" "}
            <span className="text-zinc-900 dark:text-white font-semibold">MongoDB</span>.
          </motion.p>

          {/* Core Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-0.5"
          >
            {coreTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-medium text-zinc-800 dark:text-zinc-200 bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-1"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 hover:from-sky-600 hover:to-violet-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.resumePath}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <FileDown className="w-4 h-4 text-sky-500 dark:text-sky-400" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2.5 pt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400"
          >
            <span className="font-medium mr-1 text-xs sm:text-sm">Find me on:</span>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} profile`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 hover:border-sky-500/40 hover:text-sky-500 dark:hover:text-sky-400 transition text-xs sm:text-sm font-medium"
              >
                {socialIcons[social.icon]}
                <span className="text-zinc-700 dark:text-zinc-300">
                  {social.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
