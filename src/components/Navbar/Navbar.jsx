import React from "react";
import { PiFilmReelFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h1>Movie App</h1>
      </div>
      <div className="center">
        <PiFilmReelFill />
      </div>
      <div className="right">
        <ul>
          <li><FaHome /></li>
          <li><FaHeart /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
