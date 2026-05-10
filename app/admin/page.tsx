import { AdminSidebar } from "@/components/AdminSidebar";
import { StatCard } from "@/components/StatCard";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BarChart3, HelpCircle, Users, Video, Waypoints } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const admin = await requireAdmin();
  if (!admin) redirect("/login");
  const [users, videos, signs, questions, results] = await Promise.all([
    prisma.user.count().catch(() => 0), prisma.videoLesson.count().catch(() => 0), prisma.roadSign.count().catch(() => 0), prisma.quizQuestion.count().catch(() => 0), prisma.quizResult.findMany().catch(() => [])
  ]);
  const avg = results.length ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length) : 0;
  return <section className="page grid gap-6 lg:grid-cols-[260px_1fr]"><AdminSidebar /><div><h1 className="text-4xl font-black text-white">Admin panel</h1><p className="mt-2 text-slate-400">Kontent basqarıw hám platforma statistikası.</p><div className="mt-8 grid gap-4 md:grid-cols-3"><StatCard title="Paydalanıwshılar" value={users} icon={Users} /><StatCard title="Video sabaqlar" value={videos} icon={Video} /><StatCard title="Jol belgileri" value={signs} icon={Waypoints} /><StatCard title="Test sorawları" value={questions} icon={HelpCircle} /><StatCard title="Ortasha nátiyje" value={`${avg}%`} icon={BarChart3} /></div></div></section>;
}
