import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <PageHeader />

      <main className="flex flex-1 w-full flex-col justify-end pb-25">
        <div className="flex w-full items-start justify-between gap-8">
          <h1 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-tight tracking-tight max-w-[500px]">
            I build websites, backend systems
            <br />
            &amp; APIs that scale.
          </h1>

          <p className="max-w-[600px] text-[15px] leading-relaxed text-white/55 font-light text-right">
            I&apos;m a computer science undergrad with a love for code!
            I&apos;m currently learning as much as I possibly can, keeping up with the latest technologies and best practices in the software engineering world.
            I have a strong interest in backend systems, distributed systems, and cloud computing.
            I enjoy building scalable and efficient systems that solve real-world problems.
            <br />
            <br />
            Nice to meet you!
          </p>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
