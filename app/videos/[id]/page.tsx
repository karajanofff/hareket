import Link from "next/link";
import { notFound } from "next/navigation";
import { RoadSignCard } from "@/components/RoadSignCard";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayer } from "@/components/VideoPlayer";
import { getCurrentUser } from "@/lib/auth";
import { getSigns, getVideos } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function VideoDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [videos, signs, user] = await Promise.all([getVideos(), getSigns(), getCurrentUser()]);
  const video = videos.find((v) => v.slug === id);
  if (!video) notFound();
  const related = videos.filter((v) => v.category === video.category && v.slug !== video.slug).slice(0, 3);
  return (
    <section className="page space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <VideoPlayer youtubeId={video.youtubeId} title={video.title} />
          <h1 className="mt-6 text-4xl font-black text-white">{video.title}</h1>
          <p className="mt-3 text-lg leading-8 text-slate-300">{video.description} Bul video sabaqta kompyuter grafikası arqalı real jol jaǵdayları, belgiler hám qáwipsiz háreket principleri túsindiriledi.</p>
        </div>
        <aside className="glass h-fit p-6">
          <span className="badge">{video.category}</span>
          <h2 className="mt-4 text-xl font-bold text-white">Video sabaq haqqında</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Dáreje: {video.level}</li>
            <li>• Dawamlılıq: {video.duration}</li>
            <li>• Tiykarǵı túsinikler: belgi, signal, qáwipsiz aralıq</li>
          </ul>
          <form action="/api/progress" method="post" className="mt-6">
            <input type="hidden" name="videoLessonId" value={video.id} />
            <button className="btn-primary w-full justify-center" disabled={!user}>Kórildi dep belgilew</button>
            {!user && <p className="mt-2 text-xs text-slate-400">Ilgerilewdi saqlaw ushın kiriw kerek.</p>}
          </form>
          <Link className="btn-ghost mt-3 w-full justify-center" href="/quiz">Testke ótiw</Link>
        </aside>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-black text-white">Baylanıslı jol belgileri</h2>
        <div className="grid gap-4 md:grid-cols-3">{signs.slice(0, 3).map((s) => <RoadSignCard key={s.code} sign={s} />)}</div>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-black text-white">Baylanıslı sabaqlar</h2>
        <div className="grid gap-5 md:grid-cols-3">{related.map((v) => <VideoCard key={v.slug} video={v} />)}</div>
      </div>
    </section>
  );
}
