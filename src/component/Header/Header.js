import React from 'react';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import NavBarLeft from '../NavbarLeft/NavBarLeft';

const Header = (props) => {
    return <div className="Header">
        <NavBar />
        <NavBarLeft />
    </div>
}

export default Header;