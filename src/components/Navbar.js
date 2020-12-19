import React from 'react';

import './Navbar.css';

function Navbar(){


    return (
        <div className="nav-base">
            <div className="nav">
                <h1 className="nav-logo">FShop</h1>
                <ul className="nav-items">
                    <li className="nav-item">About</li>
                    <li className="nav-item">Shop</li>
                </ul>
            </div>
        </div>
    );



}

export default Navbar;