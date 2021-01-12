import React from "react";
import Graph from "./Graph/Graph";
import "./style.css";

export default function Home() {
  let skills = [
    { name: "JavaScript", height: "180px" },
    { name: "Python", height: "120px" },
    { name: "React", height: "150px" },
    { name: "Redux", height: "120px" },
    { name: "HTML", height: "150px" },
    { name: "CSS", height: "160px" },
    { name: "Express", height: "120px" },
    { name: "PostgreSQL", height: "140px" },
  ];
  return (
    <div className="container_home">
      <div className="first_part">
        <h3>Hola! Soy Lucia! FullStack Developer</h3>
        <p style={{ letterSpacing: "1px" }}>
          ¿Que podría contarte de mí? Hhmm.. Toco el piano desde chica, soy
          compositora orquestal. Como todos se imaginan, el arte es muy
          subjetivo, y yo necesitaba algo más concreto. Asique en la
          programación encontré la hermosa combinación entre creatividad, arte y
          objetividad!
        </p>
      </div>
      <div className="second_part">
        <h3 style={{ letterSpacing: "3px" }}>Estas son mis habilidades</h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {skills.map((skill) => (
            <Graph obj={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
