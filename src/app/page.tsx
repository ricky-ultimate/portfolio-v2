export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col justify-end pb-16 sm:pb-20 lg:pb-25">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <h1 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-tight tracking-tight lg:max-w-[500px]">
          I build websites, backend systems
          <br />
          &amp; APIs that scale.
        </h1>

        <p className="text-[15px] leading-relaxed text-white/55 font-light lg:max-w-[600px] lg:text-right">
          I&apos;m a computer science undergrad with a love for code! I&apos;m
          currently learning as much as I possibly can, keeping up with the
          latest technologies and best practices in the software engineering
          world. I have a strong interest in backend systems, distributed
          systems, and cloud computing. I enjoy building scalable and efficient
          systems that solve real-world problems.
          <br />
          <br />
          Nice to meet you!
        </p>
      </div>
    </main>
  );
}
