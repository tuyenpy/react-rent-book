import React, { useContext, useReducer, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Login.css';
import AppContext from '../../Context/AppContext';
import close from './close.svg';

const loginURL = "https://rent-book-coderx.herokuapp.com/api/user/login";

const initState = {
    email: "",
    password: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'email': return {
            ...state,
            email: action.value
        };
        case 'password': return {
            ...state,
            password: action.value
        };
        default:
            throw new Error();
    }
}

const Login = (props) => {
    let { cookies } = useContext(AppContext);
    let [state, dispatch] = useReducer(reducer, initState);
    let [state1, setState1] = useState(true);
    const onLogin = (e) => {
        e.preventDefault();
        axios.post(loginURL, {
            ...state
        })
          .then(res => cookies.set('userID', res.data._id))
          .catch(err => console.log(err));
    }
    return <>
        {
            cookies.get('userID') && <Redirect to='/' />
        }
        {
            state1 ? (
        <div className="Login">
            <form>
                <h1>Đăng nhập</h1>
                <img src={close} alt="close" className="close" onClick={() => setState1(false)} />
                <div className="Login-group">
                    <label>Email</label>
                    <input type="email"
                        placeholder="Please fill email"
                        onChange={(e) => dispatch({type: 'email', value: e.target.value})}
                    />
                </div>
                <div className="Login-group">
                    <label>Password</label>
                    <input type="password"
                        placeholder="Please fill email"
                        onChange={(e) => dispatch({type: 'password', value: e.target.value})}
                    />
                </div>
                <button onClick={onLogin}>Login</button>
            </form>
        </div>

            ) : (<Redirect to='/' />)
        }
    </>
}

export default Login;