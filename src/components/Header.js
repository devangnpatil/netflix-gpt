import React from "react";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-transparent to-black z-10">
      <img alt="Netflix Logo" className="logo w-32" src={logo} />
    </div>
  );
};

export default Header;
