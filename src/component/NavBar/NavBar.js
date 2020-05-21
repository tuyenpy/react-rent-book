import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return <div className="NavBar">
    <ul>
      <li>
        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png" alt="logo" />
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/book'>Book</Link>
      </li>
      <li>
        <Link to='/transaction'>Transaction</Link>
      </li>
      <li>
        <Link to='/document'>Document</Link>
      </li>
    </ul>
  </div>
}

export default NavBar;
