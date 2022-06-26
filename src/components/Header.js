// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './style.header.css'

const Header = () => {
    return (
        <div className="headerContainer">
            <h2>Call a friend</h2>
            <h4>your friendly contact app</h4>
        </div>
    )
}

export default Header;