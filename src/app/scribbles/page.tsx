import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import { scribbles, externalLinks } from "@/lib/scribbles";

export default function Scribbles() {
  return (
    <div className="flex flex-col flex-1">
      <PageHeader />

      <main className="flex flex-col gap-16 mt-16 pb-24">
        <Link
          href="/"
          className="text-base tracking-widest text-white/70 uppercase hover:text-white transition-colors duration-200 w-fit"
        >
          &larr; Back
        </Link>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs tracking-widest text-white/60 uppercase font-light mb-6">
            Written here
          </h2>

          {scribbles.length === 0 ? (
            <p className="text-sm text-white/70 font-light py-6 border-t border-white/10">
              Haven&apos;t written anything yet but stick around for when I do.
            </p>
          ) : (
            <>
              {scribbles.map((scribble) => (
                <Link
                  key={scribble.slug}
                  href={`/scribbles/${scribble.slug}`}
                  className="group flex items-start justify-between gap-8 border-t border-white/10 py-6 hover:border-white/30 transition-colors duration-200"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-base font-semibold text-white group-hover:text-white/70 transition-colors duration-200 leading-snug">
                      {scribble.title}
                    </span>
                    <span className="text-sm text-white/45 font-light leading-relaxed max-w-lg">
                      {scribble.excerpt}
                    </span>
                  </div>
                  <span className="text-xs text-white/30 font-light shrink-0 pt-1">
                    {scribble.date}
                  </span>
                </Link>
              ))}
              <div className="border-t border-white/10" />
            </>
          )}
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs tracking-widest text-white/60 uppercase font-light mb-6">
            Around the web
          </h2>

          {externalLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-8 border-t border-white/10 py-6 hover:border-white/30 transition-colors duration-200"
            >
              <div className="flex flex-col gap-2">
                <span className="text-base font-semibold text-white group-hover:text-white/70 transition-colors duration-200 leading-snug">
                  {link.title}
                </span>
                <span className="text-xs text-white/30 font-light">
                  {link.authored ? "by me on" : "via"} {link.source} ↗
                </span>
              </div>
              <span className="text-xs text-white/30 font-light shrink-0 pt-1">
                {link.date}
              </span>
            </a>
          ))}
          <div className="border-t border-white/10" />
        </section>
      </main>

      <PageFooter active="scribbles" />
    </div>
  );
}
