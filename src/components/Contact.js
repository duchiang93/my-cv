import React from "react";
import Icons from "./Icons";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="title">Contact</h1>
      <div className="grid-container">
        <div className="grid-itemLeft">
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

        <div className="grid-itemRight">
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
        </div>
      </div>
      <section className="form"></section>
    </div>
  );
};

export default Contact;
