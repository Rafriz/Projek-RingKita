function StatusPill({ children, tone = 'default' }) {
  return <span className={`status-pill status-pill--${tone}`}>{children}</span>;
}

export default StatusPill;
