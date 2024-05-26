import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { BG_URL, USER_AVATAR, SIGN_IN, SIGN_UP } from "./utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const dispatch = useDispatch();
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
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstNameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage + "-" + errorCode);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
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
        <img alt="main" src={BG_URL}></img>
      </div>
      <form
        className="w-1/3 absolute p-12 bg-black mx-auto right-0 my-36 left-0 text-white bg-opacity-80"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? SIGN_IN : SIGN_UP}
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
          {isSignInForm ? SIGN_IN : SIGN_UP}
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
