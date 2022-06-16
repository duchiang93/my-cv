import React from "react";

const Contactform = () => {
  return (
    <div className="form_container">
      <form className="contactform">
        <label htmlFor="FirstName">First Name*</label>
        <input type="text" id="firstName" value="" />
        <label htmlFor="LastName">Last Name*</label>
        <input type="text" id="lastName" value="" />
        <br />
        <label htmlFor="mail">Email*</label>
        <input type="text" id="email" value="" />
        <br />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <br />
        <button className="form_button">Submit</button>
      </form>
    </div>
  );
};
export default Contactform;
