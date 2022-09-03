import React from "react";

const Part = ({part}) => {
    const {name, img, description, minOrder, quantity, availableQuantity, price} = part;
  return (
    <div class="card card-compact w-auto   border rounded-none hover:transitionDelay">
      <figure>
        <img className=" " src={img} alt="parts" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p className="text-start">
          {description}
        </p>
        <p className="text-start">
          Min-Order: {minOrder}
        </p>
        <p className="text-start">
          Quentity : {quantity}
        </p>
        <p className="text-start">
          AvailableQuantity : {availableQuantity}
        </p>
        <p className="text-start">
          Price : $ {price}
        </p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
