import Link from "next/link";
import { BookOpen } from "lucide-react";

export function LessonCard({ lesson, progress = 0 }: { lesson: { slug: string; title: string; description: string; order: number }; progress?: number }) {
  return <article className="glass p-5"><div className="mb-4 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded bg-blue-400/15 text-blue-200"><BookOpen size={20} /></span><span className="text-sm text-slate-400">Sabaq {lesson.order}</span></div><h3 className="text-xl font-bold text-white">{lesson.title}</h3><p className="mt-2 min-h-12 text-sm text-slate-400">{lesson.description}</p><div className="mt-5 h-2 rounded bg-white/10"><div className="h-full rounded bg-cyan-300" style={{ width: `${progress}%` }} /></div><Link className="btn-primary mt-5" href={`/lessons/${lesson.slug}`}>Sabaqtı ashıw</Link></article>;
}
