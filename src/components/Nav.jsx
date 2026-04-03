function Nav({ onNavigate }) {
    return (
        <nav>
            <button onClick={() => onNavigate('home')}>HOME</button>
            <button onClick={() => onNavigate('events')}>EVENTS</button>
        </nav>
    )
}

export default Nav