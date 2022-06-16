import React from "react";
import Icons from "./Icons";

const Nav = () => {
  return (
    <nav className="nav_container">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <ul className="nav_grid">
        <li className="list">
          <a href="#">
            <span>
              <Icons.AboutMe className="icon" />
            </span>
            <span className="text">About Me</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span>
              <Icons.Skill className="icon" />
            </span>
            <span className="text">Skills</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span>
              <Icons.Project className="icon" />
            </span>
            <span className="text">Project</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span>
              <Icons.Contact className="icon" />
            </span>
            <span className="text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
