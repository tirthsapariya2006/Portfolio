"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Layers } from "lucide-react";

// Recognizable technology SVG icons
const TechIcon = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case "react":
      return (
        <svg viewBox="0 0 115.3 100" className="w-7 h-7 text-[#61DAFB]" fill="currentColor">
          <ellipse cx="57.6" cy="50" rx="14.3" ry="14.3" />
          <path d="M57.6,90.2c25.4,0,46-18,46-40.2s-20.6-40.2-46-40.2s-46,18-46,40.2S32.2,90.2,57.6,90.2z" fill="none" stroke="currentColor" strokeWidth="4.5" />
          <path transform="rotate(60 57.6 50)" d="M57.6,90.2c25.4,0,46-18,46-40.2s-20.6-40.2-46-40.2s-46,18-46,40.2S32.2,90.2,57.6,90.2z" fill="none" stroke="currentColor" strokeWidth="4.5" />
          <path transform="rotate(120 57.6 50)" d="M57.6,90.2c25.4,0,46-18,46-40.2s-20.6-40.2-46-40.2s-46,18-46,40.2S32.2,90.2,57.6,90.2z" fill="none" stroke="currentColor" strokeWidth="4.5" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" className="w-7 h-7 text-zinc-900 dark:text-white" fill="currentColor">
          <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
            <circle cx="90" cy="90" fill="white" r="90" />
          </mask>
          <g mask="url(#mask0)">
            <circle cx="90" cy="90" data-fill="true" fill="black" r="90" />
            <path d="M149.508 157.501L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.501Z" fill="white" />
            <path d="M115 54H127V126H115V54Z" fill="white" />
          </g>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className="w-7 h-7">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M72.9 87.2c2.4 2.8 5.7 4.2 9.9 4.2 3.1 0 5.6-.7 7.5-2.2 1.9-1.5 2.8-3.4 2.8-5.8 0-2.1-.8-3.9-2.3-5.3-1.5-1.4-4.2-2.8-8-4.1-5.7-2-9.9-4.2-12.6-6.6-2.7-2.4-4.1-5.8-4.1-10.1 0-4.9 1.8-8.9 5.4-12 3.6-3.1 8.5-4.6 14.6-4.6 4.3 0 8.2.8 11.6 2.4 3.4 1.6 6.1 3.9 8.2 6.8l-7.7 5.7c-3-3.6-6.8-5.4-11.4-5.4-3.1 0-5.5.7-7.2 2-1.7 1.3-2.5 3-2.5 5.1 0 1.9.7 3.5 2.2 4.7 1.5 1.2 4.1 2.5 7.8 3.8 6.1 2.2 10.5 4.6 13.3 7.2 2.8 2.6 4.2 6.2 4.2 10.9 0 5.2-1.9 9.4-5.6 12.6-3.8 3.2-9 4.8-15.7 4.8-5.7 0-10.7-1.2-15-3.6-4.3-2.4-7.5-5.9-9.6-10.5l8.5-5zm-39.7-32.9H15.8V42h44.4v12.3H42.7v49.8H33.2V54.3z" fill="#FFFFFF" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#38BDF8]" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 410 404" className="w-7 h-7">
          <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.074 395.378 198.219 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7503L205.214 77.4719C206.969 77.7838 208.766 77.7785 210.519 77.4561L389.17 44.6063C397.534 43.0678 403.876 51.9547 399.641 59.5246Z" fill="#BD34FE" />
          <path d="M283.711 0.443909L137.915 26.7909C133.568 27.5771 130.686 31.7828 131.603 36.0965L145.418 100.999C146.126 104.324 149.034 106.745 152.428 106.84L211.751 108.497C216.505 108.629 219.647 113.435 217.781 117.808L183.056 199.117C181.341 203.133 184.288 207.545 188.653 207.545H231.845C235.807 207.545 239.117 204.607 239.637 200.677L263.931 16.9216C264.444 13.0454 261.644 9.47952 257.734 9.07684L283.711 0.443909Z" fill="#FFD62E" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#5FA04E]" fill="currentColor">
          <path d="M12 2L2 7.78v11.55L12 25l10-5.67V7.78L12 2zm0 2.29l7.78 4.5-7.78 4.49-7.78-4.49L12 4.29zM4.22 9.68l7.22 4.17v8.34L4.22 18V9.68zm15.56 8.34l-7.22 4.19v-8.34l7.22-4.17v8.32z" />
        </svg>
      );
    case "express":
      return (
        <span className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-xs text-white">
          ex
        </span>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#47A248]" fill="currentColor">
          <path d="M17.193 9.555c-1.278-4.364-4.46-7.85-4.88-8.303a.586.586 0 0 0-.853 0C11.04 1.705 7.858 5.19 6.58 9.555c-1.572 5.37.585 9.775 1.05 10.655a9.89 9.89 0 0 0 4.15 4.125.59.59 0 0 0 .524 0 9.89 9.89 0 0 0 4.15-4.125c.465-.88 2.622-5.285 1.05-10.655h-.31zM12 22.8c-2.39-1.46-4.59-4.88-4.59-8.49 0-4.04 2.87-7.76 4.59-9.59 1.72 1.83 4.59 5.55 4.59 9.59 0 3.61-2.2 7.03-4.59 8.49z" />
        </svg>
      );
    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#336791]" fill="currentColor">
          <path d="M11.97 1.76c-.4 0-.8.03-1.19.1-1.42.24-2.58.94-3.4 1.99-.45.57-.76 1.25-.92 1.99-.07.31-.1.64-.1.97 0 .52.09 1.01.25 1.48-.48.24-.91.56-1.28.95-.73.78-1.17 1.8-1.22 2.89-.06 1.08.28 2.14.94 2.97.43.54.98.96 1.62 1.23-.05.4-.04.8.03 1.2.14.8.53 1.54 1.11 2.12.59.58 1.34.96 2.15 1.09.4.07.81.08 1.22.04.53-.06 1.04-.23 1.51-.51.48.51 1.09.89 1.77 1.11.7.23 1.44.27 2.17.13.72-.14 1.39-.48 1.93-.97.54-.49.92-1.12 1.1-1.82.1-.38.13-.77.11-1.17.58-.37 1.04-.89 1.34-1.5.3-.61.42-1.3.33-1.98-.08-.68-.38-1.31-.83-1.82-.46-.51-1.05-.88-1.7-1.07.03-.31.02-.62-.03-.92-.1-.6-.37-1.16-.76-1.63-.4-.46-.91-.81-1.48-1.02-.37-.14-.76-.21-1.16-.22l-.12-.01c-.38 0-.75.05-1.11.16-.36-.45-.81-.82-1.34-1.07-.63-.31-1.33-.47-2.04-.47zm.03 1.74c.48 0 .96.11 1.39.32.43.21.79.52 1.05.91l.24.37.44-.06c.26-.04.52-.04.78 0 .38.06.74.2 1.06.41.31.21.56.5.73.83.16.33.24.7.21 1.06l-.03.44.42.14c.46.15.86.42 1.17.78.3.36.49.8.53 1.26.04.46-.05.92-.25 1.33-.2.41-.52.75-.92.98l-.39.23.15.42c.11.31.14.63.1.95-.05.32-.17.62-.36.88-.19.26-.44.47-.73.61-.29.14-.61.2-.93.18-.32-.02-.64-.12-.91-.29l-.39-.24-.26.37c-.31.44-.73.78-1.22.99-.49.21-1.03.27-1.56.19-.53-.09-1.01-.34-1.4-.73-.38-.38-.63-.87-.72-1.4-.04-.26-.04-.52 0-.78l.06-.44-.43-.11c-.49-.13-.93-.38-1.28-.73-.34-.36-.57-.81-.66-1.3-.09-.48-.04-.98.14-1.44.18-.45.48-.84.88-1.13l.36-.26-.14-.42c-.1-.31-.13-.64-.09-.96.05-.32.17-.62.36-.88.19-.25.45-.45.74-.58.29-.13.61-.18.93-.15.31.03.62.14.88.31l.37.24.28-.35c.32-.4.74-.7 1.22-.89.48-.19 1-.28 1.52-.27z" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F05032]" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8a2.53 2.53 0 0 1 3.58 0l1.79 1.79-2.26 2.27a1.69 1.69 0 0 0-.48-.07 1.7 1.7 0 0 0-1.7 1.7 1.7 1.7 0 0 0 .34 1.01L7.54 13.6a1.7 1.7 0 1 0 1.2 1.2l2.08-2.09c.31.06.63.09.96.09a1.7 1.7 0 0 0 1.7-1.7c0-.33-.09-.64-.24-.91l2.21-2.21 5.86 5.86a2.53 2.53 0 0 1 0 3.58l-5.78 5.79a2.53 2.53 0 0 1-3.58 0L2.6 14.17a2.53 2.53 0 0 1 0-3.58z" />
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#FF6C37]" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#FFCA28]" fill="currentColor">
          <path d="M3.89 15.67L6.25 1.04a.6.6 0 0 1 1.13-.15l3.14 5.87-6.63 8.91zm15.74 3.75L17.7 7.03a.6.6 0 0 0-1.12-.04L13.8 12.3 8.35 2.1a.6.6 0 0 0-1.07.03L2.37 19.42l9.04 5.08a1.2 1.2 0 0 0 1.18 0l7.04-5.08z" />
        </svg>
      );
    case "razorpay":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0C2340] dark:text-[#3395FF]" fill="currentColor">
          <path d="M14.078 0L5.5 14.5h6.5l-2.078 9.5L20 8.5h-5.922z" />
        </svg>
      );
    default:
      return <Layers className="w-7 h-7 text-sky-500" />;
  }
};

export function Skills() {
  const { skills } = portfolioData;
  const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Authentication", "Payment"] as const;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tech Stack"
          description="Technologies, frameworks, and developer tools I utilize to craft production-ready full-stack applications."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                  : "bg-white/60 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-5 flex flex-col justify-between hover:border-sky-500/40 dark:hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/90 group-hover:scale-105 transition-transform">
                    <TechIcon name={skill.iconName} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {skill.category}
                  </span>
                </div>

                <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {skill.name}
                </h4>

                {skill.description && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
