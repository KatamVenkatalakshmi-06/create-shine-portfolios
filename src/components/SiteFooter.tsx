export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Student Portfolio. Crafted with care.</p>
        <p>Built with TanStack Start &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
