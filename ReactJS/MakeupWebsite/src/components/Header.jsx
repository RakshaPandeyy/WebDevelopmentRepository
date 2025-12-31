import React from "react";
import { Link } from "react-router-dom";
import { GiLipstick } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="bg-pink-400 text-blue-200 border-blue-200 italic p-4 text-2xl">
        <div className="flex">
        
          <span>GlowMore </span> <GiLipstick className="text-white-200" />
        </div>
        <div className="flex justify-end gap-5">
          <Link to={"/"} className="hover:underline">Home</Link>
          <Link to={"/About"} className="hover:underline">About</Link>
          <Link to={"/Product"} className="hover:underline">Products</Link>
          <Link to={"/Login"} className="hover:underline font-bold">LOGIN</Link>
          <Link to={"/Register"} className="hover:underline font-bold">REGISTER</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
