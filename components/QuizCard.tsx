"use client";

import { useMemo, useState } from "react";

type Q = { id: string; question: string; optionA: string; optionB: string; optionC: string; optionD: string; correctOption: string; explanation: string };

export function QuizCard({ questions }: { questions: Q[] }) {
  const picked = useMemo(() => [...questions].sort(() => 0.5 - Math.random()).slice(0, 10), [questions]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const score = picked.filter((q) => answers[q.id] === q.correctOption).length;
  async function finish() {
    await fetch("/api/quiz", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers }) });
    setDone(true);
  }
  if (done) return <div className="glass p-8 text-center"><p className="text-5xl font-black text-cyan-200">{score}/10</p><p className="mt-3 text-slate-300">Sizdiń nátiyjeńiz: {Math.round(score * 10)}%. Ázizirek temalardı video sabaqlar arqalı tákirarlań.</p></div>;
  return <div className="space-y-5">{picked.map((q, idx) => <div key={q.id} className="glass p-5"><div className="mb-3 flex justify-between text-sm text-slate-400"><span>Soraw {idx + 1}/10</span><span>{answers[q.id] ? "Juwap berildi" : "Juwap kútilmekte"}</span></div><h3 className="font-semibold text-white">{q.question}</h3><div className="mt-4 grid gap-2 sm:grid-cols-2">{(["A", "B", "C", "D"] as const).map((key) => <button key={key} onClick={() => setAnswers({ ...answers, [q.id]: key })} className={`rounded border px-4 py-3 text-left text-sm ${answers[q.id] === key ? "border-cyan-300 bg-cyan-300/15 text-white" : "border-white/10 bg-white/[0.03] text-slate-300"}`}>{key}. {q[`option${key}`]}</button>)}</div>{answers[q.id] && <p className="mt-3 text-sm text-slate-400">{answers[q.id] === q.correctOption ? "Durıs juwap." : "Nadurıs juwap."} {q.explanation}</p>}</div>)}<button disabled={Object.keys(answers).length < picked.length} onClick={finish} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-50">Nátiyjeni kóriw</button></div>;
}
