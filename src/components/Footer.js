import React, { Fragment } from "react";
import Icons from "./Icons";

export const Footer = () => {
  return (
    <div className="container">
      <h1 className="title">Contact</h1>
      <div className="grid-container">
        <div className="grid-item">
          <ul className="content_link">
            <li>
              <h4>Sharon's Web</h4>
            </li>
            <li>
              <a href="#">
                <Icons.Facebook width={40} />
              </a>
              <a href="#">
                <Icons.Github width={40} />
              </a>
              <a href="#">
                <Icons.Instagram width={40} />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid-item1">
          <ul className="content_info">
            <li>
              <Icons.Location width={23} />
              台中市太平區育德路99號
            </li>
            <li>
              <Icons.Phone width={23} />
              0932-505424
            </li>
            <li>
              <Icons.Mail width={23} />
              duchiang93@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
