import React from 'react';
import './OurStory.css'

const ourStory = (props) => {
    return (
        <div> 
            <h1 className="story-timeline-title mt-4"> Our Story </h1>

            <div className="container story-timeline text-center d-md-flex">
                <div className="story-timeline__col story-timeline__col--left">
                    <div className="story-timeline__text">
                        <h4><ion-icon name="heart" className="icon icon--sm icon--primary u-bg-grey d-none d-md-block hydrated" role="img" aria-label="heart"></ion-icon>First time we met</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
                    </div>
                    <img className="story-timeline-image" src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/DemoWebsite/OurStory1.jpg" alt="Six happy years" data-aos="zoom-in-right" data-aos-duration="1000" />
                    <div className="story-timeline__text d-md-none">
                        <h4>Five happy years</h4>
                        <p>qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                    <div className="story-timeline__text d-none d-md-block">
                        <h4><ion-icon name="heart" className="icon icon--sm icon--primary u-bg-grey d-none d-md-block hydrated" role="img" aria-label="heart"></ion-icon>She said yes!</h4>
                        <p> qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                </div>

                <div className="story-timeline__col story-timeline__col--right">
                    <img className="story-timeline-image" src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/DemoWebsite/OurStory2.jpg" alt="First time we met" data-aos="zoom-in" data-aos-duration="1000" />
                    <div className="story-timeline__text d-none d-md-block">
                        <h4>Five happy years</h4>
                        <p>George was persistent even back then and once he set eyes on Beth, he knew she was what he wanted. Although Beth resisted at first, she couldn’t help but give into George’s charms. The next five years saw them create many happy memories around the world. From Cape Verde, to Marbella; holidays have always held a special place in their hearts. Their brood grew when Bentley and Lola joined the family and the Willicocks clan became four. Moving into their second home, Beth & George were elated to take the next milestone; but little did Beth know, another one was just around the corner…</p>
                    </div>
                    <div className="story-timeline__text d-md-none">
                        <h4>She said yes!</h4>
                        <p> qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </div>
                    <img className="story-timeline-image" src="https://bgstorageaccount.blob.core.windows.net/bgweddingimages/DemoWebsite/OurStory3.jpg" alt="Said Yes" data-aos="zoom-in-left"  data-aos-duration="1000"/>
                </div>
            </div>
        </div>
    )
}

export default ourStory;