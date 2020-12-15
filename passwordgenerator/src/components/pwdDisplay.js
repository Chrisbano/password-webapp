import React from 'react';
import './pwdDisplay.css';
import { useState, useRef } from 'react';
import Button from './container/Button'

const Display = () => {


    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    const copyToClipBoard = Ref => {
        Ref.select();
        document.execCommand('copy');
    }

    const generateNewPassword = () => {
        let a = "";
        let b = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+=<,>.?/ABCDEFGHIJKLMOPQRSTUVWXYZ";
        let c = 8; //to be implemented here if we dont get the 
                  //slider

        for(let i = 0; i < c; i++) {
            a += b[Math.floor(Math.random() * b.length)];
        }

        setPassword(a);
    }

    
    

    const copyClipBoard = () => {
        copyToClipBoard(passwordRef.current)
    }

    
    
    
    return (
        <>
            <div>
                <div className="pwdDisplayBox">
                
                    <div className="password-display">
                        <input ref={passwordRef} type="text" value={password} className="password-display-input" readOnly >

                        </input>
                    </div>
                
                    <div className="buttons">
                        <Button
                            label = "New Password"
                            className="generate-btn"
                            handleClick={generateNewPassword}
                        />
                        <Button
                            label = "Copy"
                            className="generate-btn"
                            handleClick={copyClipBoard}
                        />


                    </div>
                </div>
            </div>
        </>
    )
}
export default Display;