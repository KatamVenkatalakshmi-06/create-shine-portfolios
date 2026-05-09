import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills — Student Portfolio" },
      { name: "description", content: "Skills mastered by students — web, mobile, backend, and design." },
    ],
  }),
});

const students = [
  {
    name: "Alice Johnson",
    role: "Front-end Developer",
    skills: ["HTML", "CSS", "JavaScript", "Accessibility"],
  },
  {
    name: "Brandon Lee",
    role: "Backend Developer",
    skills: ["Python", "Flask", "SQL", "REST APIs"],
  },
  {
    name: "Catherine Wong",
    role: "Mobile & UI/UX",
    skills: ["React Native", "Firebase", "UI/UX Design", "Figma"],
  },
];

function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Capabilities</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Skills</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From web fundamentals to mobile and design — a snapshot of what each student brings to the table.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((s, i) => (
            <div
              key={s.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-hero font-display text-lg font-bold text-primary-foreground">
                  {s.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
                  <p className="text-xs text-muted-foreground">{s.role}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.skills.map((sk) => (
                  <li
                    key={sk}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {sk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
