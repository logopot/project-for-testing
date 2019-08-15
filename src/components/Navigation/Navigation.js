import React, {Fragment} from 'react';
import logo from '../../img/logo.svg';
import { Button } from '../Button/Button';
import { Login } from '../Login/Login';
import { Language } from '../Language/Language';
import hamburger from '../../img/mobile-open.svg';


const Navigation = (props) => {


    return (
        // <nav id = "nav" classNameName = {`nav ${props.classNameName}`}>
        //     <ul>
        //         <li><a href="#home">Why Novogradnja</a></li>
        //         <li><a href="#news">FAQ</a></li>
        //         <li><a href="#contact">Blog</a></li>
        //     </ul>
        // </nav>
        <Fragment>
        <a href = "index.html"><img className = "logo" src = {logo} alt = "logo" /></a>
        <nav id = "nav" className = {`nav ${props.classNameName}`}>
            <label htmlFor="show-menu" className="show-menu"><img src = {hamburger} alt = "hamburger icon" /></label>
            <input type="checkbox" id="show-menu" role="button" />
            <div className = "nav-mobile-wrapper">
                <div className = "nav-mobile">
                    <ul id="menu">
                        <li><a href="#home">Why Novogradnja</a></li>
                        <li><a href="#news">FAQ</a></li>
                        <li><a href="#contact">Blog</a></li>
                    </ul>
                    <Button id = "button-nav" className = "button-nav"/>
                    <div className = "nav-right">
                        <Login />
                        <Language />
                    </div>
                </div>
            </div>
        </nav>
        </Fragment>
    )
}

export {Navigation};