import Link from "next/link";
import { ProgressChart } from "@/components/ProgressChart";
import { StatCard } from "@/components/StatCard";
import { getCurrentUser } from "@/lib/auth";
import { getVideos } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import { percent } from "@/lib/utils";
import { BookOpen, CheckCircle2, Gauge, Video } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const videos = await getVideos();
  const watched = user ? await prisma.videoProgress.findMany({ where: { userId: user.id, watched: true }, include: { videoLesson: true } }).catch(() => []) : [];
  const results = user ? await prisma.quizResult.findMany({ where: { userId: user.id } }).catch(() => []) : [];
  const avg = results.length ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length) : 0;
  const next = videos.find((v) => !watched.some((w) => w.videoLessonId === v.id)) ?? videos[0];
  return (
    <section className="page space-y-8">
      <div>
        <h1 className="text-4xl font-black text-white">Kabinet</h1>
        <p className="mt-2 text-slate-400">{user ? `${user.name}, oqıw ilgerilewińiz.` : "Ilgerilewdi saqlaw ushın kiriń."}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Kórilgen video sabaqlar" value={watched.length} icon={Video} />
        <StatCard title="Ulıwma ilgerilew" value={`${percent(watched.length, videos.length)}%`} icon={Gauge} />
        <StatCard title="Ortasha nátiyje" value={`${avg}%`} icon={CheckCircle2} />
        <StatCard title="Tamamlanǵan sabaqlar" value="6" icon={BookOpen} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="glass p-6">
          <h2 className="mb-4 text-2xl font-black text-white">Ilgerilew grafikası</h2>
          <ProgressChart data={[{ name: "Video sabaq", value: percent(watched.length, videos.length) }, { name: "Test", value: avg }, { name: "Sabaq", value: 45 }]} />
        </div>
        <aside className="glass p-6">
          <h2 className="text-xl font-bold text-white">Usınılatúǵın sabaq</h2>
          <p className="mt-3 text-slate-300">{next?.title}</p>
          <Link className="btn-primary mt-5 w-full justify-center" href={`/videos/${next?.slug ?? ""}`}>Dawam etiw</Link>
          <p className="mt-6 text-sm text-slate-400">Sońǵı belsendilik: {watched.at(-1)?.videoLesson.title ?? "Házirge shekem joq"}</p>
        </aside>
      </div>
    </section>
  );
}
