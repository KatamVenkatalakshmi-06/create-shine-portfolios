import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-elegant">
            <GraduationCap className="h-5 w-5" />
          </span>
          Student Portfolio
        </Link>
        <nav>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
