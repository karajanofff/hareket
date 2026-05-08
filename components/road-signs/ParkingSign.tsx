export function ParkingSign({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 120 120" className={className}><rect x="14" y="14" width="92" height="92" rx="8" fill="#2563eb" stroke="#fff" strokeWidth="5"/><text x="60" y="82" textAnchor="middle" fontSize="62" fontWeight="900" fill="#fff">P</text></svg>;
}
