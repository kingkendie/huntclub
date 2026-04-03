import { useState } from 'react'
import Nav from './components/Nav'
import EventsSection from './components/EventsSection'
import HomeSection from './components/HomeSection'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div>
      <Nav onNavigate={setCurrentSection} />
      
      {currentSection === 'home' && <HomeSection />}
      {currentSection === 'events' && <EventsSection />}

      <footer>
        <a href="https://www.instagram.com/huntclubhuntclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
          IG
        </a>
      </footer>
    </div>
  )
}

export default App