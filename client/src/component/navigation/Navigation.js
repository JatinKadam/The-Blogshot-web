import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
function Navigation() {
  return (
    <div className="main-nav">
      <div className="name">
        <h1>
          The <span>Blog</span>
          <span>shot</span>
        </h1>
      </div>

      <ul className="menu-list">
        <li>
          <NavLink className="l" to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="l"
            style={{ textDecoration: "none" }}
            to="/create"
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            className="l"
            style={{ textDecoration: "none" }}
            to="/create"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="l"
            style={{ textDecoration: "none" }}
            to="/create"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
