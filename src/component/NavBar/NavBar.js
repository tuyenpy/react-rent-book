import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import cartLogo from './cart.svg';
import AppContext from '../../Context/AppContext';

const NavBar = (props) => {
  let { cart } = useContext(AppContext);
  return <div className="NavBar">
    <ul>
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
      <li>
        <Link to='/cart'>
          <img src={cartLogo} alt='cart' /><span>{cart}</span>
        </Link>
      </li>
    </ul>
  </div>
}

export default NavBar;
