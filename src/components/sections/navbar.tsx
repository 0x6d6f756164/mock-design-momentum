"use client";

import { MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <Link
        href={href}
        className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
      >
        {label}
      </Link>
    </motion.div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          Momentum
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden rounded-md bg-cobalt font-semibold text-white hover:bg-cobalt-deep sm:inline-flex"
          >
            <a href="/#contact">Start a Project</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-md border-ink/15 bg-transparent md:hidden"
              >
                <MenuIcon className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="border-l border-border bg-paper">
              <span className="font-display text-xl font-bold">Momentum</span>
              <nav className="mt-8 flex flex-col gap-6">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <Link
                      href={l.href}
                      className="font-display text-2xl font-bold transition-colors hover:text-cobalt"
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-8 w-full rounded-md bg-cobalt font-semibold text-white hover:bg-cobalt-deep"
                >
                  <a href="/#contact">Start a Project</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
