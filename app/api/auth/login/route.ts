import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { setSession } from "@/lib/auth";
import { loginSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const form = Object.fromEntries(await request.formData());
  const parsed = loginSchema.safeParse(form);
  if (!parsed.success) return NextResponse.redirect(new URL("/login?error=validation", request.url));
  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (!user || !(await bcrypt.compare(parsed.data.password, user.passwordHash))) return NextResponse.redirect(new URL("/login?error=auth", request.url));
  await setSession(user.id);
  return NextResponse.redirect(new URL(user.role === "ADMIN" ? "/admin" : "/dashboard", request.url));
}
