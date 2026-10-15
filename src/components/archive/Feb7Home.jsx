export default function Feb7Home({ onBack }) {
    return (
        <main>
            <button className="back-btn" onClick={onBack}>← back to events</button>
            <h1 className="logo">huntclubhuntclub</h1>
            <p className="subtitle">This was our last function of the year :'( or is it...</p>

            <a href="https://maps.app.goo.gl/DGG6pFxpTJfjxW6c7" target="_blank" rel="noreferrer">
                <img src="/images/HUNTCLUBFEB7.jpg" alt="feb 7 flyer" className="flyer"/>
            </a>

            <div className="description">
                <p>$3 till 10:30 $5 - click flyer for directions</p>
                <br />
                <p>HuntClub presents an experimental collaboration of live visual and atmospheric
                interventions, unfolding alongside the raw, tribal pulse of electronic sound
                curated by three DJs.</p>
                <br />
                <p>The space is conceived as an evolving environment, shaped in real time by sound,
                light, and presence, inviting both artists and attendees to participate in its
                continuous transformation throughout the night.</p>
                <br />
                <p>Expect more layered, complex rhythms earlier in the night and accelerating
                tempos later.</p>
                <br />
                <p>This is a space for experimentation, immersion, and collective experience.
                Hateful ideologies of any kind will not be tolerated.</p>
            </div>
        </main>
    );
}
