import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', backgroundColor: 'orange' }}>
            <span>Swiggy</span>
            <div >
                <span><Link to='/'>Home</Link></span>
                <span><Link to='/about'>About</Link></span>
            </div>
            <button>Logout</button>
        </div>
    )
}

export default Header