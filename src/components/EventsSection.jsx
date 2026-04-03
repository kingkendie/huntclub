import { useEffect } from 'react'
import events from '../data/events'
import EventCard from './EventCard'

function EventsSection(){
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
            <h2>Past Events</h2>

            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    )
}

console.log(events)
export default EventsSection