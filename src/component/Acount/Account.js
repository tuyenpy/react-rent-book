import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import cartLogo from './cart.svg';
import AppContext from '../../Context/AppContext';

const Account = (props) => {
    let { cart, cookies } = useContext(AppContext);
    return <div className="Account">
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
        </ul>
    </div>
}

export default Account;