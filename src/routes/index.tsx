import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, Code2, FolderKanban, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Student Portfolio — Home" },
      { name: "description", content: "Welcome to a creative student portfolio showcasing projects, skills, and contact information." },
    ],
  }),
});

const highlights = [
  {
    icon: FolderKanban,
    title: "Curated Projects",
    description: "A growing collection of student work spanning web, mobile, and design.",
    to: "/projects" as const,
    cta: "See projects",
  },
  {
    icon: Code2,
    title: "Sharp Skills",
    description: "Modern stacks: React, Python, Firebase, UI/UX and beyond.",
    to: "/skills" as const,
    cta: "Browse skills",
  },
  {
    icon: Mail,
    title: "Get in Touch",
    description: "Have a project idea or opportunity? Reach out anytime.",
    to: "/contact" as const,
    cta: "Contact us",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-[0.04]" aria-hidden />
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-3xl text-center animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Showcasing student creativity
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground sm:text-6xl">
                Where talented students{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  bring ideas to life
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                Welcome! Explore a portfolio of creative and technical projects
                built by passionate students — from personal blogs to mobile apps.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
                >
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-card transition-smooth hover:bg-secondary"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((h, i) => (
              <Link
                key={h.title}
                to={h.to}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  {h.cta}
                  <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
