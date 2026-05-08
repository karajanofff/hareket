import { AdminSidebar } from "@/components/AdminSidebar";
import { DataTable } from "@/components/DataTable";
import { requireAdmin } from "@/lib/auth";
import { getQuestions } from "@/lib/data";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminQuestionsPage() {
  if (!(await requireAdmin())) redirect("/login");
  const questions = await getQuestions();
  return <section className="page grid gap-6 lg:grid-cols-[260px_1fr]"><AdminSidebar /><div><h1 className="mb-8 text-4xl font-black text-white">Test sorawların basqarıw</h1><DataTable headers={["Topic", "Question", "Correct"]} rows={questions.map((q) => [q.topic, q.question, q.correctOption])} /></div></section>;
}
