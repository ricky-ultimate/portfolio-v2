import Link from "next/link";
import { notFound } from "next/navigation";
import { scribbles } from "@/lib/scribbles";

export function generateStaticParams() {
  return scribbles.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scribble = scribbles.find((s) => s.slug === slug);
  if (!scribble) return {};
  return {
    title: `${scribble.title} — Riches Ogigi`,
    description: scribble.excerpt,
  };
}

export default async function ScribblePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scribble = scribbles.find((s) => s.slug === slug);
  if (!scribble) notFound();

  return (
    <main className="flex flex-col gap-12 mt-16 pb-24 max-w-2xl">
      <Link
        href="/scribbles"
        className="text-base tracking-widest text-white/70 uppercase hover:text-white transition-colors duration-200 w-fit"
      >
        &larr; Back
      </Link>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-white">
          {scribble.title}
        </h1>
        <span className="text-xs text-white/30 font-light tracking-wide">
          {scribble.date}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {scribble.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-[15px] leading-8 text-white/65 font-light">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
