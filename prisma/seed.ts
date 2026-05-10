import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { lessons } from "../data/lessons";
import { videoLessons } from "../data/videoLessons";
import { roadSigns } from "../data/roadSigns";
import { quizQuestions } from "../data/quizQuestions";

const prisma = new PrismaClient();

function normalizePedestrianTerm(value: string) {
  return value
    .replaceAll("Jayaú júrginshilerdiń", "Jayaw júriwshilerdiń")
    .replaceAll("jayaú júrginshilerdiń", "jayaw júriwshilerdiń")
    .replaceAll("Jayaú júrginshilerge", "Jayaw júriwshilerge")
    .replaceAll("jayaú júrginshilerge", "jayaw júriwshilerge")
    .replaceAll("Jayaú júrginshilerdi", "Jayaw júriwshilerdi")
    .replaceAll("jayaú júrginshilerdi", "jayaw júriwshilerdi")
    .replaceAll("Jayaú júrginshiler", "Jayaw júriwshiler")
    .replaceAll("jayaú júrginshiler", "jayaw júriwshiler")
    .replaceAll("Jayaú júrginshiniń", "Jayaw júriwshiniń")
    .replaceAll("jayaú júrginshiniń", "jayaw júriwshiniń")
    .replaceAll("Jayaú júrginshige", "Jayaw júriwshige")
    .replaceAll("jayaú júrginshige", "jayaw júriwshige")
    .replaceAll("Jayaú júrginshini", "Jayaw júriwshini")
    .replaceAll("jayaú júrginshini", "jayaw júriwshini")
    .replaceAll("Jayaú júrginshi", "Jayaw júriwshi")
    .replaceAll("jayaú júrginshi", "jayaw júriwshi");
}

async function main() {
  const adminHash = await bcrypt.hash("admin12345", 10);
  const userHash = await bcrypt.hash("user12345", 10);

  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: { name: "Ruslan", role: "ADMIN" },
    create: { name: "Ruslan", email: "admin@example.com", passwordHash: adminHash, role: "ADMIN" }
  });

  await prisma.user.upsert({
    where: { email: "student@example.com" },
    update: { name: "Paydalanıwshı", role: "USER" },
    create: { name: "Paydalanıwshı", email: "student@example.com", passwordHash: userHash, role: "USER" }
  });

  for (const lesson of lessons) {
    await prisma.lesson.upsert({ where: { slug: lesson.slug }, update: lesson, create: lesson });
  }

  await prisma.videoProgress.deleteMany();
  await prisma.videoLesson.deleteMany();
  await prisma.videoLesson.createMany({ data: videoLessons });

  await prisma.roadSign.deleteMany();
  await prisma.roadSign.createMany({ data: roadSigns });

  const questionCount = await prisma.quizQuestion.count();
  if (questionCount === 0) await prisma.quizQuestion.createMany({ data: quizQuestions });

  const existingQuestions = await prisma.quizQuestion.findMany();
  for (const question of existingQuestions) {
    const next = {
      question: normalizePedestrianTerm(question.question),
      optionA: normalizePedestrianTerm(question.optionA),
      optionB: normalizePedestrianTerm(question.optionB),
      optionC: normalizePedestrianTerm(question.optionC),
      optionD: normalizePedestrianTerm(question.optionD),
      explanation: normalizePedestrianTerm(question.explanation),
      topic: normalizePedestrianTerm(question.topic)
    };
    if (
      next.question !== question.question ||
      next.optionA !== question.optionA ||
      next.optionB !== question.optionB ||
      next.optionC !== question.optionC ||
      next.optionD !== question.optionD ||
      next.explanation !== question.explanation ||
      next.topic !== question.topic
    ) {
      await prisma.quizQuestion.update({ where: { id: question.id }, data: next });
    }
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
