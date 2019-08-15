import React from 'react';
import login from '../../img/login.svg';



const Login = () => {
    return (
        <div className = "login">
            <a href = "#">Log in <img src = {login} alt = "login" /></a>
        </div>
    )
}

export {Login};