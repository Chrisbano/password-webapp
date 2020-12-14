import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="row">
            <div className="header">
                <h1 className="h1">Generate a password</h1>
                <div className="header_text">
                    <h4>
                        Choose the ammount of characters you want than hit generate
                    </h4>
                </div>
            </div>
        </div>
    )
}
export default Header;