import { QuizCard } from "@/components/QuizCard";
import { getQuestions } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function QuizPage() {
  const questions = await getQuestions();
  return <section className="page max-w-4xl"><h1 className="text-4xl font-black text-white">Test</h1><p className="mt-2 text-slate-400">Random 10 sawol, 4 variant hám juwaptan keyingi túsindirme.</p><div className="mt-8"><QuizCard questions={questions} /></div></section>;
}
