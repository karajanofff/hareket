export function PedestrianCrossingSign({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 120 120" className={className}><rect x="14" y="14" width="92" height="92" rx="8" fill="#2563eb" stroke="#fff" strokeWidth="5"/><path d="M34 86h52M42 74l12-20 13 8 11 24M55 54l8 32M62 34a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
