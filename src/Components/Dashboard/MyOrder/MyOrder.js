import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.int";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  //   delete item
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaning = orders.filter((order) => order._id !== id);
          setOrders(remaning);
        });
    }
  };
  return (
    <div>
      <div>
        <h2 className="my-3">My All Orders: {orders.length}</h2>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL/NO</th>
              <th>Parts-Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Cancel-item</th>
              <th>Payments</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.partsName}</td>
                <td>$ {order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    class="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-sm btn-success">Pay</button></Link>}
                    {(order.price && order.paid) && <div>
                        <p><span className="text-success">Paid</span></p>
                        <p>TransctionId: <span className="text-success">{order.transctionId}</span></p>

                    </div> 
                    }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
