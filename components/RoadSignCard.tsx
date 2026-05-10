import Link from "next/link";
import { RoadSign } from "./road-signs";

type SignCard = {
  code: string;
  name: string;
  category: string;
  description: string;
  meaning: string;
  svgType: string;
};

export function RoadSignCard({ sign }: { sign: SignCard }) {
  const isImage = sign.svgType.startsWith("http");

  return (
    <article className="glass p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="mx-auto mb-4 grid h-32 place-items-center">
        {isImage ? <img src={sign.svgType} alt={sign.name} className="max-h-28 max-w-28 object-contain" /> : <RoadSign type={sign.svgType} className="h-24 w-24" />}
      </div>
      <span className="badge">{sign.category}</span>
      <h3 className="mt-3 text-lg font-bold text-white">{sign.name}</h3>
      <p className="mt-2 min-h-10 text-sm text-slate-400">{sign.description}</p>
      <Link className="btn-ghost mt-5 w-full justify-center" href={`/signs/${sign.code}`}>Belgini ashıw</Link>
    </article>
  );
}
