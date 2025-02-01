import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <div className='navbarContainer'>
                <a href='/'><img src="/Marvel_Logo.svg" alt="" className='logo'/></a>
                <div className='searchContainer'>
                    <input type="text" className='searchInput' placeholder='Search...'/>
                    <button className='icon'><img src="/search.svg" alt="" /></button>
                </div>
                <a href="/profile"><img src="/profile.svg" alt=""/></a>
            </div>
        </>
    )
}