import React from "react";

const Project = () => {
  return (
    <div className="project_container">
      <h1 className="title">Project</h1>
      <ul className="row tab_content">
        <div className="project_grid">
          <li className="work_card ">
            <a
              href=" https://duchiang93.github.io/photo-website/"
              target="_blank"
            >
              <div className="work_list_img">
                <img
                  src={process.env.PUBLIC_URL + "/IMG/photo-website.jpg"}
                  alt=""
                />
              </div>
            </a>
            <h4>Photo Website</h4>
          </li>
          <li className="work_card ">
            <a
              href=" https://duchiang93.github.io/To-Do-List//"
              target="_blank"
            >
              <div className="work_list_img">
                <img
                  src={process.env.PUBLIC_URL + "/IMG/todo list.jpg"}
                  alt=""
                />
              </div>
            </a>
            <h4>Sharon's Todolist</h4>
          </li>
          <li className="work_card">
            <a href="https://witega.com.tw/" target="_blank">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/witega.jpg"} alt="" />
              </div>
            </a>
            <h4>Witega 威特嘉科技開發股份有限公司</h4>
          </li>
          <li className="work_card ">
            <a href="https://witega.com.tw/" target="_blank">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/witega.jpg"} alt="" />
              </div>
            </a>
            <h4>Witega 威特嘉科技開發股份有限公司</h4>
          </li>
          <li className="work_card">
            <a href="https://witega.com.tw/" target="_blank">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/witega.jpg"} alt="" />
              </div>
            </a>
            <h4>Witega 威特嘉科技開發股份有限公司</h4>
          </li>
          <li className="work_card ">
            <a href="https://witega.com.tw/" target="_blank">
              <div className="work_list_img">
                <img src={process.env.PUBLIC_URL + "/IMG/witega.jpg"} alt="" />
              </div>
            </a>
            <h4>Witega 威特嘉科技開發股份有限公司</h4>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Project;
