import React from 'react';
import illustration from '../../img/illustration.svg';



const Plan = () => {
    return (
        <div className = "plan">
            <div className = "plan-wrapper">
                <div className = "plan-wrapper-content">
                    <h1>Choose your plan</h1>
                    <img src = {illustration} alt = "illustration" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export {Plan};