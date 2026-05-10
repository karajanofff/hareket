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

  for (const email of ["student@example.com", "driver@example.com"]) {
    await prisma.user.upsert({
      where: { email },
      update: {},
      create: { name: email.split("@")[0], email, passwordHash: userHash, role: "USER" }
    });
  }

  for (const lesson of lessons) {
    await prisma.lesson.upsert({ where: { slug: lesson.slug }, update: lesson, create: lesson });
  }

  for (const video of videoLessons) {
    await prisma.videoLesson.upsert({ where: { slug: video.slug }, update: video, create: video });
  }

  for (const sign of roadSigns) {
    await prisma.roadSign.upsert({ where: { code: sign.code }, update: sign, create: sign });
  }

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
