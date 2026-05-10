import { useState } from 'react'
import Nav from './components/Nav'
import EventsSection from './components/EventsSection'
import HomeSection from './components/HomeSection'
import SecretSection from './components/SecretSection'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div>
      <Nav onNavigate={setCurrentSection} />
      
      {currentSection === 'home' && <HomeSection onUnlock={() => setCurrentSection('secret')} />}
      {currentSection === 'events' && <EventsSection />}
      {currentSection === 'secret' && <SecretSection />}

      <footer>
        <a href="https://www.instagram.com/huntclubhuntclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
          IG
        </a>
      </footer>
    </div>
  )
}

export default App