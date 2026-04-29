import StatusPill from './StatusPill';

function ScheduleTile({ item, compact, actionLabel = 'Ikut', onAction }) {
  const spotsLeft = item.quota - item.booked;

  return (
    <article className="media-tile">
      <div className="media-tile__image media-tile__image--schedule">
        <div>
          <span className="tile-kicker">{item.date}</span>
          <strong>{item.type}</strong>
        </div>
        <StatusPill tone={item.status === 'Open' ? 'cyan' : 'soft'}>{item.status}</StatusPill>
      </div>
      <div className="media-tile__body media-tile__body--stack">
        <div>
          <h4>{item.time}</h4>
          <p>{item.coach}</p>
        </div>
        <div className="bullet-lines">
          {item.notes.map((note) => (
            <span key={note}>- {note}</span>
          ))}
        </div>
        {!compact ? (
          <div className="media-tile__footer">
            <span>{spotsLeft} slot tersisa</span>
            <button type="button" onClick={onAction}>
              {actionLabel}
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ScheduleTile;
