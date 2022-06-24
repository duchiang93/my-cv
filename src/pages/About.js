import React from "react";

export const About = () => {
  return (
    <div className="homepage_container">
      <h1 className="title">About Me</h1>
      <div className="about_text">
        <h3>蔣岱芸</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          doloribus ea, eius cupiditate, nam possimus eum ad voluptas ipsum
          veniam, quo incidunt neque ullam animi asperiores suscipit. Aliquid
          iure libero fuga nisi aliquam eveniet qui porro impedit alias
          corrupti, quod id. Magnam sit nisi, aspernatur atque tenetur corrupti
          consequatur architecto.
        </p>
      </div>
      <div className="about_pic">
        <div className="color"></div>
        <img src="./my-cv/About me.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
