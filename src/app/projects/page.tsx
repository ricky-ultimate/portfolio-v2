import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import ProjectAccordion from "@/components/ProjectAccordion";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1">
      <PageHeader />

      <main className="flex flex-col gap-12 mt-16 pb-24">
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="text-base tracking-widest text-white/70 uppercase hover:text-white transition-colors duration-200 w-fit"
          >
            &larr; Back
          </Link>
          <div className="flex flex-col gap-2">
            <p className="text-base text-white/45 font-light max-w-full leading-relaxed">
              A selection of things I have built, broken, and eventually shipped.
            </p>
          </div>
        </div>

        <ProjectAccordion projects={projects} />
      </main>

      <PageFooter active="projects" />
    </div>
  );
}
