import { AdminSidebar } from "@/components/AdminSidebar";
import { DataTable } from "@/components/DataTable";
import { requireAdmin } from "@/lib/auth";
import { getLessons } from "@/lib/data";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminLessonsPage() {
  if (!(await requireAdmin())) redirect("/login");
  const lessons = await getLessons();
  return <section className="page grid gap-6 lg:grid-cols-[260px_1fr]"><AdminSidebar /><div><h1 className="mb-8 text-4xl font-black text-white">Sabaqlardı basqarıw</h1><DataTable headers={["Order", "Title", "Slug"]} rows={lessons.map((l) => [l.order, l.title, l.slug])} /></div></section>;
}
