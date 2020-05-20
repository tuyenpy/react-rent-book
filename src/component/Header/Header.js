import React from 'react';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import Account from '../Acount/Account';

const Header = (props) => {
    return <div className="Header">
        <NavBar />
        <Account />
    </div>
}

export default Header;