import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import AppContext from '../../Context/AppContext';

const Login = (props) => {
    let { cookies } = useContext(AppContext);
    return <>
        {
            cookies.get('userID') && <Redirect to='/' />
        }
        <div className="Login">
            <form>
                <div className="Login-group">
                    <label>Email</label>
                    <input type="email"
                        placeholder="Please fill email"
                    />
                </div>
                <div className="Login-group">
                    <label>Password</label>
                    <input type="password"
                        placeholder="Please fill email"
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    </>
}

export default Login;