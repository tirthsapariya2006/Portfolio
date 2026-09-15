"use client";

import React, { useState, useEffect } from "react";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/data/portfolio";

interface RepoData {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

// Curated fallback data matching Tirth's real repositories so the section always looks great even under rate limits
const FALLBACK_REPOS: RepoData[] = [
  {
    id: 101,
    name: "TravelixFrontend",
    description: "Trip Booking System web application client built with React.js, Vite, and Tailwind CSS.",
    html_url: "https://github.com/tirthsapariya2006/TravelixFrontend",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
  },
  {
    id: 102,
    name: "TravelixBackend",
    description: "RESTful API backend for Travelix booking engine built with Node.js, Express, and MongoDB.",
    html_url: "https://github.com/tirthsapariya2006/TravelixBackend",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
  },
];

export function GithubShowcase() {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/tirthsapariya2006/repos?sort=updated&per_page=4", {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });

        if (!res.ok) {
          // If rate-limited (403) or error, seamlessly fall back to curated data
          if (isMounted) {
            setRepos(FALLBACK_REPOS);
            setLoading(false);
          }
          return;
        }

        const data = await res.json();
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          } else {
            setRepos(FALLBACK_REPOS);
          }
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setRepos(FALLBACK_REPOS);
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github-activity" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source &amp; Code"
          title="GitHub Repositories"
          description="Public repositories and active codebases on GitHub. Always available and updated."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {loading ? (
            // Skeletons
            [1, 2].map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-6 space-y-4 animate-pulse"
              >
                <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
              </div>
            ))
          ) : (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 flex flex-col justify-between hover:border-sky-500/40 dark:hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-sky-500 transition" />
                      <h4 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition">
                        {repo.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {repo.description || "Public repository containing full-stack code and implementation."}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                    <span>{repo.language || "JavaScript"}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* View Profile CTA */}
        <div className="mt-8 text-center">
          <a
            href={portfolioData.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore all repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
