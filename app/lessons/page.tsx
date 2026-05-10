import { LessonCard } from "@/components/LessonCard";
import { getLessons } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function LessonsPage() {
  const lessons = await getLessons();
  return <section className="page"><h1 className="text-4xl font-black text-white">Sabaqlar</h1><p className="mt-2 text-slate-400">Sabaqlar dizimi, grafikalıq túsindirmeler hám qáwipsiz háreket boyınsha tiykarǵı túsinikler.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{lessons.map((lesson) => <LessonCard key={lesson.slug} lesson={lesson} progress={lesson.order * 12} />)}</div></section>;
}
