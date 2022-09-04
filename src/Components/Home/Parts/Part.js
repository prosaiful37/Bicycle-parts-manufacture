import React from "react";

const Part = ({part}) => {
    const {name, img, description, minOrder, quantity, availableQuantity, price} = part;
  return (
    <div class="card card-compact w-auto hover:w-full hover:shadow-xl  border rounded-none">
      <figure>
        <img className="w-auto" src={img} alt="parts" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-primary">{name}</h2>
        <p className="text-start">
          {description}
        </p>
        <h4 className="text-start font-bold">
          Min-Order: {minOrder}
        </h4>
        <h4 className="text-start font-bold">
          Quentity : {quantity}
        </h4>
        <h4 className="text-start font-bold">
          AvailableQuantity : {availableQuantity}
        </h4>
        <h4 className="text-start font-bold">
          Price : <span className="border md:px-4 shadow">$ {price}</span>
        </h4>
        <div class="card-actions">
          <button class="btn btn-primary btn-block text-white hover:btn-accent">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
