import { useState } from 'react';

const CORRECT_ORDER = ['m', 'a', 'k', 'a'];

export default function HomeSection({ onUnlock}) {
    const [inputSequence, setInputSequence] = useState([]);

    const handleSecretButtonClick = (key) => {
        const next = [...inputSequence, key];
        const i = next.length - 1;

        if (next[i] !== CORRECT_ORDER[i]) {  // wrong button — reset
            setInputSequence([]);
            return;
        }

        if (next.length === CORRECT_ORDER.length) {  // all 4 correct — redirect
            onUnlock();
        } else {
            setInputSequence(next);  // correct so far — keep going
        }
    };

    return (
        <main>
            <h1 className="logo">huntclubhuntclub</h1>
            <p className="subtitle">This was our last function of the year :'( or is it...</p>

            <a href="https://maps.app.goo.gl/DGG6pFxpTJfjxW6c7" target="_blank" rel="noreferrer">
                <img src="/images/HUNTCLUBFEB7.jpg" alt="current flyer" className="flyer"/>
            </a>

            <div className="description">
                <p>$3 till 10:30 $5 - click flyer for directions</p>
                <br />
                <p>HuntClub presents an experi<button className="secret-btn" onClick={() => handleSecretButtonClick('m')}>m</button>ental collaboration of live visual and atmospheric 
                interventions, unfolding alongside the raw, tribal pulse of electronic sound 
                curated by three DJs.</p>
                <br />
                <p>The space is conceived as an evolving environment, sh<button className="secret-btn" onClick={() => handleSecretButtonClick('a')}>a</button>ped in real time by sound, 
                light, and presence, inviting both artists and attendees to participate in its 
                continuous transformation throughout the night.</p>
                <br />
                <p>Expect more l<button className="secret-btn" onClick={() => handleSecretButtonClick('a')}>a</button>yered, complex rhythms earlier in the night and accelerating 
                tempos later.</p>
                <br />
                <p>This is a space for experimentation, immersion, and collective experience. 
                Hateful ideologies of any <button className="secret-btn" onClick={() => handleSecretButtonClick('k')}>k</button>ind will not be tolerated.</p>
            </div>
        </main>
    );
}