"use client";

import React, { useState } from "react";
import { ExternalLink, Heart, Star, Compass, ShieldCheck, CreditCard, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { ProjectItem } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isFavorited, setIsFavorited] = useState(true);

  return (
    <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-700">
      {/* Subtle top gradient accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500" />

      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Project Details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                <Compass className="w-3.5 h-3.5" />
                Featured Project
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Full-Stack Application</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-sky-600 dark:text-sky-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Core Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              {project.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-500 dark:text-sky-400 mt-0.5 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  size="sm"
                  className="bg-zinc-100/80 dark:bg-zinc-800/80 hover:border-sky-400 transition"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-300/80 dark:border-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Frontend Repo</span>
            </a>

            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-300/80 dark:border-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Backend Repo</span>
            </a>
          </div>
        </div>

        {/* Right Column: Custom UI Mockup of Travelix */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-zinc-300/80 dark:border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden group">
            {/* Mockup Browser Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="px-3 py-1 rounded-md bg-zinc-800/80 text-zinc-400 text-[11px] font-mono truncate max-w-[200px] sm:max-w-xs">
                travelix-frontend-gbul.vercel.app
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] text-zinc-400 hidden sm:inline">Secure</span>
              </div>
            </div>

            {/* Mockup Interface Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-b from-zinc-900 to-zinc-950 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
                    T
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white">TRAVELIX</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-[11px] border border-emerald-500/30">
                    Firebase Auth
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-medium text-[11px] border border-sky-500/30 flex items-center gap-1">
                    <CreditCard className="w-3 h-3" />
                    Razorpay
                  </span>
                </div>
              </div>

              {/* Mockup Search & Filter */}
              <div className="rounded-xl bg-zinc-800/60 border border-zinc-700/60 p-2.5 flex items-center justify-between text-xs text-zinc-400">
                <span>🔍 Discover destinations, travel packages...</span>
                <button
                  type="button"
                  className="px-3 py-1 rounded-lg bg-sky-500 text-white font-medium text-[11px]"
                >
                  Explore
                </button>
              </div>

              {/* Mockup Trip Package Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Trip Card 1 */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3.5 space-y-2.5 hover:border-sky-500/40 transition">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider">
                        Adventure Tour
                      </span>
                      <h5 className="font-semibold text-sm text-zinc-100">Himalayan Trek & Valley</h5>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsFavorited(!isFavorited)}
                      className="text-zinc-400 hover:text-rose-400 transition"
                      aria-label="Toggle wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isFavorited ? "text-rose-500 fill-rose-500" : ""}`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      4.9
                    </span>
                    <span>•</span>
                    <span>6 Days / 5 Nights</span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-zinc-800/80 text-xs">
                    <div>
                      <span className="text-zinc-400 text-[11px]">From </span>
                      <span className="font-bold text-emerald-400">₹14,999</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-medium">
                      Book Now
                    </span>
                  </div>
                </div>

                {/* Trip Card 2 */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3.5 space-y-2.5 hover:border-sky-500/40 transition">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                        Coastal Gateway
                      </span>
                      <h5 className="font-semibold text-sm text-zinc-100">Goa Beaches & Heritage</h5>
                    </div>
                    <Heart className="w-4 h-4 text-zinc-500" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      4.8
                    </span>
                    <span>•</span>
                    <span>4 Days / 3 Nights</span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-zinc-800/80 text-xs">
                    <div>
                      <span className="text-zinc-400 text-[11px]">From </span>
                      <span className="font-bold text-emerald-400">₹9,499</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-medium">
                      Book Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Preview Bar */}
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Integrated MongoDB Atlas & Express REST API</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                >
                  Open in Tab <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
