"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts";

export function ProgressChart({ data, type = "bar" }: { data: Array<{ name: string; value: number }>; type?: "bar" | "line" }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        {type === "line" ? (
          <LineChart data={data}><CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" /><XAxis dataKey="name" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip contentStyle={{ background: "#0b1220", border: "1px solid rgba(255,255,255,.12)", color: "#fff" }} /><Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} /></LineChart>
        ) : (
          <BarChart data={data}><CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" /><XAxis dataKey="name" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip contentStyle={{ background: "#0b1220", border: "1px solid rgba(255,255,255,.12)", color: "#fff" }} /><Bar dataKey="value" fill="#22d3ee" radius={[4, 4, 0, 0]} /></BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
