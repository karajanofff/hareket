import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { Car, ShieldCheck, UserCircle } from "lucide-react";

const nav = [
  ["Bas bet", "/"],
  ["Sabaqlar", "/lessons"],
  ["Video sabaqlar", "/videos"],
  ["Jol belgileri", "/signs"],
  ["Test", "/quiz"],
  ["Nátiyjeler", "/results"]
];

export async function Navbar() {
  const user = await getCurrentUser();
  const isAdmin = user?.role === "ADMIN";
  const isUser = user?.role === "USER";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 font-bold text-white">
          <span className="grid h-10 w-10 place-items-center rounded bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30">
            <Car size={22} />
          </span>
          <span>Jol qaǵıydaları</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} className="rounded px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white" href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            className={`flex items-center gap-2 rounded border px-3 py-2 text-sm font-semibold ${
              isAdmin ? "border-amber-300/40 bg-amber-300/15 text-amber-100" : "border-cyan-300/20 bg-white/5 text-white hover:bg-white/10"
            }`}
            href="/api/auth/role?role=ADMIN"
          >
            <ShieldCheck size={18} />
            <span>Admin</span>
          </Link>
          <Link
            className={`flex items-center gap-2 rounded border px-3 py-2 text-sm font-semibold ${
              isUser ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-100" : "border-cyan-300/20 bg-white/5 text-white hover:bg-white/10"
            }`}
            href="/api/auth/role?role=USER"
          >
            <UserCircle size={18} />
            <span>Paydalanıwshı</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
