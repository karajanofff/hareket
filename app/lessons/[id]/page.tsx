import Link from "next/link";
import { notFound } from "next/navigation";
import { RoadSign } from "@/components/road-signs";
import { getLessons, getVideos } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function LessonDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [lessons, videos] = await Promise.all([getLessons(), getVideos()]);
  const lesson = lessons.find((l) => l.slug === id);
  if (!lesson) notFound();
  const video = videos[(lesson.order - 1) % videos.length];
  return <section className="page grid gap-8 lg:grid-cols-[1fr_340px]"><article className="glass p-8"><span className="badge">Dárs {lesson.order}</span><h1 className="mt-4 text-4xl font-black text-white">{lesson.title}</h1><p className="mt-4 text-lg leading-8 text-slate-300">{lesson.content}</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{["Qaǵıyda", "Grafika", "Qáwipsizlik"].map((x) => <div key={x} className="rounded border border-white/10 bg-white/[0.04] p-4 text-slate-200">{x}</div>)}</div><div className="mt-8 flex gap-3"><Link className="btn-primary" href={`/videos/${video.slug}`}>Video dársqa ótiw</Link><Link className="btn-ghost" href="/quiz">Testqa ótiw</Link></div></article><aside className="glass grid place-items-center p-8"><RoadSign type={lesson.order % 2 ? "stop" : "pedestrian"} className="h-48 w-48" /><p className="mt-4 text-center text-slate-300">Grafikalıq jol belgisi dárs mazmunın tez túsiniwge járdem beredi.</p></aside></section>;
}
