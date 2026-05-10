import { AdminSidebar } from "@/components/AdminSidebar";
import { requireAdmin } from "@/lib/auth";
import { getQuestions } from "@/lib/data";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminQuestionsPage({ searchParams }: { searchParams: Promise<{ error?: string; success?: string }> }) {
  if (!(await requireAdmin())) redirect("/login");
  const [questions, params] = await Promise.all([getQuestions(), searchParams]);

  return (
    <section className="page grid gap-6 lg:grid-cols-[260px_1fr]">
      <AdminSidebar />
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-black text-white">Test sorawların basqarıw</h1>
          <p className="mt-2 text-slate-400">Sorawlardı qolmen qosıń, durıs juwaptı belgileń hám kerek emeslerin óshiriń.</p>
        </div>

        {params.error === "required" && <p className="rounded border border-red-300/30 bg-red-500/10 p-3 text-sm text-red-100">Barcha zárúr maydanlardı tolıqtırıń.</p>}
        {params.success === "created" && <p className="rounded border border-emerald-300/30 bg-emerald-500/10 p-3 text-sm text-emerald-100">Soraw qosıldı.</p>}

        <form action="/api/admin/questions" method="post" className="glass grid gap-4 p-6 md:grid-cols-2">
          <input type="hidden" name="action" value="create" />
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Tema
            <input className="input" name="topic" placeholder="Máselen: Svetofor" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            Durıs juwap
            <select className="input" name="correctOption" defaultValue="A">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200 md:col-span-2">
            Soraw
            <textarea className="input min-h-24" name="question" placeholder="Soraw tekstin kiritiń" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            A juwap
            <input className="input" name="optionA" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            B juwap
            <input className="input" name="optionB" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            C juwap
            <input className="input" name="optionC" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200">
            D juwap
            <input className="input" name="optionD" required />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-200 md:col-span-2">
            Túsindirme
            <textarea className="input min-h-20" name="explanation" placeholder="Juwap ne ushın durıs ekenin jazıń" />
          </label>
          <button className="btn-primary justify-center md:col-span-2">Soraw qosıw</button>
        </form>

        <div className="overflow-x-auto rounded border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/10 text-left text-slate-200">
              <tr>
                <th className="px-4 py-3">Tema</th>
                <th className="px-4 py-3">Soraw</th>
                <th className="px-4 py-3">Durıs juwap</th>
                <th className="px-4 py-3 text-right">Ámel</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="border-t border-white/10 text-slate-300">
                  <td className="px-4 py-3 align-top">{q.topic}</td>
                  <td className="px-4 py-3 align-top">{q.question}</td>
                  <td className="px-4 py-3 align-top">{q.correctOption}</td>
                  <td className="px-4 py-3 text-right align-top">
                    <form action="/api/admin/questions" method="post">
                      <input type="hidden" name="action" value="delete" />
                      <input type="hidden" name="id" value={q.id} />
                      <button className="inline-flex items-center gap-2 rounded border border-red-300/30 bg-red-500/10 px-3 py-2 font-semibold text-red-100 hover:bg-red-500/20">
                        <Trash2 size={15} />
                        Óshiriw
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
