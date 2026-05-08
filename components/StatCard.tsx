import type { LucideIcon } from "lucide-react";

export function StatCard({ title, value, icon: Icon, tone = "cyan" }: { title: string; value: string | number; icon: LucideIcon; tone?: string }) {
  return <div className="glass flex items-center gap-4 p-5"><div className={`grid h-12 w-12 place-items-center rounded bg-${tone}-400/15 text-${tone}-200 ring-1 ring-${tone}-300/30`}><Icon size={22} /></div><div><p className="text-sm text-slate-400">{title}</p><p className="text-2xl font-bold text-white">{value}</p></div></div>;
}
