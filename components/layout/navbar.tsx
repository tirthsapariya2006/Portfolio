"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      // Detect active section based on scroll position
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: isHomePage ? "#hero" : "/#hero", id: "hero" },
    { label: "About", href: isHomePage ? "#about" : "/#about", id: "about" },
    { label: "Skills", href: isHomePage ? "#skills" : "/#skills", id: "skills" },
    { label: "Experience", href: isHomePage ? "#experience" : "/#experience", id: "experience" },
    { label: "Projects", href: isHomePage ? "#projects" : "/#projects", id: "projects" },
    { label: "Education", href: isHomePage ? "#education" : "/#education", id: "education" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact", id: "contact" },
    { label: "Blog", href: "/blog", id: "blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          aria-label="Tirth Sapariya Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            TS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition">
              Tirth Sapariya
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 -mt-0.5 hidden sm:inline">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = isHomePage
              ? activeSection === link.id
              : pathname === link.href;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Resume CTA & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={portfolioData.siteConfig.resumePath}
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Download Resume"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-zinc-950/80 backdrop-blur-xl md:hidden animate-in fade-in duration-200">
          <div className="p-6 max-w-sm mx-auto flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-900/90 border border-transparent hover:border-zinc-800 transition"
              >
                <span>{link.label}</span>
                <span className="text-zinc-500 text-xs">→</span>
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-zinc-800/80">
              <a
                href={portfolioData.siteConfig.resumePath}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
