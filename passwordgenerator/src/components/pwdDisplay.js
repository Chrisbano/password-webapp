import React from 'react';
import './pwdDisplay.css';
import { useState, useRef } from 'react';
import Button from './container/Button'

const Display = () => {


    const [password, setPassword] = useState('');

    const generateNewPassword = () => {
        let a = "";
        let b = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+=<,>.?/ABCDEFGHIJKLMOPQRSTUVWXYZ";
        let c = 8;

        for(let ma = 0; ma < c; ma++) {
            a += b[Math.floor(Math.random() * b.length)];
        }

        setPassword(a);
    }
    
    return (
        <>
            <div>
                <div className="pwdDisplayBox">
                
                    <div className="password-display">
                        <input type="text" value={password} className="password-display-input" readOnly >

                        </input>
                    </div>
                
                    <div className="buttons">
                        <Button
                            label = "New Password"
                            className="generate-btn"
                            handleClick={generateNewPassword}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Display;