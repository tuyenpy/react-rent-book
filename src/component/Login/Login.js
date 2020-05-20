import React from 'react';
import './Login.css';

const Login = (props) => {
    return <div className="Login">
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
}

export default Login;