import { notFound } from "next/navigation";
import { RoadSign } from "@/components/road-signs";
import { VideoCard } from "@/components/VideoCard";
import { getSigns, getVideos } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function SignDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [signs, videos] = await Promise.all([getSigns(), getVideos()]);
  const sign = signs.find((s) => s.code === id);
  if (!sign) notFound();
  return <section className="page grid gap-8 lg:grid-cols-[360px_1fr]"><aside className="glass grid h-fit place-items-center p-8"><RoadSign type={sign.svgType} className="h-56 w-56" /><span className="badge mt-5">{sign.category}</span></aside><article className="space-y-6"><div className="glass p-8"><h1 className="text-4xl font-black text-white">{sign.name}</h1><p className="mt-3 text-slate-300">{sign.description}</p><div className="mt-6 grid gap-4 md:grid-cols-2"><Info title="Vazifası" text={sign.meaning} /><Info title="Haydawshı ushın" text="Belgi kóringen aymaqta tezlikti, baǵıttı hám ustunlıqtı durıs tańlaw kerek." /><Info title="Jayaú ushın" text="Jol jaǵdayın baqlap, belgilengen qáwipsiz aymaqtan paydalanıw kerek." /><Info title="Real qollanılıwı" text={sign.correctPlacement} /></div></div><div><h2 className="mb-4 text-2xl font-black text-white">Usı belgige baylanıslı video dársler</h2><div className="grid gap-5 md:grid-cols-2">{videos.slice(0, 2).map((v) => <VideoCard key={v.slug} video={v} />)}</div></div></article></section>;
}

function Info({ title, text }: { title: string; text: string }) {
  return <div className="rounded border border-white/10 bg-white/[0.04] p-4"><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm text-slate-400">{text}</p></div>;
}
