import React from 'react';
import { Navigation } from '../Navigation/Navigation';



const Header = () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.height = "70px";
        document.getElementById("header").style.backgroundColor = "#24345c";
      } else {
        document.getElementById("header").style.height = "100px";
        document.getElementById("header").style.backgroundColor = "transparent";
      }
    }

    


    return (
        <header id = "header" className = "header">
            <div className = "wrapper">
                  <Navigation />
              
              
            </div>
        </header>
    )
}

export {Header};