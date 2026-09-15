"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FolderGit2,
  Briefcase,
  Layers,
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: string;
  color: string;
  glowColor: string;
  tagline: string;
  description: string;
}

const TECH_STACK: TechItem[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.35)",
    tagline: "Component Architecture",
    description: "Modular components, custom hooks, and seamless UI state synchronization.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-Stack",
    color: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.3)",
    tagline: "App Router & SSR",
    description: "Server-side rendering, optimized page routing, and high-performance builds.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.35)",
    tagline: "Type-Safe Systems",
    description: "Strict compile-time type safety for robust, bug-free, and maintainable codebases.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    color: "#5FA04E",
    glowColor: "rgba(95, 160, 78, 0.35)",
    tagline: "RESTful Services",
    description: "Scalable backend logic, Express routing, and efficient asynchronous workflows.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    color: "#47A248",
    glowColor: "rgba(71, 162, 72, 0.35)",
    tagline: "Document Database",
    description: "Flexible schemas, indexing, aggregation pipelines, and Mongoose modeling.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Design System",
    color: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.35)",
    tagline: "Modern Styling",
    description: "Responsive styling, smooth micro-interactions, and glassmorphism utilities.",
  },
];

// Clean vector logos for key technologies
function TechLogo({ id, color }: { id: string; color: string }) {
  switch (id) {
    case "react":
      return (
        <svg viewBox="0 0 115.3 100" className="w-5 h-5" fill="currentColor" style={{ color }}>
          <ellipse cx="57.6" cy="50" rx="14.3" ry="14.3" />
          <path
            d="M57.6,90.2c25.4,0,46-18,46-40.2s-20.6-40.2-46-40.2s-46,18-46,40.2S32.2,90.2,57.6,90.2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />
          <path
            transform="rotate(60 57.6 50)"
            d="M57.6,90.2c25.4,0,46-18,46-40.2s-20.6-40.2-46-40.2s-46,18-46,40.2S32.2,90.2,57.6,90.2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />
          <path
            transform="rotate(120 57.6 50)"
            d="M57.6,90.2c25.4,0,46-18,46-40.2s-20.6-40.2-46-40.2s-46,18-46,40.2S32.2,90.2,57.6,90.2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" className="w-5 h-5 text-white" fill="currentColor">
          <circle cx="90" cy="90" r="90" fill="#090d16" />
          <path
            d="M149.508 157.501L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.501Z"
            fill="white"
          />
          <path d="M115 54H127V126H115V54Z" fill="white" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path
            d="M72.9 87.2c2.4 2.8 5.7 4.2 9.9 4.2 3.1 0 5.6-.7 7.5-2.2 1.9-1.5 2.8-3.4 2.8-5.8 0-2.1-.8-3.9-2.3-5.3-1.5-1.4-4.2-2.8-8-4.1-5.7-2-9.9-4.2-12.6-6.6-2.7-2.4-4.1-5.8-4.1-10.1 0-4.9 1.8-8.9 5.4-12 3.6-3.1 8.5-4.6 14.6-4.6 4.3 0 8.2.8 11.6 2.4 3.4 1.6 6.1 3.9 8.2 6.8l-7.7 5.7c-3-3.6-6.8-5.4-11.4-5.4-3.1 0-5.5.7-7.2 2-1.7 1.3-2.5 3-2.5 5.1 0 1.9.7 3.5 2.2 4.7 1.5 1.2 4.1 2.5 7.8 3.8 6.1 2.2 10.5 4.6 13.3 7.2 2.8 2.6 4.2 6.2 4.2 10.9 0 5.2-1.9 9.4-5.6 12.6-3.8 3.2-9 4.8-15.7 4.8-5.7 0-10.7-1.2-15-3.6-4.3-2.4-7.5-5.9-9.6-10.5l8.5-5zm-39.7-32.9H15.8V42h44.4v12.3H42.7v49.8H33.2V54.3z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" style={{ color }}>
          <path d="M12 2L2 7.78v11.55L12 25l10-5.67V7.78L12 2zm0 2.29l7.78 4.5-7.78 4.49-7.78-4.49L12 4.29zM4.22 9.68l7.22 4.17v8.34L4.22 18V9.68zm15.56 8.34l-7.22 4.19v-8.34l7.22-4.17v8.32z" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" style={{ color }}>
          <path d="M17.193 9.555c-1.278-4.364-4.46-7.85-4.88-8.303a.586.586 0 0 0-.853 0C11.04 1.705 7.858 5.19 6.58 9.555c-1.572 5.37.585 9.775 1.05 10.655a9.89 9.89 0 0 0 4.15 4.125.59.59 0 0 0 .524 0 9.89 9.89 0 0 0 4.15-4.125c.465-.88 2.622-5.285 1.05-10.655h-.31zM12 22.8c-2.39-1.46-4.59-4.88-4.59-8.49 0-4.04 2.87-7.76 4.59-9.59 1.72 1.83 4.59 5.55 4.59 9.59 0 3.61-2.2 7.03-4.59 8.49z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" style={{ color }}>
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    default:
      return <Layers className="w-5 h-5 text-sky-400" />;
  }
}

export function TechMetricsCard() {
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_STACK[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-[420px] mx-auto group"
    >
      {/* Dynamic Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-violet-500/25 blur-xl pointer-events-none -z-10"
      />

      {/* Main Glassmorphism Container */}
      <div className="relative rounded-2xl bg-zinc-950/85 dark:bg-zinc-950/90 border border-white/10 shadow-xl backdrop-blur-2xl overflow-hidden text-zinc-100 p-4 sm:p-5 transition-all duration-300 hover:border-sky-500/30">
        {/* Top Header: Live Availability Badge */}
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-emerald-400 uppercase">
              Ready For Work
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">
            <Sparkles className="w-2.5 h-2.5 text-sky-400" />
            <span>Full-Stack Engineer</span>
          </div>
        </div>

        {/* Section Label: Interactive Stack */}
        <div className="pt-2.5 pb-1.5 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Core Tech Ecosystem
          </span>
          <span className="text-[10px] text-zinc-400">Click to inspect</span>
        </div>

        {/* Interactive Tech Badge Grid */}
        <div className="grid grid-cols-3 gap-2">
          {TECH_STACK.map((tech) => {
            const isSelected = selectedTech.id === tech.id;
            return (
              <motion.button
                key={tech.id}
                type="button"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTech(tech)}
                style={{
                  boxShadow: isSelected
                    ? `0 0 16px -2px ${tech.glowColor}`
                    : "none",
                }}
                className={`relative flex flex-col items-center justify-center py-2 px-1.5 rounded-xl border transition-all text-center cursor-pointer ${
                  isSelected
                    ? "bg-zinc-900 border-white/30 text-white"
                    : "bg-zinc-900/60 border-white/5 text-zinc-300 hover:border-white/20 hover:bg-zinc-800/70"
                }`}
              >
                <div className="mb-1">
                  <TechLogo id={tech.id} color={tech.color} />
                </div>
                <span className="text-[11px] font-bold tracking-tight leading-none">{tech.name}</span>
                <span className="text-[9px] text-zinc-400 font-medium mt-0.5">{tech.category}</span>

                {isSelected && (
                  <motion.div
                    layoutId="tech-indicator"
                    className="absolute -bottom-0.5 w-4 h-0.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Tech Details Micro-Drawer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="mt-2.5 p-2 sm:p-2.5 rounded-xl bg-zinc-900/90 border border-white/5 flex items-start gap-2"
          >
            <div className="p-1 rounded-md bg-white/5 shrink-0 mt-0.5">
              <TechLogo id={selectedTech.id} color={selectedTech.color} />
            </div>
            <div className="text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-[11px] font-bold text-white">{selectedTech.name}</h4>
                <span className="text-[9.5px] text-sky-400 font-mono font-medium truncate">
                  {selectedTech.tagline}
                </span>
              </div>
              <p className="text-[10.5px] text-zinc-300 leading-relaxed mt-0.5 line-clamp-2">
                {selectedTech.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-3 gap-2 pt-2.5 mt-2.5 border-t border-white/10">
          <div className="p-1.5 sm:p-2 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-sky-400 mb-0.5">
              <Briefcase className="w-3 h-3" />
              <span className="text-xs sm:text-sm font-extrabold text-white">3 Mo.</span>
            </div>
            <span className="text-[9.5px] text-zinc-400 font-medium leading-tight">
              Internship Exp
            </span>
          </div>

          <div className="p-1.5 sm:p-2 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-emerald-400 mb-0.5">
              <FolderGit2 className="w-3 h-3" />
              <span className="text-xs sm:text-sm font-extrabold text-white">2+</span>
            </div>
            <span className="text-[9.5px] text-zinc-400 font-medium leading-tight">
              Full-Stack Apps
            </span>
          </div>

          <div className="p-1.5 sm:p-2 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-violet-400 mb-0.5">
              <ShieldCheck className="w-3 h-3" />
              <span className="text-xs sm:text-sm font-extrabold text-white">100%</span>
            </div>
            <span className="text-[9.5px] text-zinc-400 font-medium leading-tight">
              Clean Code Focus
            </span>
          </div>
        </div>

        {/* Bottom Action / Featured Work Teaser */}
        <a
          href="#projects"
          className="mt-2.5 flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-violet-500/10 hover:from-sky-500/20 hover:to-violet-500/20 border border-sky-500/20 text-[11px] text-zinc-200 transition-all group/link"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
            <span className="font-medium text-zinc-200">
              Featured: <span className="text-white font-semibold">Travelix Platform</span>
            </span>
          </div>
          <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover/link:text-sky-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
