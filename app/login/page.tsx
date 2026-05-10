import Link from "next/link";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="page grid min-h-[72vh] place-items-center">
      <form action="/api/auth/login" method="post" className="w-full max-w-lg rounded-lg border border-white/10 bg-white p-8 text-slate-900 shadow-2xl">
        <h1 className="text-3xl font-black text-slate-950">Sistemaǵa kiriw</h1>
        <p className="mt-3 text-slate-600">
          Akkaunt ele joq pa? <Link className="font-semibold text-cyan-700 underline-offset-4 hover:underline" href="/register">Dizimnen ótiw</Link>
        </p>

        <label className="mt-8 block text-sm font-bold text-slate-950">Email</label>
        <input className="mt-2 w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4" name="email" type="email" placeholder="admin@example.com" required />

        <label className="mt-5 block text-sm font-bold text-slate-950">Parol</label>
        <input className="mt-2 w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4" name="password" type="password" placeholder="Paroldı kiritiń" required />

        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded bg-cyan-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-cyan-400">
          <LogIn size={18} />
          Kirisiw
        </button>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-600">
          <p className="font-bold text-slate-700">Test maǵlıwmatları:</p>
          <p>Paydalanıwshı: student@example.com / user12345</p>
          <p>Administrator: admin@example.com / admin12345</p>
        </div>
      </form>
    </section>
  );
}
