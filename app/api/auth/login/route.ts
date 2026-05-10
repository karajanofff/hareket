import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { setSession } from "@/lib/auth";
import { loginSchema } from "@/lib/validation";
import { localRedirect } from "@/lib/localRedirect";

export async function POST(request: Request) {
  const form = Object.fromEntries(await request.formData());
  const parsed = loginSchema.safeParse(form);
  if (!parsed.success) return localRedirect("/login?error=validation", request);
  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (!user || !(await bcrypt.compare(parsed.data.password, user.passwordHash))) return localRedirect("/login?error=auth", request);
  await setSession(user.id);
  return localRedirect(user.role === "ADMIN" ? "/admin" : "/dashboard", request);
}
