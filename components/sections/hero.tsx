"use client";

import React from "react";
import { ArrowRight, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { TechMetricsCard } from "@/components/ui/tech-metrics-card";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/social-icons";

export function Hero() {
  const { personal, socials, siteConfig } = portfolioData;

  const socialIcons: Record<string, React.ReactNode> = {
    github: <GithubIcon className="w-4 h-4" />,
    linkedin: <LinkedinIcon className="w-4 h-4" />,
    code: <LeetcodeIcon className="w-4 h-4" />,
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-violet-500/15 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Intro & Call-to-Actions */}
          <div className="lg:col-span-7 space-y-3.5 text-center lg:text-left">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>FULL-STACK DEVELOPER</span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="text-zinc-600 dark:text-zinc-400 normal-case font-normal">
                {personal.status}
              </span>
            </motion.div>

            {/* Main Heading & Secondary Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="gradient-text-primary">
                  {personal.name}.
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 leading-snug">
                Building responsive, scalable &amp; user-focused web experiences.
              </p>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Developing clean, efficient, and user-friendly digital solutions with technologies like{" "}
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">React.js</span>,{" "}
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">Node.js</span>, and{" "}
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">MongoDB</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 hover:from-sky-600 hover:to-violet-700 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.resumePath}
                download
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <FileDown className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-zinc-500 dark:text-zinc-400"
            >
              <span className="font-medium mr-1">Find me on:</span>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} profile`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 hover:border-sky-500/40 hover:text-sky-500 dark:hover:text-sky-400 transition"
                >
                  {socialIcons[social.icon]}
                  <span className="font-medium text-xs text-zinc-700 dark:text-zinc-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Tech & Metrics Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TechMetricsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
