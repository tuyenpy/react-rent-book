import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import AppContext from '../../Context/AppContext';

const Account = (props) => {
    let [show, setShow] = useState(false);
    let {avatar} = useContext(AppContext).user;
    return <div className="Account">
        <div className="Account-img">
            <img src={avatar} alt="avatar" onClick={() => setShow(!show)}/>

        </div>
        {
            show && <div className="Account-menu">
                <ul>
                    <li>
                        <Link to="/user/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        }
    </div>
}

export default Account;