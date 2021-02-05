import React from "react";
import me from "../../images/LuPixel.png";
import { projects } from "../utils";
import "./style.css";

export default function Projects() {
  const handleOnClick = (e) => {
    let path = e.target.id;
    window.location.href = path;
  };
  const preload = projects.map((project) => (
    <img
      src={project}
      alt="Oh no!"
      style={{ width: "100%" }}
      className="hover"
    />
  ));
  return (
    <div>
      <div className="title_projects">
        <h1>My projects!</h1>
        <img src={me} alt="Oh no!" className="me_projects" />
      </div>
      <div className="projects">
        <div className="image_project">
          {preload[0]}
          <p
            className="text_projects"
            id="https://github.com/Lunia98/iGiftyouE-commerce"
            onClick={(e) => handleOnClick(e)}
          >
            One of the final projects of Henry's bootcamp was to do an
            Ecommerce, it is a page that suggests gifts after answering a
            questionnaire. In this case I worked in a fullstack way, but it was
            focused on the question system, the cart and the catalog.
            Technologies: React, React-Bootstrap, Redux, NodeJS, Express,
            PostreSQL, Passport, Sequelize
          </p>
        </div>

        <div className="image_project">
          {preload[1]}
          <p
            className="text_projects"
            id="https://lunia98.github.io/plants-website/"
            onClick={(e) => handleOnClick(e)}
          >
            This is a small demonstration of my FrontEnd skills, I was inspired
            by a Pinterest design. Made with React and pure CSS.
          </p>
        </div>

        <div className="image_project">
          {preload[2]}
          <p
            className="text_projects"
            id="https://entretiempo-staging.elpotrero.org/ "
            onClick={(e) => handleOnClick(e)}
          >
            I worked on the implementation of a registration form for a
            volunteer and the administration panel of Fundación el potrero.
            Using agile methodologies (SCRUM) and good practices in the code. My
            incidence was in the FrontEnd. Technologies: React, Material-UI,
            Redux, TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
}
