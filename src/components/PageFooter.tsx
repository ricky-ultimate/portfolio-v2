"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageFooter() {
  const pathname = usePathname();

  return (
    <footer className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm tracking-wide font-light mt-auto pt-10 border-t border-white/10">
      <a
        href="https://richesogigi.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors duration-200"
      >
        richesogigi.dev
      </a>
      <Link
        href="/projects"
        className={
          pathname.startsWith("/projects")
            ? "text-white"
            : "text-white/70 hover:text-white transition-colors duration-200"
        }
      >
        projects
      </Link>
      <Link
        href="/scribbles"
        className={
          pathname.startsWith("/scribbles")
            ? "text-white"
            : "text-white/70 hover:text-white transition-colors duration-200"
        }
      >
        scribbles
      </Link>
    </footer>
  );
}
