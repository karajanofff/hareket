import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";
import { prisma } from "./prisma";

const COOKIE_NAME = "road_session";

function secret() {
  return process.env.AUTH_SECRET || "road-rules-video-platform-secret-change-me";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function createSessionToken(userId: string) {
  const payload = `${userId}.${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

export async function setSession(userId: string) {
  const jar = await cookies();
  jar.set(COOKIE_NAME, createSessionToken(userId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function getCurrentUser() {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return getDemoAdmin();
  const parts = token.split(".");
  if (parts.length < 3) return null;
  const signature = parts.pop()!;
  const payload = parts.join(".");
  const expected = sign(payload);
  try {
    if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  const [userId] = payload.split(".");
  return prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, role: true }
  });
}

export async function requireAdmin() {
  const user = await getCurrentUser();
  return user?.role === "ADMIN" ? user : null;
}

async function getDemoAdmin() {
  if (process.env.DEMO_AUTO_ADMIN === "false") return null;

  return prisma.user.findFirst({
    where: { role: "ADMIN" },
    orderBy: { createdAt: "asc" },
    select: { id: true, name: true, email: true, role: true }
  });
}
