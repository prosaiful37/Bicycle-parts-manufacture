import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const {
    _id,
    name,
    img,
    description,
    minOrder,
    quantity,
    availableQuantity,
    price,
  } = part;
  const navigate = useNavigate();

  //navigate to purchase
  const navigateToPuchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div class="card card-compact w-auto hover:w-full hover:shadow-xl  border rounded-none bg-neutral">
      <figure className="px-10 pt-10">
        <img className="md:w-3/5" src={img} alt="parts" />
      </figure>
      <hr className="" />
      <div class="card-body">
        <h4 class="text-lg text-primary text-start font-bold">{name}</h4>
        <h4 className="text-start font-bold">Min-Order: {minOrder}</h4>
        <h4 className="text-start font-bold">
          AvailableQuantity : {availableQuantity}
        </h4>
        <h4 className="text-start font-bold">
          Price : <span className="border md:px-4 shadow">$ {price}</span>
        </h4>
        <div class="card-actions">
          <button
            onClick={() => navigateToPuchase(_id)}
            class="btn btn-primary btn-block text-white hover:btn-accent"
          >
            Manage Purchases
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
