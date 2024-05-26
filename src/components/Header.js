import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { LOGO } from "./utils/Constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // This will be called when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
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
