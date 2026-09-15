"use client";

import React, { useState } from "react";
import { Check, Copy, FileCode2, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function CodeCard() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "status">("code");

  const tsCode = `const developer = {
  name: "Tirth Sapariya",
  role: "Full-Stack Developer",
  stack: ["React", "Node.js", "MongoDB"],
  focus: "Clean, Scalable Web Applications",
  isOpenForWork: true
};`;

  const statusJson = `{
  "currentFocus": "Full-Stack Web Dev",
  "featuredProject": "Travelix",
  "status": "Ready for new opportunities",
  "coreTechnologies": [
    "Next.js", "TypeScript",
    "Tailwind CSS", "MongoDB"
  ]
}`;

  const copyToClipboard = () => {
    const textToCopy = activeTab === "code" ? tsCode : statusJson;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative rounded-2xl p-1 bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-violet-500/20 shadow-2xl backdrop-blur-xl group"
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-500/20 to-violet-500/20 blur-xl opacity-50 group-hover:opacity-80 transition duration-500 -z-10" />

      <div className="rounded-xl overflow-hidden bg-zinc-950/90 dark:bg-zinc-950/95 border border-white/10 text-zinc-300 font-mono text-xs sm:text-sm">
        {/* Editor Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <div className="h-4 w-px bg-zinc-700/50 mx-1.5" />
            
            {/* Tabs */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all ${
                  activeTab === "code"
                    ? "bg-zinc-800 text-sky-400 font-medium"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <FileCode2 className="w-3.5 h-3.5 text-sky-400" />
                developer.ts
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("status")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all ${
                  activeTab === "status"
                    ? "bg-zinc-800 text-emerald-400 font-medium"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                status.json
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={copyToClipboard}
            aria-label={copied ? "Code copied" : "Copy code"}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-100 px-2 py-1 rounded hover:bg-zinc-800 transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed">
          {activeTab === "code" ? (
            <div className="space-y-1">
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">1</span>
                <div>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = {"{"}
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">2</span>
                <div className="pl-4">
                  <span className="text-zinc-400">name</span>:{" "}
                  <span className="text-amber-300">&quot;Tirth Sapariya&quot;</span>,
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">3</span>
                <div className="pl-4">
                  <span className="text-zinc-400">role</span>:{" "}
                  <span className="text-emerald-300">&quot;Full-Stack Developer&quot;</span>,
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">4</span>
                <div className="pl-4">
                  <span className="text-zinc-400">stack</span>: [
                  <span className="text-sky-300">&quot;React&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;MongoDB&quot;</span>],
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">5</span>
                <div className="pl-4">
                  <span className="text-zinc-400">focus</span>:{" "}
                  <span className="text-indigo-300">&quot;Clean, Scalable Web Applications&quot;</span>,
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">6</span>
                <div className="pl-4">
                  <span className="text-zinc-400">isOpenForWork</span>:{" "}
                  <span className="text-rose-400">true</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">7</span>
                <div>{"};"}</div>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">1</span>
                <div>{"{"}</div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">2</span>
                <div className="pl-4">
                  <span className="text-sky-300">&quot;currentFocus&quot;</span>:{" "}
                  <span className="text-amber-300">&quot;Full-Stack Web Dev&quot;</span>,
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">3</span>
                <div className="pl-4">
                  <span className="text-sky-300">&quot;featuredProject&quot;</span>:{" "}
                  <span className="text-emerald-300">&quot;Travelix&quot;</span>,
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">4</span>
                <div className="pl-4">
                  <span className="text-sky-300">&quot;status&quot;</span>:{" "}
                  <span className="text-violet-300">&quot;Ready for new opportunities&quot;</span>
                </div>
              </div>
              <div className="flex">
                <span className="text-zinc-600 select-none w-6 text-right mr-4">5</span>
                <div>{"}"}</div>
              </div>
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/60 border-t border-white/5 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-zinc-400">TypeScript 5.x</span>
          </div>
          <span>UTF-8</span>
        </div>
      </div>
    </motion.div>
  );
}
