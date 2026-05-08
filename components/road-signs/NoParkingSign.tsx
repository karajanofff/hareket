export function NoParkingSign({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 120 120" className={className}><circle cx="60" cy="60" r="50" fill="#2563eb" stroke="#dc2626" strokeWidth="8"/><path d="M28 92 92 28" stroke="#dc2626" strokeWidth="9"/><text x="60" y="78" textAnchor="middle" fontSize="52" fontWeight="900" fill="#fff">P</text></svg>;
}
