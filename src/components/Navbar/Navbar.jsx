import React from "react";
import { PiFilmReelFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">
          <h1>Movie App</h1>
        </Link>
      </div>
      <div className="center">
        <PiFilmReelFill />
      </div>
      <div className="right">
        <ul>
          <li>
           <Link to="/">
            <FaHome />
           </Link>
          </li>
          <li>
            <Link to="/favorites">
              <FaHeart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
