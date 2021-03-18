import React from 'react';
import './Hero.css'

// This is the file for the hero image you see when you open the site. Change the name/date here.
const hero = () => {
    return (
        <div className="hero d-flex align-items-center justify-content-center">
            <div className="hero-text">
                <img className="hero__wreath hero__wreath--up" src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/wreath-white.svg" alt="Beth and George"/>
                <h1 className="hero__title u-font-script aos-init aos-animate" data-aos="zoom-in" data-aos-duration="3000"> Beth  &amp;  George </h1>
                <p className="hero__date aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="3000">August 21, 2021 </p>
                <img src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/wreath-white.svg" className="hero__wreath hero__wreath--down" alt="Beth and George"/>
            </div>
        </div>
    );
}

export default hero;