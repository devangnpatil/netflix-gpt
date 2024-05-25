import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          alt="main"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <form className="w-1/3 absolute p-12 bg-black mx-auto right-0 my-36 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? "New to NetflixGPT? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
