export function SpeedLimitSign({ className = "", value = 50 }: { className?: string; value?: number }) {
  return <svg viewBox="0 0 120 120" className={className}><circle cx="60" cy="60" r="48" fill="#fff" stroke="#dc2626" strokeWidth="10"/><text x="60" y="73" textAnchor="middle" fontSize="36" fontWeight="800" fill="#111827">{value}</text></svg>;
}
