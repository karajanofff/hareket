export function MainRoadSign({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 120 120" className={className}><rect x="25" y="25" width="70" height="70" transform="rotate(45 60 60)" fill="#facc15" stroke="#fff" strokeWidth="7"/><rect x="34" y="34" width="52" height="52" transform="rotate(45 60 60)" fill="none" stroke="#111827" strokeWidth="2"/></svg>;
}
