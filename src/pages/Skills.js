import React from "react";

const Skills = () => {
  return (
    <div className="skills_container">
      <h1 className="title">Skills</h1>
      <div className="skillsbar_container">
        <div className="skills_bar">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress_line html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>SCSS</span>
            </div>
            <div className="progress_line scss">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>JavaScript</span>
            </div>
            <div className="progress_line javascript">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>React</span>
            </div>
            <div className="progress_line react">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Git</span>
            </div>
            <div className="progress_line git">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Mongo</span>
            </div>
            <div className="progress_line mongo">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Node</span>
            </div>
            <div className="progress_line node">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
