import React from "react";
import Link from "next/link";
import { Mail, ArrowUp, Code } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/ui/social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons: Record<string, React.ReactNode> = {
    github: <GithubIcon className="w-4 h-4" />,
    linkedin: <LinkedinIcon className="w-4 h-4" />,
    code: <LeetcodeIcon className="w-4 h-4" />,
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200/60 dark:border-zinc-800/60">
          {/* Developer identity & availability */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
              TS
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  {portfolioData.personal.name}
                </h4>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {portfolioData.personal.title} • React.js, Next.js, Node.js &amp; PostgreSQL
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} profile`}
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/30 transition shadow-sm"
              >
                {socialIcons[social.icon] || <Code className="w-4 h-4" />}
              </a>
            ))}

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}&su=${encodeURIComponent("Hello Tirth - From Portfolio")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose email to Tirth Sapariya on Gmail"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/30 transition shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
          <p>
            © {currentYear} {portfolioData.personal.name}. Built with Next.js, TypeScript & Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition">
              Blog
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-200 transition"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
