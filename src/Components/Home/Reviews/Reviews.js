import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-7">
      <p className="text-center font-bold">Testomonials</p>
      <div class="text-4xl divider divider-primary my-5">
        <h2>What Others Say</h2>
      </div>
      <div class="hero">
        <div class="hero-content text-center">
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {reviews.slice(0, 3).map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
