import React from "react";

function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore,
}) {
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6 ">
                    <img src={imageURL} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                       <a href={tryDemo}>TryDemo</a>
                       <a href={learnMore} style={{marginLeft:"50px" }}>Learn More</a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}>
                           <img src='/font-awesome-4.7.0/media/images/googlePlayBadge.svg' alt='googlePlay'/>
                        </a>
                        <a href={appStore}>
                           <img src='/font-awesome-4.7.0/media/images/appstoreBadge.svg' alt='appStore' style={{marginLeft:"50px" }}/>
                       </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;