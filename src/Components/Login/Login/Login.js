import React from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.int";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, Rerror] = useSendPasswordResetEmail(
        auth
      );
    const navigate = useNavigate();
    const location = useLocation();




    let from = location.state?.from?.pathname || "/";

    // form validation
    if (error || Rerror) {
        return (
          <div>
            <p className="text-error">Error: {error.message || Rerror.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Loading></Loading>;
      }
      if (user) {
        navigate(from, { replace: true });
      }


      if (sending) {
        return <p>Sending...</p>;
      }



    //   handle login form
    const handleLogin = event => {
        event.preventDefault();
        let email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    

    // password reset
    const resetPassword = async() => {
        let email;
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }
    

  return (
    <div class="relative">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        class="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div class="relative bg-accent bg-opacity-75">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Please login for <br class="hidden md:block" />
                update{" "}
                <span class="text-teal-accent-400">about information</span>
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
                  Please Login
                </h3>

                <form onSubmit={handleLogin}>
                  <div class="mb-1 sm:mb-2">
                    <label for="email" class="inline-block mb-1 font-medium">
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
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
                      required
                      type="password"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <label class="label">
                    <a onClick={resetPassword} href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <Link
                    to="/register"
                    class="label-text-alt link link-hover hover:text-primary"
                  >
                    Are You new in dotbike please signup!
                  </Link>
                  <div class="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-accent focus:shadow-outline focus:outline-none"
                    >
                      Sign In
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

export default Login;
