import { requireAdmin } from "@/lib/auth";
import { localRedirect } from "@/lib/localRedirect";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin) return localRedirect("/login", request);

  const form = await request.formData();
  const action = String(form.get("action") ?? "create");

  if (action === "delete") {
    const id = String(form.get("id") ?? "");
    if (id) await prisma.quizQuestion.delete({ where: { id } }).catch(() => null);
    return localRedirect("/admin/questions", request);
  }

  const topic = String(form.get("topic") ?? "").trim();
  const question = String(form.get("question") ?? "").trim();
  const optionA = String(form.get("optionA") ?? "").trim();
  const optionB = String(form.get("optionB") ?? "").trim();
  const optionC = String(form.get("optionC") ?? "").trim();
  const optionD = String(form.get("optionD") ?? "").trim();
  const correctOption = String(form.get("correctOption") ?? "A");
  const explanation = String(form.get("explanation") ?? "").trim();

  if (!topic || !question || !optionA || !optionB || !optionC || !optionD || !["A", "B", "C", "D"].includes(correctOption)) {
    return localRedirect("/admin/questions?error=required", request);
  }

  await prisma.quizQuestion.create({
    data: {
      topic,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption,
      explanation: explanation || "Túsindirme kiritilmegen."
    }
  });

  return localRedirect("/admin/questions?success=created", request);
}
