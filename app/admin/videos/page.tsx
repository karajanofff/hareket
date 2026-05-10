import { AdminSidebar } from "@/components/AdminSidebar";
import { DataTable } from "@/components/DataTable";
import { videoCategories } from "@/data/videoLessons";
import { requireAdmin } from "@/lib/auth";
import { getVideos } from "@/lib/data";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminVideosPage() {
  const admin = await requireAdmin();
  if (!admin) redirect("/login");
  const videos = await getVideos();
  return <section className="page grid gap-6 lg:grid-cols-[260px_1fr]"><AdminSidebar /><div className="space-y-8"><div><h1 className="text-4xl font-black text-white">Video sabaqlardı basqarıw</h1><p className="mt-2 text-slate-400">YouTube siltemesin qosıń, video ID hám video súwreti avtomatik jaratıladı.</p></div><form action="/api/videos" method="post" className="glass grid gap-4 p-6 md:grid-cols-2"><input className="input" name="title" placeholder="Tema atı" required /><input className="input" name="youtubeUrl" placeholder="YouTube video siltemesi" required /><textarea className="input md:col-span-2" name="description" placeholder="Sıpatlama" required /><select className="input" name="category">{videoCategories.map((c) => <option key={c}>{c}</option>)}</select><input className="input" name="level" placeholder="Dáreje" required /><input className="input" name="duration" placeholder="Dawamlılıq" required /><input className="input" name="order" type="number" defaultValue={videos.length + 1} required /><button className="btn-primary justify-center md:col-span-2">Video sabaq qosıw</button></form><DataTable headers={["Tema", "Kategoriya", "Dáreje", "Dawamlılıq"]} rows={videos.map((v) => [v.title, v.category, v.level, v.duration])} /></div></section>;
}
