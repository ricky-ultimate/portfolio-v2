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
        <Link
          href="/"
          className="text-base tracking-widest text-white/70 uppercase hover:text-white transition-colors duration-200 w-fit"
        >
          &larr; Back
        </Link>

        <ProjectAccordion projects={projects} />
      </main>

      <PageFooter active="projects" />
    </div>
  );
}
