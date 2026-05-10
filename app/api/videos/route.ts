import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { videoLessonSchema } from "@/lib/validation";
import { extractYouTubeId, getYouTubeThumbnail } from "@/lib/youtube";
import { slugify } from "@/lib/utils";
import { localRedirect } from "@/lib/localRedirect";

export async function POST(request: Request) {
  const admin = await requireAdmin();
  if (!admin) return localRedirect("/login", request);
  const form = Object.fromEntries(await request.formData());
  const parsed = videoLessonSchema.safeParse(form);
  if (!parsed.success) return localRedirect("/admin/videos?error=youtube", request);
  const youtubeId = extractYouTubeId(parsed.data.youtubeUrl)!;
  const slugBase = slugify(parsed.data.title);
  const slug = `${slugBase}-${Date.now().toString(36)}`;
  await prisma.videoLesson.create({
    data: {
      ...parsed.data,
      slug,
      youtubeId,
      thumbnailUrl: getYouTubeThumbnail(youtubeId)
    }
  });
  return localRedirect("/admin/videos", request);
}
