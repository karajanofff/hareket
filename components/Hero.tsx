"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Route, TrafficCone } from "lucide-react";
import { RoadSign } from "./road-signs";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="road-lines absolute inset-x-0 bottom-0 h-56 opacity-40" />
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="inline-flex items-center gap-2 rounded border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100"><TrafficCone size={16} /> Qáwipsiz háreketti úyretiw platforması</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">Kompyuter grafikası járdeminde jol háreketi qaǵıydaların úyreniw platforması</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Video sabaqlar, jol belgileri, grafikalıq materiallar hám test moduli arqalı qáwipsiz háreket mádeniyatın qáliplestiriwshi sanlı oqıw ortalıǵı.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/videos"><Play size={18} />Video sabaqlardı kóriw</Link>
            <Link className="btn-ghost" href="/signs">Jol belgilerin úyreniw</Link>
            <Link className="btn-ghost" href="/quiz">Test tapsırıw</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-4 top-6 z-10 glass p-4"><RoadSign type="stop" className="h-20 w-20" /></div>
          <div className="absolute right-4 top-20 z-10 glass p-4"><RoadSign type="speed" className="h-20 w-20" /></div>
          <div className="absolute bottom-20 left-8 z-10 glass p-4"><RoadSign type="pedestrian" className="h-20 w-20" /></div>
          <div className="absolute bottom-8 right-8 z-10 glass w-64 p-4">
            <div className="grid aspect-video place-items-center rounded bg-slate-950 ring-1 ring-cyan-300/30"><Play className="text-cyan-200" size={42} /></div>
            <p className="mt-3 text-sm font-semibold text-white">Video sabaq kórinisi</p>
            <div className="mt-3 h-2 rounded bg-white/10"><div className="h-full w-2/3 rounded bg-cyan-300" /></div>
          </div>
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[230px] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-t-full bg-gradient-to-b from-slate-700 to-slate-950 shadow-2xl ring-1 ring-white/10">
            <div className="absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,#facc15_0_34px,transparent_34px_62px)]" />
            <div className="absolute bottom-24 left-1/2 h-24 w-14 -translate-x-1/2 rounded-t-2xl rounded-b bg-cyan-300 shadow-glow">
              <div className="mx-auto mt-3 h-8 w-9 rounded-t bg-slate-950/60" />
              <div className="absolute bottom-2 left-2 h-3 w-3 rounded-full bg-slate-950" />
              <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full bg-slate-950" />
            </div>
            <Route className="absolute -right-10 top-36 text-cyan-200" size={44} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
