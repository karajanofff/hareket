import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="page grid min-h-[72vh] place-items-center">
      <form action="/api/auth/register" method="post" className="w-full max-w-lg rounded-lg border border-white/10 bg-white p-8 text-slate-900 shadow-2xl">
        <h1 className="text-3xl font-black text-slate-950">Dizimnen ótiw</h1>
        <p className="mt-3 text-slate-600">
          Akkauntıńız bar ma? <Link className="font-semibold text-cyan-700 underline-offset-4 hover:underline" href="/login">Kirisiw</Link>
        </p>

        <label className="mt-8 block text-sm font-bold text-slate-950">Atı</label>
        <input className="mt-2 w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4" name="name" required />

        <label className="mt-5 block text-sm font-bold text-slate-950">Email</label>
        <input className="mt-2 w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4" name="email" type="email" required />

        <label className="mt-5 block text-sm font-bold text-slate-950">Parol</label>
        <input className="mt-2 w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4" name="password" type="password" required />

        <label className="mt-5 block text-sm font-bold text-slate-950">Paroldı tastıyıqlaw</label>
        <input className="mt-2 w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-500/20 transition focus:border-cyan-500 focus:ring-4" name="confirmPassword" type="password" required />

        <button className="mt-8 w-full rounded bg-cyan-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-cyan-400">Dizimnen ótiw</button>
      </form>
    </section>
  );
}
