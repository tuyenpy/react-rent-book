import React, { useState } from 'react';
import request from 'superagent';
import axios from 'axios';

import './Signup.css';

//config cloudinary account
import { cloudName, presetName } from '../../config/config';

const createURI = ""


const Signup = (props) => {
    let [path, setPath] = useState();
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const onPhotoSelected = (files) => {
        return new Promise((res, rej) => {
            const url = `https://api.cloudinary.com/v1_1/${
                cloudName
                }/upload`;
            const title = path.value;
    
            for (let file of files) {
                request.post(url)
                    .field('upload_preset', presetName)
                    .field('file', file)
                    .field('multiple', true)
                    .field('tags', title ? `myphotoalbum,${title}` : 'myphotoalbum')
                    .field('context', title ? `photo=${title}` : '')
                    .on('progress', (process) => { })
                    .end((error, response) => {
                        if (error) rej(error);
                        res(response.body.secure_url)
                    });
            }

        })
    }
    const onSignup = async (e) => {
        e.preventDefault();
        let avatar = await onPhotoSelected(path.files);
        let user = {
            avatar,
            name,
            phone,
            email,
            password,
        };
        axios.post(createURI)
          .then()
          .catch();
    }

    return <div className="Signup">
        <form>
            <div className="Signup-group">
                <label>Name</label>
                <input type="text"
                    placeholder="Please fill name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="Signup-group">
                <label>Phone</label>
                <input type="text"
                    placeholder="Please fill phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="Signup-group">
                <label>Email</label>
                <input type="email"
                    placeholder="Please fill email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="Signup-group">
                <label>Password</label>
                <input type="password"
                    placeholder="Please fill password"
                    onChange={(e) => setPassword(e.target.value)}
                />
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
                // onChange={() => onPhotoSelected(path.files)
                // }
                />
            </div>
            <button onClick={onSignup}>Signup</button>
        </form>
    </div>
}

export default Signup;