import React from 'react';

const NavBar =  (props) => {
    return( 
        <header className="nav-bar">
            {props.navItems.map((nav, idx) =>
            <a key={idx} href={nav.url}>{nav.name}</a>
            )}
        </header>
    )
}         

export default NavBar