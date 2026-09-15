import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080c14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: portfolioData.siteConfig.title,
    template: "%s | Tirth Sapariya",
  },
  description: portfolioData.siteConfig.description,
  metadataBase: new URL(portfolioData.siteConfig.url),
  keywords: [
    "Tirth Sapariya",
    "Full-Stack Developer",
    "React.js Developer",
    "Node.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Portfolio",
  ],
  authors: [
    {
      name: portfolioData.personal.name,
      url: portfolioData.socials[0].url,
    },
  ],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.siteConfig.url,
    title: portfolioData.siteConfig.title,
    description: portfolioData.siteConfig.description,
    siteName: portfolioData.siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.siteConfig.title,
    description: portfolioData.siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-sky-500/20 selection:text-sky-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
