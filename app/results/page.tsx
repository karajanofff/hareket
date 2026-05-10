import { ProgressChart } from "@/components/ProgressChart";
import { StatCard } from "@/components/StatCard";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Award, BarChart3, CheckCircle2, Video } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ResultsPage() {
  const user = await getCurrentUser();
  const results = user ? await prisma.quizResult.findMany({ where: { userId: user.id }, orderBy: { createdAt: "asc" } }).catch(() => []) : [];
  const watched = user ? await prisma.videoProgress.count({ where: { userId: user.id, watched: true } }).catch(() => 0) : 0;
  const avg = results.length ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length) : 0;
  const best = results.length ? Math.round(Math.max(...results.map((r) => r.percentage))) : 0;
  const chart = results.map((r, i) => ({ name: `${i + 1}`, value: Math.round(r.percentage) }));
  return (
    <section className="page space-y-8">
      <h1 className="text-4xl font-black text-white">Nátiyjeler</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Test tariyxı" value={results.length} icon={BarChart3} />
        <StatCard title="Ortasha nátiyje" value={`${avg}%`} icon={CheckCircle2} />
        <StatCard title="Eń jaqsı nátiyje" value={`${best}%`} icon={Award} />
        <StatCard title="Kórilgen video sabaqlar" value={`${watched}/12`} icon={Video} />
      </div>
      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-black text-white">Ilgerilew grafikası</h2>
        <ProgressChart data={chart.length ? chart : [{ name: "Baslaw", value: 0 }]} type="line" />
      </div>
    </section>
  );
}
