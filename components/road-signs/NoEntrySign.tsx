export function NoEntrySign({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 120 120" className={className}><circle cx="60" cy="60" r="50" fill="#dc2626" stroke="#fff" strokeWidth="5"/><rect x="25" y="51" width="70" height="18" rx="3" fill="#fff"/></svg>;
}
