import React from 'react';
// import './Splash.css'
import img1 from './mole.png'
import img2 from './molehill.png'

const Splash = () => {
    
    return (
        <div>
            <div className="bg2">
            <div className="header__body">
            <div className="header__left">
                <div className="header__left__image">
                    <img src = {img1} alt="Header"/>
                </div>
                <h1 >Laxmi Bank</h1>
               </div>
            <div className="header__right">
            <h1 >23℃/11:00AM</h1>
                    </div> 
                     
        </div>
                
            </div>
            <div className="splash">
                <h1>TAP HERE</h1>
            
            <div className= "blink">
                <img src = {img2} alt = "taphand" />
                   
             </div>   
        </div>      
        </div>
    );
};

export default Splash;