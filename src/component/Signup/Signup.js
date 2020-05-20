import React from 'react';
import './Signup.css';

const Signup = (props) => {
    return <div className="Signup">
        <form>
            <div className="Signup-group">
                <label>Name</label>
                <input type="text"
                    placeholder="Please fill name"
                />
            </div>
            <div className="Signup-group">
                <label>Phone</label>
                <input type="text"
                    placeholder="Please fill phone"
                />
            </div>
            <div className="Signup-group">
                <label>Email</label>
                <input type="email"
                    placeholder="Please fill email"
                />
            </div>
            <div className="Signup-group">
                <label>Password</label>
                <input type="password"
                    placeholder="Please fill password"
                />
            </div>
            <div className="Signup-group">
                <label>Avatar</label>
                <input type="file" />
            </div>
        </form>
    </div>
}

export default Signup;