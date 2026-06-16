export default function Home() {
  return (
    <div
      className="relative flex flex-col justify-between min-h-screen px-30 py-15"
      style={{ fontFamily: "var(--font-source-serif), serif" }}
    >
      <header className="flex items-start justify-between w-full">
        <div className="flex gap-20 text-sm tracking-wide text-white/70 font-light">
          <span className="leading-snug">Riches Ogigi</span>
          <span className="leading-snug">
            Full Stack Software Engineer
            <br />
            Backend Specialist
          </span>
          <span className="leading-snug">
            Currently in
            <br />
            Nigeria
          </span>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-[9px] tracking-widest text-white/70 hover:bg-white hover:text-black transition-colors duration-300 font-light uppercase"
        >
          CV
        </a>
      </header>

      <main className="flex w-full items-end justify-between gap-8">
        <h1 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-tight tracking-tight max-w-[380px]">
          I build websites, backend systems
          <br />
          &amp; APIs that scale.
        </h1>

        <p className="max-w-[400px] text-[15px] leading-relaxed text-white/55 font-light text-right">
          I&apos;ve built systems and APIs for startups and independent projects
          across fintech, real-time chat, and developer tooling — using Python,
          TypeScript, PostgreSQL, and microservice architecture.
          <br />
          <br />
          2022 &mdash; present
        </p>
      </main>

      <footer className="flex items-center gap-20 text-sm tracking-wide text-white/50 font-light">
        <a
          href="https://richesogigi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          richesogigi.dev
        </a>
        <a
          href="/projects"
          className="hover:text-white transition-colors duration-200"
        >
          projects
        </a>
        <a
          href="/scribbles"
          className="hover:text-white transition-colors duration-200"
        >
          scribbles
        </a>
      </footer>
    </div>
  );
}
