import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { lessons } from "../data/lessons";
import { videoLessons } from "../data/videoLessons";
import { roadSigns } from "../data/roadSigns";
import { quizQuestions } from "../data/quizQuestions";

const prisma = new PrismaClient();

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

  await prisma.quizQuestion.deleteMany();
  await prisma.quizQuestion.createMany({ data: quizQuestions });
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
