import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Student Portfolio" },
      { name: "description", content: "Reach out to the Student Portfolio team. We'd love to hear from you." },
    ],
  }),
});

type Status = { type: "idle" } | { type: "success"; text: string } | { type: "error"; text: string };

function ContactPage() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please fill out all fields." });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setStatus({ type: "success", text: "Thank you! Your message has been sent." });
      setSubmitting(false);
      form.reset();
      setTimeout(() => setStatus({ type: "idle" }), 4000);
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Get in touch</p>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question, project idea, or collaboration opportunity? Send us a note and we'll get back to you soon.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">hello@studentportfolio.dev</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Remote · Worldwide</p>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30"
                  placeholder="Tell us a little about your idea…"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending…" : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>

              {status.type !== "idle" && (
                <p
                  role="status"
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    status.type === "success"
                      ? "bg-success/10 text-success"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
