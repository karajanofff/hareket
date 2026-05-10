import { setSession } from "@/lib/auth";
import { localRedirect } from "@/lib/localRedirect";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const role = url.searchParams.get("role") === "ADMIN" ? "ADMIN" : "USER";
  const user = await prisma.user.findFirst({
    where: { role },
    orderBy: { createdAt: "asc" },
    select: { id: true }
  });

  if (!user) return localRedirect(role === "ADMIN" ? "/login" : "/register", request);

  await setSession(user.id);
  return localRedirect(role === "ADMIN" ? "/admin" : "/dashboard", request);
}
