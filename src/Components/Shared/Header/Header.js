import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo/logo.png"

const Header = () => {

    const mainMenu = <>
        <li><Link className="text-white hover:text-secondary text-base md:font-bold" to="/">Home</Link></li>
        <li><Link className="text-white hover:text-secondary text-base md:font-bold" to="/about">About</Link></li>
        <li><Link className="text-white hover:text-secondary text-base md:font-bold" to="/contact">Contact</Link></li>
        <li><Link className="text-white hover:text-secondary text-base md:font-bold" to="/blog">Blog</Link></li>
        <li><Link className="text-white hover:text-secondary text-base md:font-bold" to="/login">Login</Link></li>
    </>
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
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             {mainMenu}
            </ul>
          </div>
          <Link to="/" class=""><img src={logo} alt="" /></Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
          {mainMenu}
          </ul>
          
        </div>
        <div class="navbar-end md:flex-row gap-3">
        <div class="form-control">
        <input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar ">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
