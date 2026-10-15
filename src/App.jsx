import { useState } from 'react'
import Nav from './components/Nav'
import EventsSection from './components/EventsSection'
import HomeSection from './components/HomeSection'
import SecretSection from './components/SecretSection'
import archives from './components/archive'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [archiveKey, setArchiveKey] = useState(null)

  const navigate = (section) => {
    setCurrentSection(section)
    window.scrollTo(0, 0)
  }

  const ArchivedPage = archives[archiveKey]

  return (
    <div>
      <Nav onNavigate={navigate} />

      {currentSection === 'home' && <HomeSection onUnlock={() => navigate('secret')} />}
      {currentSection === 'events' && (
        <EventsSection onViewSite={(key) => { setArchiveKey(key); navigate('archive') }} />
      )}
      {currentSection === 'secret' && <SecretSection />}
      {currentSection === 'archive' && ArchivedPage && <ArchivedPage onBack={() => navigate('events')} />}

      <footer>
        <a href="https://www.instagram.com/huntclubhuntclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
          IG
        </a>
      </footer>
    </div>
  )
}

export default App