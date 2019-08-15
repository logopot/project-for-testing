import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Button } from '../Button/Button';
import pin from '../../img/pin.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';
import linkedin from '../../img/linkedin.svg';



const Footer = () => {
    return (
        <footer className = "footer">
            <div className = "footer-wrapper">
                <div className = "footer-wrapper-content">
                    {/* <Navigation className = "footer-nav" /> */}
                    <div className = "footer-nav">
                        <ul className = "footer-nav-list">
                            <li><a href="#pricing">Why Novogradnja</a></li>
                            <li><a href="#contact">FAQ</a></li>
                            <li><a href="#contact">Blog</a></li>
                        </ul>
                    </div>
                    <div className = "footer-nav-add">
                        <ul>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                    </div>
                    <div className = "footer-address">
                        <h3>Montenegro Novogradnja</h3>
                        <div className = "footer-address-info">
                            <img src = {pin} alt = "pin" />
                            <span>Njegoseva 10, Tivat</span>
                        </div>
                        <div className = "working-hours">
                            <span>Mon - Fri: 10.00 - 18.00</span>
                            <span>Sat: 10.00 - 16.00</span>
                        </div>
                    </div>

                    <div className = "footer-advertise">
                        <span>Have a property that you would like to advertise?</span>
                        <Button className = "button-footer-list"/>
                    </div>
                </div>
                <div className = "footer-wrpper-social">
                    <img src = {facebook} alt = "facebook" />
                    <img src = {instagram} alt = "instagram" />
                    <img src = {twitter} alt = "twitter" />
                    <img src = {linkedin} alt = "linkedin" />
                </div>
            </div>
            <div className = "footer-copyright">
                <div className = "footer-privacy">
                    <a href = "#">Privacy Policy</a>
                    <a href = "#">General Terms and Conditions</a>
                </div>
                <div className = "footer-reserved">
                    <a href = "#">All rights reserved Novogradnja</a>
                </div>
            </div>
        </footer>
    )
}

export {Footer};