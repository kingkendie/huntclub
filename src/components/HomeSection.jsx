import { useState } from 'react';

export default function HomeSection({ onUnlock}) {
    const [inputSequence, setInputSequence] = useState([]);

    return (
        <main>
            <h1 className="logo">huntclubhuntclub</h1>
            <p className="subtitle">its baaack</p>

            <a href="https://maps.app.goo.gl/kuS3gPNp8xCGPReZ7" target="_blank" rel="noreferrer">
                <img src="/images/pumpkinflyer.jpeg" alt="christian girl autumn pt 2 flyer" className="flyer"/>
            </a>

            <div className="description">
                <p>free - click flyer for address</p>
                <br />
                <p>dress and come pumpkin spice pls</p>
                <br />
                <p>drinks provided??!?!?!??!!?</p>
                <br />
                <p></p>
                <br />
                <p>:O</p>
            </div>
        </main>
    );
}