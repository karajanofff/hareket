import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getQuestions } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import { quizSubmitSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const parsed = quizSubmitSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Validation" }, { status: 400 });
  const questions = await getQuestions();
  const entries = Object.entries(parsed.data.answers);
  const score = entries.filter(([id, answer]) => questions.find((q) => q.id === id)?.correctOption === answer).length;
  const user = await getCurrentUser();
  if (user) {
    await prisma.quizResult.create({ data: { userId: user.id, score, total: entries.length, percentage: entries.length ? (score / entries.length) * 100 : 0 } }).catch(() => null);
  }
  return NextResponse.json({ score, total: entries.length });
}
