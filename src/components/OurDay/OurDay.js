import React from 'react';
import './OurDay.css'

const ourDay = (props) => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="location-title"> Our Day </h1>
            {props.guestPartOfWedding === "AllDay" &&
            <div className="row">
                <div className="location__text location__text--sm ml-auto aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1000">
                    <h6>Wedding Ceremony - 12:00</h6>
                    <h3>St Mary the Virgin Church </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="location__text location__text--sm aos-init aos-animate" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h6>Reception 14:00</h6>
                    <h3>Gate Street Barn</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="location__text location__text--sm ml-auto aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1000">
                    <h6 >Wedding Ceremony - 12:00</h6>
                    <h3>The Evening </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                </div>
            </div>
            }

            {props.guestPartOfWedding === "Evening" && 
            <div className="row">
                  <div className="location__text location__text--sm ml-auto aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1000">
                    <h6 >Wedding Ceremony - 12:00</h6>
                    <h3>The Evening </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                </div>
            </div>
            }

        </div>
    );
}
export default ourDay;