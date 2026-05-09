import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowLeft, Calendar, CheckCircle2, ExternalLink, Github, User } from "lucide-react";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Student Portfolio` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <p className="mt-3 text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-12 text-center text-destructive">{error.message}</div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ background: project.gradient }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_55%)]" />
          <div className="relative mx-auto max-w-5xl px-6 py-20 text-primary-foreground">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium opacity-90 transition-smooth hover:opacity-100"
            >
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                {project.category}
              </span>
              <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                {project.year}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-bold sm:text-6xl">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-lg opacity-90">{project.longDescription}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-background/95 px-5 py-2.5 text-sm font-semibold text-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
                >
                  Live demo <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-white/20"
                >
                  Source <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10 animate-fade-up">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Highlights</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">Tech stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card animate-fade-up">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Project info
            </h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Student</dt>
                  <dd className="font-medium text-foreground">{project.student}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Year</dt>
                  <dd className="font-medium text-foreground">{project.year}</dd>
                </div>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Tags</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Related */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <h2 className="text-2xl font-semibold text-foreground">More projects</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group rounded-xl border border-border bg-card p-5 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="h-2 w-12 rounded-full" style={{ background: p.gradient }} />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.student}
                </p>
                <h3 className="mt-1 text-base font-semibold text-foreground group-hover:text-accent">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
