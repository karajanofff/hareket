import { RoadSignCard } from "@/components/RoadSignCard";
import { getSigns } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function SignsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const signs = await getSigns();
  const categories = [...new Set(signs.map((s) => s.category))];
  const filtered = category ? signs.filter((s) => s.category === category) : signs;
  return <section className="page"><h1 className="text-4xl font-black text-white">Jol belgileri</h1><p className="mt-2 text-slate-400">SVG belgiler katalogı, mánisi hám qollanılıw ornı.</p><div className="mt-6 flex flex-wrap gap-2"><a className="btn-ghost" href="/signs">Bári</a>{categories.map((c) => <a key={c} className="btn-ghost" href={`/signs?category=${encodeURIComponent(c)}`}>{c}</a>)}</div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filtered.map((s) => <RoadSignCard key={s.code} sign={s} />)}</div></section>;
}
