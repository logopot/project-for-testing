import React from 'react';
import flag from '../../img/united-kingdom.svg';
import flagMNE from '../../img/montenegro.png';
import flagSRB from '../../img/serbia.png';
import arrow from '../../img/arrow.svg';



const Language = () => {
    return (
        < div className = "language">
            <ul className="languagepicker roundborders large">
                <a href="#en"><li><img src={flag}/></li></a>
                <a href="#mn"><li><img src={flagMNE}/></li></a>
                <a href="#sr"><li><img src={flagSRB}/></li></a>
            </ul>
            <img className = "language-arrow" src = {arrow} />
        </ div>
    )
}

export {Language};