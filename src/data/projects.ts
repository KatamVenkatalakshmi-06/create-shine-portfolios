export type Project = {
  slug: string;
  student: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Web" | "Mobile" | "Design" | "Backend";
  year: number;
  features: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "personal-blog",
    student: "Alice Johnson",
    title: "Personal Blog",
    description: "A clean, content-first blog platform built using semantic HTML and modern CSS.",
    longDescription:
      "A minimal blog focused on readability and accessibility. Built with semantic HTML5 landmarks, fluid typography, and a content-first layout that adapts beautifully from mobile to desktop.",
    tags: ["HTML", "CSS", "Content"],
    category: "Web",
    year: 2024,
    features: [
      "Responsive, mobile-first layout",
      "Accessible color contrast & semantic landmarks",
      "Lightweight — no framework, fast load",
      "Tag-based article organization",
    ],
    tech: ["HTML5", "CSS3", "Markdown"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "linear-gradient(135deg, oklch(0.55 0.22 268), oklch(0.7 0.2 320))",
  },
  {
    slug: "portfolio-website",
    student: "Brandon Lee",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects, skills, and case studies.",
    longDescription:
      "A polished portfolio with smooth animations, project case studies, and a contact form. Optimized for performance with image lazy-loading and prefetched routes.",
    tags: ["Responsive", "Design", "JavaScript"],
    category: "Web",
    year: 2024,
    features: [
      "Smooth scroll & micro-interactions",
      "Case-study driven project pages",
      "Optimized assets and Lighthouse 95+",
      "Dark-mode aware design tokens",
    ],
    tech: ["JavaScript", "CSS Grid", "Vanilla DOM"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "linear-gradient(135deg, oklch(0.6 0.2 30), oklch(0.7 0.18 55))",
  },
  {
    slug: "travel-journal",
    student: "James Carter",
    title: "Travel Journal",
    description: "An interactive travel journal with custom UI design and a delightful reading experience.",
    longDescription:
      "A storytelling-first travel journal with an interactive map, photo galleries, and trip timelines. Designed for sharing rich travel narratives.",
    tags: ["UI/UX", "Interactive", "React"],
    category: "Design",
    year: 2025,
    features: [
      "Interactive map of visited locations",
      "Photo gallery with lightbox",
      "Per-trip timeline & stats",
      "Custom illustrated UI",
    ],
    tech: ["React", "Framer Motion", "Mapbox"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "linear-gradient(135deg, oklch(0.62 0.16 150), oklch(0.7 0.18 195))",
  },
  {
    slug: "habit-tracker",
    student: "Catherine Wong",
    title: "Mobile Habit Tracker",
    description: "A cross-platform habit tracker with streaks, reminders, and Firebase sync.",
    longDescription:
      "Build better routines with a mobile-first habit tracker. Real-time sync, push notifications, and beautiful streak visualizations keep users motivated.",
    tags: ["React Native", "Firebase", "Mobile"],
    category: "Mobile",
    year: 2025,
    features: [
      "Daily / weekly habit scheduling",
      "Streak visualization & analytics",
      "Push reminders",
      "Real-time multi-device sync",
    ],
    tech: ["React Native", "Firebase", "Expo"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "linear-gradient(135deg, oklch(0.55 0.2 285), oklch(0.65 0.18 230))",
  },
];

export const categories = ["All", "Web", "Mobile", "Design", "Backend"] as const;
export type Category = (typeof categories)[number];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
