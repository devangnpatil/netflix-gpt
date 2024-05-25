import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { LOGO, USER_AVATAR } from "./utils/Constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-transparent to-black z-10 flex justify-between">
      <img alt="Netflix Logo" className="logo w-32" src={LOGO} />
      {user && (
        <div className="flex items-center p-2">
          <img src={user.photoURL} alt="" className="w-12 h-12 " />
          <button
            className="text-white ml-4  px-4 py-2 font-bold"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
