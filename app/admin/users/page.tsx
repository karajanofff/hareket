import { AdminSidebar } from "@/components/AdminSidebar";
import { DataTable } from "@/components/DataTable";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  if (!(await requireAdmin())) redirect("/login");
  const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } }).catch(() => []);
  return <section className="page grid gap-6 lg:grid-cols-[260px_1fr]"><AdminSidebar /><div><h1 className="mb-8 text-4xl font-black text-white">Paydalanıwshılar</h1><DataTable headers={["Atı", "Email", "Roli"]} rows={users.map((u) => [u.name, u.email, u.role])} /></div></section>;
}
