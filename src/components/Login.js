import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // validate form data
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const firstNameValue =
      (firstName.current && firstName.current.value) || null;
    const lastNameValue = (lastName.current && lastName.current.value) || null;
    const message = checkValidData(
      emailValue,
      passwordValue,
      firstNameValue,
      lastNameValue
    );

    if (message !== null) {
      setErrorMessage(message);
      return;
    }
    if (!isSignInForm) {
      console.log("Sign Up Clicked");
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
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
      <form
        className="w-1/3 absolute p-12 bg-black mx-auto right-0 my-36 left-0 text-white bg-opacity-80"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
              ref={firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
              ref={lastName}
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ref={password}
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
