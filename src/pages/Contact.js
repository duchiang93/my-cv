import React from "react";
import Icons from "../components/Icons";
import Contactform from "../components/Contactform";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="title">Contact</h1>
      <div className="grid-container">
        <div className="grid-itemLeft">
          <ul className="content_info">
            <li className="col">
              <Icons.Location className="svg" />
              <p>Taichung City,Taiwan</p>
            </li>
            <li className="col">
              <Icons.Phone className="svg" />
              <p>0912-345678</p>
            </li>
            <li className="col">
              <Icons.Mail className="svg" />
              <p>duchiang93@gmail.com</p>
            </li>
          </ul>
          <ul className="content_link">
            <li>
              <a href="#">
                <Icons.Facebook />
              </a>
              <a href="#">
                <Icons.Github />
              </a>
              <a href="#">
                <Icons.Instagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid-itemRight">
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default Contact;
