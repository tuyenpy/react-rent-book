import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBarLeft.css';
import cartLogo from './cart.svg';
import AppContext from '../../Context/AppContext';
import Account from '../Account/Account';

const NavBarLeft = (props) => {
    let { cart, cookies } = useContext(AppContext);
    return <div className="NavBarLeft">
        <ul>
            <li>
                <Link to='/cart'>
                    <img src={cartLogo} alt='cart' /><span>{cart}</span>
                </Link>
            </li>
            {
                !cookies.get('userID') &&
                <>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                </>
            }
            <li>
                {
                    cookies.get('userID') && <Account />
                }

            </li>
        </ul>
    </div>
}

export default NavBarLeft;