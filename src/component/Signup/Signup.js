import React, { useState, useReducer } from 'react';
import axios from 'axios';
import onPhotoSelected from '../../action/onUploadCloudinary';
import './Signup.css';

// const createURI = ""
let initUser = {
    name: "",
    phone: "",
    email: "",
    password: "",
}

const reducer = (user, action) => {
    switch (action.type) {
        case 'name': return {
            ...user,
            name: action.value
        };
        case 'phone': return {
            ...user,
            phone: action.value
        };
        case 'email': return {
            ...user,
            email: action.value
        };
        case "password": return {
            ...user,
            password: action.value
        };
        default:
            throw new Error();
    }
}


const Signup = (props) => {
    let [path, setPath] = useState();
    let [user, dispatch] = useReducer(reducer, initUser);

    const onSignup = async (e) => {
        e.preventDefault();
        let avatar = await onPhotoSelected(path);
        user.avatar = avatar;
        console.log(user);
        // axios.post(createURI)
        //   .then()
        //   .catch();
    }

    return <div className="Signup">
        <form>
            <div className="Signup-group">
                <label>Name</label>
                <input type="text"
                    placeholder="Please fill name"
                    onChange={(e) => dispatch({type: 'name', value: e.target.value})}
                />
            </div>
            <div className="Signup-group">
                <label>Phone</label>
                <input type="text"
                    placeholder="Please fill phone"
                    onChange={(e) => dispatch({type: 'phone', value: e.target.value})}                />
            </div>
            <div className="Signup-group">
                <label>Email</label>
                <input type="email"
                    placeholder="Please fill email"
                    onChange={(e) => dispatch({type: 'email', value: e.target.value})}                />
            </div>
            <div className="Signup-group">
                <label>Password</label>
                <input type="password"
                    placeholder="Please fill password"
                    onChange={(e) => dispatch({type: 'password', value: e.target.value})}                />
            </div>
            <div className="Signup-group">
                <label>Avatar</label>
                <input
                    type="file"
                    id="fileupload"
                    accept="image/*"
                    multiple="multiple"
                    ref={fileInputEl =>
                        (setPath(fileInputEl))
                    }
                />
            </div>
            <button onClick={onSignup}>Signup</button>
        </form>
    </div>
}

export default Signup;