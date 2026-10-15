import { useEffect } from 'react'
import events from '../data/events'
import EventCard from './EventCard'

const sorted = [...events].sort((a, b) => new Date(b.date) - new Date(a.date))

function EventsSection({ onViewSite }){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                } else {
                    entry.target.classList.remove('visible')
                }
            })
        }, { threshold: 0.1 })

        setTimeout(() => {
            document.querySelectorAll('.event-card').forEach(el => observer.observe(el))
        }, 100)

        return () => observer.disconnect()
    }, [])

    return (
        <section>
            <h2 className="section-title">Past Events</h2>

            <div className="events-grid">
                {sorted.map(event => (
                    <EventCard key={event.id} event={event} onViewSite={onViewSite} />
                ))}
            </div>
        </section>
    )
}

export default EventsSection