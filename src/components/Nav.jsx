import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";
// import About from "./About";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="title">
        <span className="navbar-brand">
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <div className="orange">Weather App</div>
        </span>
      </Link>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
