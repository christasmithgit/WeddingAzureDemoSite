import React from 'react';
import './GiftSection.css'

const giftSection = (props) => {
    return (
        <div className="giftlist-hero-image">

        <div className="giftlist-hero-image-text">
            <h1> Gift List</h1>

            <p className="alert alert-info" role="alert"> Thank you very much to everyone who has already kindly purchased from our gift list. We are very grateful and will send out formal thank yous after the wedding. </p>


            <img className="gift-list-image" src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/honeymoon1.jpeg" alt="..."/>

            <p> In order to make our dreams come true, </p>
            <p> We’d love to go on a honeymoon for a week or two.</p>
            <p> Instead of a dinner set, a vase or a bowl, </p>
            <p>A financial contribution would make our wedding experience whole.</p>
            <p> We’ve created a bank account to save our honeymoon money,</p>
            <p className="giftlist-hero-image-text-last">We really appreciate it, and we can’t wait to go somewhere sunny! </p>

            <a target="_blank"  rel="noreferrer"  href="https://www.weddingshop.com/" className="gift-list-button"> Go to gift list </a>
        </div>
    </div>
    );
}

export default giftSection