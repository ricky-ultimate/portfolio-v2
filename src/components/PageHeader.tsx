import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="flex items-start justify-between w-full mb-8 sm:mb-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-12 lg:gap-20 text-sm tracking-wide text-white/70 font-light">
        <Link
          href="/"
          className="leading-snug hover:text-white transition-colors duration-200"
        >
          Riches Ogigi
        </Link>
        <span className="leading-snug">
          Full Stack Software Engineer
          <br />
          Backend Specialist
        </span>
        <span className="leading-snug hidden sm:block">
          Currently in
          <br />
          Nigeria
        </span>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-[11px] tracking-widest text-white/70 hover:bg-white hover:text-black transition-colors duration-300 font-light uppercase shrink-0"
      >
        CV
      </a>
    </header>
  );
}
