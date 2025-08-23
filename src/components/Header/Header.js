import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to={"/"}>Login</Link>
        <Link to={"home"}>Home</Link>
        <Link to={"products"}>Products</Link>
        <Link to={"friends"}>Friends</Link>
        <Link to={"about"}>About</Link>
      </nav>
      <h2>Common Pages</h2>
    </div>
  );
};

export default Header;
