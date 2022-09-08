import React from "react";

const Review = ({ review }) => {
  const { name, image, description, title } = review;

  return (
    <div>
      <div className="shadow-xl rounded p-4">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} />
          </div>
        </div>
        <div>
          <p className="font-bold italic">{description}</p>
        </div>
        <div className="testmional autohor">
          <h4 className="text-2xl font-bold text-primary">{name}</h4>
          <p className="font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
