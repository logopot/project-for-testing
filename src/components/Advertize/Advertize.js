import React from 'react';
import image from '../../img/advertize/computer.png';
import { Button } from '../Button/Button';
import { Banner970x250 } from '../Banners/Banner970x250/Banner970x250';

const Advertize = () => {
    return (
        <div className = "advertize">
            <Banner970x250 />
            <div className = "advertize-wrapper">
                <div className = "content-left">
                    <h2>Have a property that you would like to advertise?</h2>
                    <p className = "content-left-subtitle">We have a quick and easy solution for you.</p>
                    <p>You are developing a Building, a Resort, a Condo Hotel Whatever the type of properties are included 
                        in your development Located in Croatia, in Montenegro, in Serbia It Has Its Place Here!</p>
                    <Button className = "button-dark"/>
                    
                </div>
               
                <div className = "content-right">
                    <img className = "content-right-image" src = {image} alt = "computer" />
                </div>
            </div>
        </div>
    )
}

export {Advertize};