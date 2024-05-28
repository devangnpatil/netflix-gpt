import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { LOGO, SUPPORTED_LANGUAGES } from "./utils/Constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changeLang } from "./utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handeGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
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
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        alt="Netflix Logo"
        className="logo w-32 mx-auto md:mx-0"
        src={LOGO}
      />
      {user && (
        <div className="flex items-center p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500 text-white ml-4  px-4 py-2 font-bold mr-2 rounded-lg"
            onClick={handeGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            src={user.photoURL}
            alt=""
            className="w-12 h-12 hidden md:block "
          />
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
