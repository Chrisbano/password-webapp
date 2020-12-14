import React from 'react';
import Header from './Header';
import Display from './pwdDisplay';
import Button from './container/Button'
import CheckBox from './CheckBox'



const Main = () => {
    const generateNewPassword = () => {
    }

    return (
        <div>
            <Header />
            <Display />
            <CheckBox/>
        </div>
    )
}
export default Main;