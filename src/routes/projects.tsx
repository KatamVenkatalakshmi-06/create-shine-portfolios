import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Student Portfolio" },
      { name: "description", content: "Browse student projects: personal blogs, portfolio websites, travel journals, and more." },
    ],
  }),
});

const projects = [
  {
    student: "Alice Johnson",
    title: "Personal Blog",
    description: "A clean, content-first blog platform built using semantic HTML and modern CSS.",
    tags: ["HTML", "CSS", "Content"],
  },
  {
    student: "Brandon Lee",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects, skills, and case studies.",
    tags: ["Responsive", "Design", "JavaScript"],
  },
  {
    student: "James Carter",
    title: "Travel Journal",
    description: "An interactive travel journal with custom UI design and a delightful reading experience.",
    tags: ["UI/UX", "Interactive", "React"],
  },
  {
    student: "Catherine Wong",
    title: "Mobile Habit Tracker",
    description: "A cross-platform habit tracker with streaks, reminders, and Firebase sync.",
    tags: ["React Native", "Firebase", "Mobile"],
  },
];

function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Showcase</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Student Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of recent work — each project reflects the curiosity and craft of the student behind it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {p.student}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-smooth group-hover:text-accent"
              >
                View project
                <ExternalLink className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
