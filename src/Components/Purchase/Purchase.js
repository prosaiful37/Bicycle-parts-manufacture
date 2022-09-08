import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.int";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";

const Purchase = () => {
  const { partId } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  //   const [quentity, setQuentity] = useState(2);

  const [purchase, setPurchase] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${partId}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  // const {
  //   isLoading,
  //   error,
  //   data: purchase,
  // } = useQuery(["purchases"], () =>
  //   fetch(`http://localhost:5000/parts/${partId}`).then((res) => res.json())
  // );

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  // if (error) return "An error has occurred: " + error.message;

  const handleOrderForm = (event) => {
    event.preventDefault();

    const order = {
      name: user.displayName,
      email: user.email,
      partsName: purchase.name,
      price: purchase.price,
      minOrder: purchase.minOrder,
      avaiable: purchase.availableQuantity,
      quantity: event.target.quantity.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };

    axios.post("http://localhost:5000/orders", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast.success('Your Order Added successfully')
        event.target.reset();
      }
    });
  };

  const handleQuentitySubmit = (event) => {
    event.preventDefault();

    const quentityValue = event.target.quentityAdd.value;
    const newQuentityValue = parseInt(quentityValue);

    const minOrder = purchase.minOrder;
    const avaiable = purchase.availableQuantity;

    if (newQuentityValue <= minOrder) {
      toast.error("Not Allow Minimum Quentity");
      return;
    } else if (newQuentityValue >= avaiable) {
      toast.error("Do not allow up avaiableQuentity");
      return;
    }
  };

  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="grid md:grid-cols-2 bg-base-100">
            <div>
              <div className="">
                <img
                  className="md:w-4/5 p-5"
                  src={purchase.img}
                  alt="purchaseimg"
                />
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-primary text-2xl font-bold">
                {purchase.name}
              </h2>
              <h4 className="font-bold my-2">Price : ${purchase.price}</h4>
              <h4 className=" my-2">Min Order: {purchase.minOrder}</h4>
              <h4 className=" my-2">
                Avaiable Order: {purchase.availableQuantity}
              </h4>
              <form onSubmit={handleQuentitySubmit} action="">
                <div class="form-control">
                  <div class="input-group">
                    <input
                      type="number"
                      name="quentityAdd"
                      class="input input-bordered"
                    />
                    <button class="btn btn-secondary hover:bg-primary">
                      Quantity
                    </button>
                  </div>
                </div>
              </form>
              <hr className="my-5" />
              <p className="mt-5">{purchase.description}</p>
              {/* add Modal */}
              <div>
                {/* <!-- The button to open modal --> */}
                <label
                  for="my-modal-3"
                  class="btn modal-button btn-outline rounded-none"
                >
                  Order Now
                </label>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box relative">
                    <label
                      for="my-modal-3"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <div>
                      <h2 className="text-center my-3 font-bold">Order information</h2>
                      <form onSubmit={handleOrderForm} action="">
                        <div class="form-control">
                          
                          <label class="input-group input-group-vertical">
                            <span className="text-primary">Costomer-Name</span>
                            <input
                              type="text"
                              name="userName"
                              placeholder=""
                              value={user.displayName}
                              disabled
                              class="input input-bordered"
                            />
                          </label>
                        </div>
                        <div class="form-control my-2">
                          
                          <label class="input-group input-group-vertical">
                            <span className="text-primary">Email</span>
                            <input
                              type="text"
                              name="userEmail"
                              placeholder=""
                              value={user.email}
                              disabled
                              class="input input-bordered"
                            />
                          </label>
                        </div>
                        <div class="form-control my-2">
                          
                          <label class="input-group input-group-vertical">
                            <span className="text-primary">Product</span>
                            <input
                              type="text"
                              name="partsName"
                              placeholder=""
                              value={purchase.name}
                              disabled
                              class="input input-bordered"
                            />
                          </label>
                        </div>
                        <div class="form-control my-2">
                          
                          <label class="input-group input-group-vertical">
                            <span className="text-primary">Product Price</span>
                            <input
                              type="text"
                              name="price"
                              placeholder=""
                              value={purchase.price}
                              disabled
                              class="input input-bordered"
                            />
                          </label>
                        </div>
                        <div class="form-control my-2">
                          
                          <label class="input-group input-group-vertical">
                            <span className="text-primary">Quantity</span>
                            <input
                              type="number"
                              name="quantity"
                              placeholder="quantity"
                              class="input input-bordered"
                            />
                          </label>
                        </div>
                        <div class="form-control my-2">
                          
                          <label class="input-group input-group-vertical">
                            <span className="text-primary">Phone Number</span>
                            <input
                              type="number"
                              name="phone"
                              placeholder="phone"
                              class="input input-bordered"
                            />
                          </label>
                        </div>
                        <div class="form-control my-2">
                          
                          <label class="input-group input-group-vertical">
                            <span className="text-primary">Address</span>
                            <input
                              type="text"
                              name="address"
                              placeholder="address"
                              class="input input-bordered"
                            />
                          </label>
                        </div>
                        <div className="form-control">
                        <button class="btn btn-secondary btn-outline">Order</button>
                        </div>
                          
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
