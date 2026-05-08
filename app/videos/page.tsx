import { VideoCard } from "@/components/VideoCard";
import { videoCategories } from "@/data/videoLessons";
import { getCurrentUser } from "@/lib/auth";
import { getVideos } from "@/lib/data";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function VideosPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string }> }) {
  const sp = await searchParams;
  const user = await getCurrentUser();
  const all = await getVideos();
  const watched = user ? await prisma.videoProgress.findMany({ where: { userId: user.id, watched: true } }).catch(() => []) : [];
  const filtered = all.filter((v) => (!sp.category || v.category === sp.category) && (!sp.q || v.title.toLowerCase().includes(sp.q.toLowerCase())));
  return <section className="page"><h1 className="text-4xl font-black text-white">Video dársler</h1><p className="mt-2 text-slate-400">YouTube video sabaqları platforma ishinde kóriń hám progressińizdi belgileń.</p><form className="mt-7 flex flex-wrap gap-3"><input className="input max-w-sm" name="q" placeholder="Izlew..." defaultValue={sp.q} /><button className="btn-primary">Izlew</button></form><div className="mt-5 flex flex-wrap gap-2"><a className="btn-ghost" href="/videos">Bári</a>{videoCategories.map((c) => <a key={c} className="btn-ghost" href={`/videos?category=${encodeURIComponent(c)}`}>{c}</a>)}</div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((v) => <VideoCard key={v.slug} video={v} watched={watched.some((w) => w.videoLessonId === v.id)} />)}</div></section>;
}
