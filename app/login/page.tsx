import Link from "next/link";

export default function LoginPage() {
  return <section className="page grid min-h-[70vh] place-items-center"><form action="/api/auth/login" method="post" className="glass w-full max-w-md p-8"><h1 className="text-3xl font-black text-white">Kirisiw</h1><p className="mt-2 text-slate-400">Platforma kabinetine kiriń.</p><label className="label mt-6">Email</label><input className="input" name="email" type="email" required /><label className="label mt-4">Parol</label><input className="input" name="password" type="password" required /><button className="btn-primary mt-6 w-full justify-center">Kirisiw</button><div className="mt-5 rounded border border-amber-300/20 bg-amber-300/10 p-3 text-sm text-amber-100">Demo admin: admin@example.com / admin12345</div><p className="mt-4 text-sm text-slate-400">Akkaunt joq pa? <Link className="text-cyan-200" href="/register">Dizimnen ótiw</Link></p></form></section>;
}
