import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { Car, LogOut, ShieldCheck } from "lucide-react";

const nav = [
  ["Bas bet", "/"],
  ["Sabaqlar", "/lessons"],
  ["Video dársler", "/videos"],
  ["Jol belgileri", "/signs"],
  ["Test", "/quiz"],
  ["Nátiyjeler", "/results"],
  ["Kabinet", "/dashboard"]
];

export async function Navbar() {
  const user = await getCurrentUser();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 font-bold text-white">
          <span className="grid h-10 w-10 place-items-center rounded bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30"><Car size={22} /></span>
          <span>Road Rules Video</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => <Link key={href} className="rounded px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white" href={href}>{label}</Link>)}
          {user?.role === "ADMIN" && <Link className="rounded px-3 py-2 text-sm text-amber-200 hover:bg-amber-300/10" href="/admin"><ShieldCheck size={15} className="mr-1 inline" />Admin panel</Link>}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <form action="/api/auth/logout" method="post"><button className="btn-ghost" title="Shıǵıw"><LogOut size={17} /></button></form>
          ) : (
            <>
              <Link className="btn-ghost" href="/login">Kirisiw</Link>
              <Link className="btn-primary" href="/register">Dizimnen ótiw</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
