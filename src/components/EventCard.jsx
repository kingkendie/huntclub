function EventCard({ event, onViewSite }) {
    return (
        <div className="event-card">
            <span>{event.date}</span>
            <h2>{event.title}</h2>

            {event.link ? (
                <a href={event.link} target="_blank" rel="noreferrer">
                    <img src={event.imageSrc} alt={event.title} />
                </a>
            ) : (
                <img src={event.imageSrc} alt={event.title} />
            )}

            {event.caption && <p>{event.caption}</p>}

            {event.archive && (
                <button className="view-site-btn" onClick={() => onViewSite(event.archive)}>
                    view site →
                </button>
            )}
        </div>
    )
}

export default EventCard