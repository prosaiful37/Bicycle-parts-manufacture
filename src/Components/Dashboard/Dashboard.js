import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.int";
import logowhite from "../../Images/logo/logo.png";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-3">
          <h2 className="md:text-4xl font-bold text-accent">
            Welcome To our Dashboard{" "}
            <span className="text-primary text-2xl font-sans ">
              <small> Mr.{user.displayName} </small>
            </span>{" "}
          </h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-secondary text-white">
            <li className="">
              <img className="w-auto" src={logowhite} alt="" />
            </li>
            <li className="mb-5">
              <div class="card w-auto shadow">
                <figure>
                  <div class="avatar mb-0">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                </figure>
                <div class="card-body text-center p-0 items-center">
                  <h2 class="card-title text-white">{user.displayName}</h2>
                  <p className="text-white">{user.email}</p>
                </div>
              </div>
            </li>
            {/* <!-- Sidebar content here --> */}
            <li className="hover:bg-white hover:text-secondary">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:bg-white hover:text-secondary">
              <Link to="/dashboard/myorder">My Order</Link>
            </li>
            <li className="hover:bg-white hover:text-secondary">
              <Link to="/dashboard/review">My Review</Link>
            </li>
            <li className="hover:bg-white hover:text-secondary">
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li className="hover:bg-white hover:text-secondary">
              <Link to="/dashboard/users">All-User</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
