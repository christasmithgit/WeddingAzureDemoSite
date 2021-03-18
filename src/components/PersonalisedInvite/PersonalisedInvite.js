import React from 'react';
import './PersonalisedInvite.css'

const personalisedInvite = (props) => {
    return (

        <div className="invite-hero-image">
        <div className="invite-hero-image-text-container">
            <img src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/DemoWebsite/Envelope.webp" alt="Envelope" className="invite-envelope"/>
            <div className="invite-hero-text-centered pt-3">
                <h1 className="invite-hero-image-text-name"> {props.guestName} </h1>
                {props.guestPartOfWedding === "AllDay" && 
                <p> You are invited to the day and evening of our wedding.</p>  }

                {props.guestPartOfWedding ==="Evening" && 
                <p> You are invited to the evening of our wedding.</p>  }

                <p> We can't wait to celebrate with you </p>
                <p> Love Beth & George x</p>                
            </div>
        </div>
        </div>
    );
}

export default personalisedInvite;