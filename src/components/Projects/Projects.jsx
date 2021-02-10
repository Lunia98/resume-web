import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./style.css";
import { projects } from "../Utils/utils";
import Titles from "../Utils/Titles/Titles";
import useWindowsSize from "../Hooks/useWindowsSize";
import { useSelector } from "react-redux";

export default function Projects() {
  const lenguage = useSelector((state) => state.lenguage);
  const handleOnClick = (e) => {
    let path = e.target.id;
    window.open(path);
  };
  let size = useWindowsSize();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Titles title={lenguage ? "Mis proyectos" : "My projects!"} />
      <div className="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className="image_project"
            data-aos={project.animation}
            data-aos-delay="70"
            data-aos-easing="ease-in-out"
          >
            <img
              src={project.img}
              alt="Oh no!"
              style={{ width: "100%" }}
              className="hover"
              id={project.id}
              onClick={(e) => handleOnClick(e)}
            />
            {size.width > 750 ? (
              <p
                className="text_projects"
                id={project.id}
                onClick={(e) => handleOnClick(e)}
              >
                {lenguage ? project.textSpanish : project.textEnglish}
              </p>
            ) : (
              <p className="text_projects" id={project.id}>
                {lenguage ? project.textSpanish : project.textEnglish}
              </p>
            )}
          </div>
        ))}
        <div className="margin"></div>
      </div>
    </div>
  );
}
