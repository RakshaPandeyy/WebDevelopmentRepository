import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>my website</h1>
        <div className="d-flex gap-3">
          <Link to={"/"} className="text-decoration-none text-light">
            home
          </Link>
          <Link to={"/about"}>about</Link>
          <Link to={"/contact"}>contact</Link>
          <Link to={"/product"}>product</Link>
        </div>
      </div>
    </>
  );
};
export default Header;
