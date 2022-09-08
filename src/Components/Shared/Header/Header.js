import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.int";
import logo from "../../../Images/logo/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);


  const logout = () => {
    signOut(auth);
  };

  const mainMenu = (
    <>
      <li>
        <Link
          className="text-white hover:text-secondary text-base md:font-bold"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-white hover:text-secondary text-base md:font-bold"
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="text-white hover:text-secondary text-base md:font-bold"
          to="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="text-white hover:text-secondary text-base md:font-bold"
          to="/blog"
        >
          Blog
        </Link>
      </li>
      {
        user && <li>
        <Link
          className="text-white hover:text-secondary text-base md:font-bold"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </li>
      }
    </>
  );
  return (
    <div className="">
      <div class="navbar bg-primary">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {mainMenu}
            </ul>
          </div>
          <Link to="/" class="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{mainMenu}</ul>
        </div>
        <div class="navbar-end md:flex-row gap-3 ">
          <div class="form-control hidden lg:flex">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="dashboard-nav">
          <label tabindex="2" for="sidebar" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          {
            user ? (
              <div class="dropdown dropdown-end">
                <label
                  tabindex="0"
                  class="btn btn-ghost btn-circle btn-white avatar "
                >
                  <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52 text-secondary"
                >
                  <li>
                    <a class="justify-between">
                      Profile
                      <span class="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div class="dropdown dropdown-end">
                <label tabindex="1" class="btn btn-ghost btn-circle avatar ">
                  <div class="w-10 rounded-full">
                    <img src="https://img.icons8.com/fluency-systems-filled/48/000000/user.png" />
                  </div>
                </label>
                <ul
                  tabindex="1"
                  class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52 text-secondary"
                >
                  <li>
                    <Link to="/login" class="justify-between">
                      Login
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <a href="#">Language</a>
                  </li>
                  <li>
                    <a href="#">Currency</a>
                  </li>
                </ul>
              </div>
            )

          }

        </div>
      </div>
    </div>
  );
};

export default Header;
