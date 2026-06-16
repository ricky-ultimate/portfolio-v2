import Link from "next/link";

type Props = {
  active?: "projects" | "scribbles";
};

export default function PageFooter({ active }: Props) {
  return (
    <footer className="flex items-center gap-20 text-sm tracking-wide font-light mt-auto pt-10 border-t border-white/10">
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
          active === "projects"
            ? "text-white"
            : "text-white/70 hover:text-white transition-colors duration-200"
        }
      >
        projects
      </Link>
      <Link
        href="/scribbles"
        className={
          active === "scribbles"
            ? "text-white"
            : "text-white/70 hover:text-white transition-colors duration-200"
        }
      >
        scribbles
      </Link>
    </footer>
  );
}
