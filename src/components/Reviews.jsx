import React from "react";

import "../styles/Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="review">
        <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div className="review-text">
          <p>
            "This is a wonderful practice. Everyone in the offices present
            themselves as nothing but professional. Sheley is just a great
            director - nothing but the best. "
          </p>
        </div>
        <div className="credits">
          <p>Dina H. from Palmdale</p>
        </div>
      </div>
      <div className="review">
        <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
        <div className="review-text">
          <p>"Friendly and fun. Willing to work with PT."</p>
        </div>
        <div className="credits">
          <p>Sandra Naiman from Tarzana</p>
          <p className="source">From Google</p>
        </div>
      </div>
      <div className="review">
        <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div className="review-text">
          <p>
            "Everyone here is wonderful. Mary is a genius receptionist! The
            therapists super knowledgeable."
          </p>
        </div>
        <div className="credits">
          <p>Maria De Luna from Palmdale</p>
          <p className="source">From Google</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
