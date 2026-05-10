import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { setSession } from "@/lib/auth";
import { registerSchema } from "@/lib/validation";
import { localRedirect } from "@/lib/localRedirect";

export async function POST(request: Request) {
  const form = Object.fromEntries(await request.formData());
  const parsed = registerSchema.safeParse(form);
  if (!parsed.success) return localRedirect("/register?error=validation", request);
  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (exists) return localRedirect("/register?error=exists", request);
  const user = await prisma.user.create({ data: { name: parsed.data.name, email: parsed.data.email, passwordHash: await bcrypt.hash(parsed.data.password, 10) } });
  await setSession(user.id);
  return localRedirect("/dashboard", request);
}
