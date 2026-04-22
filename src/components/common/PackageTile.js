import StatusPill from './StatusPill';

export function PackageTile({ item }) {
  return (
    <article className="media-tile">
      <div className="media-tile__image media-tile__image--package">
        <div>
          <span className="tile-kicker">Pembelian</span>
          <strong>{item.name}</strong>
        </div>
        <div className="tile-badge">
          <b>{item.sessions}</b>
          <span>Sesi</span>
        </div>
      </div>
      <div className="media-tile__body">
        <div>
          <h4>{item.price}</h4>
          <p>Valid {item.validity}</p>
        </div>
        <StatusPill>{item.status}</StatusPill>
      </div>
    </article>
  );
}

export function DesktopPackageTile({ item, actionLabel = 'Pilih', onAction }) {
  return (
    <article className="desktop-package-tile">
      <div className="desktop-package-tile__hero">
        <div>
          <span className="tile-kicker">Pembelian</span>
          <h4>{item.name}</h4>
        </div>
        <div className="desktop-package-tile__count">
          <strong>{item.sessions}</strong>
          <span>Sesi</span>
        </div>
      </div>
      <div className="desktop-package-tile__body">
        <div>
          <strong>{item.price}</strong>
          <p>Valid {item.validity}</p>
        </div>
        <div className="desktop-package-tile__actions">
          <StatusPill tone="soft">{item.status}</StatusPill>
          {onAction ? (
            <button type="button" className="desktop-inline-button" onClick={onAction}>
              {actionLabel}
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
