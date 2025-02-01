import { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [searchBox, setSearchBox] = useState("")
    const navigate = useNavigate()
    function handleSearch() {
        if(searchBox.trim().length !== 0) {
            navigate('/search-results', {state: searchBox})
        }
    }
    return (
        <>
            <div className='navbarContainer'>
                <a href='/'><img src="/Marvel_Logo.svg" alt="" className='logo'/></a>
                <div className='searchContainer'>
                    <input 
                        type="text" 
                        className='searchInput' 
                        placeholder='Search...'
                        value={searchBox}
                        onChange={(e) => setSearchBox(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
                    />
                    <button className='icon'><img src="/search.svg" alt="" onClick={handleSearch} /></button>
                </div>
                <a href="/profile"><img src="/profile.svg" alt=""/></a>
            </div>
        </>
    )
}