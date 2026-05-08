import Link from "next/link";
import { Hero } from "@/components/Hero";
import { VideoCard } from "@/components/VideoCard";
import { RoadSignCard } from "@/components/RoadSignCard";
import { StatCard } from "@/components/StatCard";
import { lessons } from "@/data/lessons";
import { roadSigns } from "@/data/roadSigns";
import { videoLessons } from "@/data/videoLessons";
import { BookOpen, CheckCircle2, Trophy, Video } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="page space-y-12">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard title="Video dársler" value={12} icon={Video} />
          <StatCard title="Jol belgileri" value={25} icon={CheckCircle2} />
          <StatCard title="Test sorawları" value={40} icon={Trophy} />
          <StatCard title="Matnli sabaqlar" value={6} icon={BookOpen} />
        </div>
        <div>
          <div className="mb-5 flex items-end justify-between gap-4"><div><h2 className="text-3xl font-black text-white">Video dársler</h2><p className="text-slate-400">YouTube iframe arqalı platforma ishinde úyreniw.</p></div><Link className="btn-ghost" href="/videos">Bárin kóriw</Link></div>
          <div className="grid gap-5 md:grid-cols-3">{videoLessons.slice(0, 3).map((v) => <VideoCard key={v.slug} video={v} />)}</div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="glass p-8"><h2 className="text-3xl font-black text-white">Test hám progress</h2><p className="mt-3 text-slate-300">Paydalanıwshı video kórgenin belgileydi, test tapsıradı hám kabinetinde ósiw grafiklerin kóredi.</p><Link className="btn-primary mt-6" href="/quiz">Test tapsırıw</Link></div>
          <div className="grid gap-4 sm:grid-cols-2">{roadSigns.slice(0, 4).map((s) => <RoadSignCard key={s.code} sign={s} />)}</div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">{lessons.slice(0, 3).map((l) => <div key={l.slug} className="glass p-5"><h3 className="text-xl font-bold text-white">{l.title}</h3><p className="mt-2 text-sm text-slate-400">{l.description}</p></div>)}</div>
      </section>
    </>
  );
}
