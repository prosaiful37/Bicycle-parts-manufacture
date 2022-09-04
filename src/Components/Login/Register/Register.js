import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  return (
    <div class="relative">
      <img
        src="https://images.pexels.com/photos/2041623/pexels-photo-2041623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        class="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div class="relative bg-gray-900 bg-opacity-75">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Signup for <br class="hidden md:block" />a new{" "}
                <span class="text-teal-accent-400">account dotbike !</span>
              </h2>
              <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  class="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>
            <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>

                <form>
                  <div class="mb-1 sm:mb-2">
                    <label for="name" class="inline-block mb-1 font-medium">
                      Name
                    </label>
                    <input
                      placeholder="John doe"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div class="mb-1 sm:mb-2">
                    <label for="email" class="inline-block mb-1 font-medium">
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required=""
                      type="email"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class=" sm:mb-2">
                    <label for="password" class="inline-block mb-1 font-medium">
                      Password
                    </label>
                    <input
                      placeholder="password"
                      required=""
                      type="password"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <Link
                    to="/login"
                    class="label-text-alt link link-hover hover:text-primary"
                  >
                    Already havn't account dotbike please login!
                  </Link>
                  <div class="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-accent focus:shadow-outline focus:outline-none"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div class="divider">Or Continue with</div>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
