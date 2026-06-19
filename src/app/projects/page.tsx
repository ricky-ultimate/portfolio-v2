import Link from "next/link";
import ProjectAccordion from "@/components/ProjectAccordion";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <main className="flex flex-col gap-12 mt-16 pb-24">
      <div className="flex flex-col gap-6">
        <Link
          href="/"
          className="text-base tracking-widest text-white/70 uppercase hover:text-white transition-colors duration-200 w-fit"
        >
          &larr; Back
        </Link>
        <p className="text-base text-white/45 font-light max-w-full leading-relaxed">
          A selection of things I have built, broken, and eventually shipped.
        </p>
      </div>

      <ProjectAccordion projects={projects} />
    </main>
  );
}
