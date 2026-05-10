import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="page grid min-h-[70vh] place-items-center">
      <form action="/api/auth/register" method="post" className="glass w-full max-w-md p-8">
        <h1 className="text-3xl font-black text-white">Dizimnen ótiw</h1>
        <p className="mt-2 text-slate-400">Oqıw ilgerilewińizdi saqlaw ushın akkaunt jaratıń.</p>
        <label className="label mt-6">Atı</label>
        <input className="input" name="name" required />
        <label className="label mt-4">Email</label>
        <input className="input" name="email" type="email" required />
        <label className="label mt-4">Parol</label>
        <input className="input" name="password" type="password" required />
        <label className="label mt-4">Paroldı tastıyıqlaw</label>
        <input className="input" name="confirmPassword" type="password" required />
        <button className="btn-primary mt-6 w-full justify-center">Dizimnen ótiw</button>
        <p className="mt-4 text-sm text-slate-400">Akkauntıńız bar ma? <Link className="text-cyan-200" href="/login">Kirisiw</Link></p>
      </form>
    </section>
  );
}
