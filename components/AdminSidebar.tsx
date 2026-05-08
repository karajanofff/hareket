import Link from "next/link";
import { BarChart3, BookOpen, HelpCircle, Users, Video, Waypoints } from "lucide-react";

const items = [["Dashboard", "/admin", BarChart3], ["Video dársler", "/admin/videos", Video], ["Sabaqlar", "/admin/lessons", BookOpen], ["Jol belgileri", "/admin/signs", Waypoints], ["Sorawlar", "/admin/questions", HelpCircle], ["Paydalanıwshılar", "/admin/users", Users]];

export function AdminSidebar() {
  return <aside className="glass h-fit p-3">{items.map(([label, href, Icon]) => { const I = Icon as typeof Video; return <Link key={String(href)} className="flex items-center gap-3 rounded px-3 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white" href={String(href)}><I size={17} />{String(label)}</Link>; })}</aside>;
}
