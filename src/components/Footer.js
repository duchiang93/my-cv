import React, { Fragment } from "react";
import Icons from "./Icons";

export const Footer = () => {
  return (
    <div className="container">
      <div>
        <h1 className="title">Contact</h1>
        <div className="footer-content">
          <ul className="content_link">
            <li>
              <h2>Sharon's Web</h2>
            </li>
            <li>
              <a href="#">
                <Icons.Facebook width={50} />
              </a>
              <a href="#">
                <Icons.Github width={50} />
              </a>
              <a href="#">
                <Icons.Instagram width={50} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="content_info">
            <li>
              <Icons.Location width={25} />
              地址
            </li>
            <li>
              <Icons.Phone width={25} />
              電話
            </li>
            <li>
              <Icons.Mail width={25} />
              信箱
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
