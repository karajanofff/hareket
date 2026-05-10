import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { localRedirect } from "@/lib/localRedirect";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return localRedirect("/login", request);
  const form = await request.formData();
  const videoLessonId = String(form.get("videoLessonId") || "");
  if (videoLessonId) {
    await prisma.videoProgress.upsert({
      where: { userId_videoLessonId: { userId: user.id, videoLessonId } },
      update: { watched: true },
      create: { userId: user.id, videoLessonId, watched: true }
    });
  }
  return localRedirect("/dashboard", request);
}
