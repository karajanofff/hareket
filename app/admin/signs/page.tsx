import { AdminSidebar } from "@/components/AdminSidebar";
import { DataTable } from "@/components/DataTable";
import { requireAdmin } from "@/lib/auth";
import { getSigns } from "@/lib/data";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminSignsPage() {
  if (!(await requireAdmin())) redirect("/login");
  const signs = await getSigns();
  return (
    <section className="page grid gap-6 lg:grid-cols-[260px_1fr]">
      <AdminSidebar />
      <div>
        <h1 className="mb-8 text-4xl font-black text-white">Jol belgilerin basqariw</h1>
        <DataTable headers={["Kod", "Ati", "Kategoriya", "Suwret URL"]} rows={signs.map((s) => [s.code, s.name, s.category, s.svgType])} />
      </div>
    </section>
  );
}
