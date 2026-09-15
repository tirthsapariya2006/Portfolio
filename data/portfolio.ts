export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Authentication" | "Payment";
  iconName: string;
  description?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type: string;
  location?: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    auth: string[];
    payment: string[];
  };
  tags: string[];
  liveUrl: string;
  githubFrontend: string;
  githubBackend: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    bio: string;
    shortBio: string;
    experienceLevel: string;
    status: string;
    location: string;
  };
  siteConfig: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
    resumePath: string;
  };
  navItems: { label: string; href: string }[];
  socials: SocialLink[];
  skills: SkillItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tirth Sapariya",
    title: "Full-Stack Developer",
    email: "tirthsapariya07@gmail.com",
    bio: "Hi, I’m Tirth Sapariya, a web developer focused on building responsive and scalable applications. I work with technologies like React.js, Node.js, and MongoDB to develop clean, efficient, and user-friendly digital solutions. I constantly explore new technologies to improve my skills and build better projects.",
    shortBio: "Building responsive, scalable & user-focused web experiences with modern full-stack technologies.",
    experienceLevel: "3-Month Internship Experience",
    status: "Open to opportunities",
    location: "India",
  },

  siteConfig: {
    title: "Tirth Sapariya | Full-Stack Developer",
    description: "Personal portfolio of Tirth Sapariya, a Full-Stack Developer building responsive, scalable, and user-focused web experiences using React.js, Next.js, Node.js, and MongoDB.",
    url: "https://tirthsapariya.dev", // Production domain placeholder - easily customizable
    ogImage: "/images/og-card.png",
    resumePath: "/resume/TirthResume2.0.pdf",
  },

  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "/blog" },
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/tirthsapariya2006",
      icon: "github",
      handle: "tirthsapariya2006",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tirth-sapariya-01b045430/",
      icon: "linkedin",
      handle: "tirth-sapariya",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/tirthsapariya/",
      icon: "code",
      handle: "tirthsapariya",
    },
  ],

  skills: [
    // Frontend
    { name: "React.js", category: "Frontend", iconName: "react", description: "Component-driven interactive web UIs" },
    { name: "Next.js", category: "Frontend", iconName: "nextjs", description: "App Router, SSR, Server Components & SEO" },
    { name: "TypeScript", category: "Frontend", iconName: "typescript", description: "Static typing for scalable architectures" },
    { name: "Tailwind CSS", category: "Frontend", iconName: "tailwind", description: "Utility-first modern responsive styling" },
    { name: "Vite", category: "Frontend", iconName: "vite", description: "Lightning-fast frontend toolchain" },

    // Backend
    { name: "Node.js", category: "Backend", iconName: "nodejs", description: "Asynchronous JavaScript server runtime" },
    { name: "Express.js", category: "Backend", iconName: "express", description: "RESTful API creation & middleware pipelines" },

    // Database
    { name: "MongoDB", category: "Database", iconName: "mongodb", description: "NoSQL document database design & queries" },

    // Tools
    { name: "Git", category: "Tools", iconName: "git", description: "Version control & collaborative development" },
    { name: "Postman", category: "Tools", iconName: "postman", description: "API design, debugging & endpoint testing" },

    // Authentication
    { name: "Firebase Authentication", category: "Authentication", iconName: "firebase", description: "Secure user auth flows & session state" },

    // Payment
    { name: "Razorpay", category: "Payment", iconName: "razorpay", description: "Payment gateway integration & checkout processing" },
  ],

  experience: [
    {
      company: "SPARK DIGISHINE",
      role: "Web Development Intern",
      duration: "1 May 2026 – 31 July 2026",
      type: "Internship",
      description: "Worked as a Web Development Intern, gaining practical experience in modern web development and contributing to web-based projects.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Git"],
    },
  ],

  projects: [
    {
      id: "travelix",
      title: "Travelix",
      tagline: "Trip Booking System",
      description: "The Trip Booking System is a web-based application developed to help travelers discover, explore, and book travel packages online. The system provides an easy-to-use interface where users can browse available trips, view detailed information, save trips to their wishlist, and rate completed trips.",
      features: [
        "Browse and search handpicked travel packages with responsive design",
        "View comprehensive trip details, itineraries, and package breakdowns",
        "User wishlist capability to bookmark dream destinations",
        "Trip rating and feedback system for verified travelers",
        "End-to-end checkout with secure Razorpay payment processing",
        "Firebase Authentication for authenticated user management",
      ],
      techStack: {
        frontend: ["React.js", "Vite", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB"],
        auth: ["Firebase Authentication"],
        payment: ["Razorpay"],
      },
      tags: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Razorpay",
      ],
      liveUrl: "https://travelix-frontend-gbul.vercel.app/",
      githubFrontend: "https://github.com/tirthsapariya2006/TravelixFrontend",
      githubBackend: "https://github.com/tirthsapariya2006/TravelixBackend",
      featured: true,
    },
  ],

  education: [
    {
      degree: "Computer Engineering",
      institution: "LDRP-ITR / KSV",
      duration: "2023 – 2027",
      status: "Undergraduate Program",
    },
  ],
};
