import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, PlayCircle } from "lucide-react";

type Video = { id?: string; slug: string; title: string; description: string; thumbnailUrl: string; category: string; level: string; duration: string; youtubeId: string };

export function VideoCard({ video, watched = false }: { video: Video; watched?: boolean }) {
  return (
    <article className="group overflow-hidden rounded border border-white/10 bg-white/[0.04] shadow-glow transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="relative aspect-video bg-slate-900">
        <Image src={video.thumbnailUrl} alt={video.title} fill className="object-cover opacity-80 transition group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <PlayCircle className="absolute left-4 top-4 text-cyan-200 drop-shadow" size={38} />
        <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs text-white">{video.duration}</span>
        {watched && <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded bg-emerald-500/90 px-2 py-1 text-xs font-semibold text-white"><CheckCircle2 size={14} /> Kórildi</span>}
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2 text-xs"><span className="badge">{video.category}</span><span className="badge-yellow">{video.level}</span></div>
        <h3 className="line-clamp-2 text-lg font-bold text-white">{video.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-400">{video.description}</p>
        <Link className="btn-primary mt-5 w-full justify-center" href={`/videos/${video.slug}`}>Videonı ashıw</Link>
      </div>
    </article>
  );
}
