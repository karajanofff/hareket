import { lessons as lessonFallback } from "@/data/lessons";
import { quizQuestions as questionFallback } from "@/data/quizQuestions";
import { roadSigns as signFallback } from "@/data/roadSigns";
import { videoLessons as videoFallback } from "@/data/videoLessons";
import { prisma } from "./prisma";

export async function getLessons() {
  try { return await prisma.lesson.findMany({ orderBy: { order: "asc" } }); } catch { return lessonFallback.map((l, i) => ({ id: l.slug, createdAt: new Date(), updatedAt: new Date(), ...l })); }
}
export async function getVideos() {
  try { return await prisma.videoLesson.findMany({ orderBy: { order: "asc" } }); } catch { return videoFallback.map((v) => ({ id: v.slug, createdAt: new Date(), updatedAt: new Date(), ...v })); }
}
export async function getSigns() {
  try { return await prisma.roadSign.findMany({ orderBy: { name: "asc" } }); } catch { return signFallback.map((s) => ({ id: s.code, createdAt: new Date(), updatedAt: new Date(), ...s })); }
}
export async function getQuestions() {
  try { return await prisma.quizQuestion.findMany({ orderBy: { createdAt: "asc" } }); } catch { return questionFallback.map((q, i) => ({ id: `q-${i}`, createdAt: new Date(), updatedAt: new Date(), ...q })); }
}
