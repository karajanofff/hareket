export function StopSign({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 120 120" className={className}><polygon points="35,8 85,8 112,35 112,85 85,112 35,112 8,85 8,35" fill="#dc2626" stroke="#fff" strokeWidth="7"/><text x="60" y="70" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff">STOP</text></svg>;
}
