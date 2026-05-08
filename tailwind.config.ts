import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        asphalt: "#060914",
        graphite: "#101725",
        cockpit: "#0b1220",
        electric: "#22d3ee",
        trafficRed: "#ef4444",
        trafficYellow: "#facc15",
        trafficGreen: "#22c55e"
      },
      boxShadow: {
        glow: "0 0 36px rgba(34, 211, 238, 0.22)",
        redglow: "0 0 28px rgba(239, 68, 68, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
