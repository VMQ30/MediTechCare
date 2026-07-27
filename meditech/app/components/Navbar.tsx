"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const NAVIGATIONS = ["About", "Services", "Why Us", "FAQ", "Contact"];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 items-center gap-4 px-5 max-w-6xl sm:justify-between md:justify-between">
        <a href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="truncate font-header text-lg font-semibold tracking-tight text-foreground">
            MediTech
            <span className="ml-[2px] text-primary-deep">Care</span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-7 lg:flex"
        >
          {NAVIGATIONS.map((nav) => {
            return (
              <a
                key={nav}
                href={`${nav.toLowerCase()}`}
                className="relative py-1 text-sm text-muted-foreground font-body uppercase tracking-widest transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary-deep after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
              >
                {nav}
              </a>
            );
          })}
        </nav>
        <button className="ml-auto font-body uppercase tracking-widest hidden rounded-[3px] bg-primary-deep px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:brightness-110 lg:ml-6 lg:inline-block">
          Book an Appointment
        </button>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAVIGATIONS.map((nav) => (
              <a
                key={nav}
                href={nav}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground font-body uppercase tracking-widest hover:bg-secondary hover:text-foreground"
              >
                {nav}
              </a>
            ))}
            <button
              onClick={() => setOpen(false)}
              className="rounded-[3px] font-body uppercase tracking-widest bg-primary-deep px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
