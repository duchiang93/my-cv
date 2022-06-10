import React from "react";
import Icons from "./Icons";

const Nav = () => {
  return (
    <nav>
      <div className="navigation">
        <ul>
          <li class="list">
            <a href="#">
              <span className="icon">
                <Icons.AboutMe />
              </span>
              <span className="text">About Me</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span className="icon">
                <Icons.Skill width={50} />
              </span>
              <span className="text">Skill</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span className="icon">
                <Icons.Project />
              </span>
              <span className="text">Project</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span className="icon">
                <Icons.Contact />
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
