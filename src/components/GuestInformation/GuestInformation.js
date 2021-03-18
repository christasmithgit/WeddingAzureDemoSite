
import React from 'react';

const guestInformation = () => {
    return (
        <div>
            <section className="mt-5 mb-5">
            <div className="container">
            <h1 className="mb-5 text-center"> Guest Information </h1>
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-6 offset-lg-1">				
                        <div className="text-block" data-aos="zoom-in-right">
                            <h3 className="text-block__title text-block__title--alt">01/ Transport</h3>
                            <div className="text-block__content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tortor vestibulum, accumsan ligula ut, lobortis nisl. Curabitur sit amet mollis tellus vel.</p>
                                <p>Donec congue libero felis, cursus viverra ex tristique quis. Integer in mauris commodo turpis imperdiet luctus. Phasellus congue pharetra tristique. Pellentesque a ultricies mi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <img src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/DemoWebsite/Transport-min.JPG" data-aos="zoom-in-left" alt="A car" />
                    </div>
                </div>
            </div>
        </section>
    
        <section className="mt-5 mb-5 u-bg-half-grey u-bg-half-grey--lg u-pt-3 u-pb-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-5 offset-lg-1">
                        <img src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/DemoWebsite/Resturant-min.JPG" className="u-mb-2" data-aos="zoom-in-right" alt="A resturant" />
                    </div>
                    <div className="col-md-6">
                        <div className="text-block" data-aos="zoom-in-left">
                            <h3 className="text-block__title text-block__title--alt">02/ Local Ameneties</h3>
                            <div className="text-block__content">
                            <h4> Pubs </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tortor vestibulum, accumsan ligula ut, lobortis nisl. Curabitur sit amet mollis tellus vel. Donec congue libero felis, cursus viverra ex tristique quis. Integer in mauris commodo turpis imperdiet luctus. Phasellus congue pharetra tristique.</p>
                             <h4> Resturants </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tortor vestibulum, accumsan ligula ut, lobortis nisl. Curabitur sit amet mollis tellus vel. Donec congue libero felis, cursus viverra ex tristique quis. Integer in mauris commodo turpis imperdiet luctus. Phasellus congue pharetra tristique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="u-mt-5 u-mb-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-6 offset-lg-1">
                        <div className="text-block" data-aos="zoom-in-right">
                            <h3 className="text-block__title text-block__title--alt">03/ Accomodation</h3>
                            <div className="text-block__content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tortor vestibulum, accumsan ligula ut, lobortis nisl. Curabitur sit amet mollis tellus vel. Donec congue libero felis, cursus viverra ex tristique quis. Integer in mauris commodo turpis imperdiet luctus. Phasellus congue pharetra tristique. Pellentesque a ultricies.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tortor vestibulum, accumsan ligula ut, lobortis nisl. Curabitur sit amet mollis tellus vel. Donec congue libero felis, cursus viverra ex tristique quis. Integer in mauris commodo turpis imperdiet luctus. Phasellus congue pharetra tristique. Pellentesque a ultricies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <img src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/DemoWebsite/Hotel-min.JPG" data-aos="zoom-in-left" alt="A hotel"/>
                    </div>
                </div>
            </div>
        </section>

        <div className="text-center mt-5 mb-5" data-aos="zoom-in"  data-aos-duration="1000" >
        <h3> Before the day</h3>
        <p>Should you have any questions or queries in the lead up to the wedding please email: weddingemail@gmail.com </p>
        <p> Or alternatively message</p>
        <p> Beth: 1234567890876  or  George: 1234565432 </p>

        <h3> On the day </h3>

        <p>Should you have any questions or queries between 18/08/2021 – 25/08/2021 (including on the day), please contact </p>

        <p> Katherine (Maid of Honour): 029384738293 or Sean (Best Man) 283478392 </p>
    </div>
    </div>
    )
}

export default guestInformation;