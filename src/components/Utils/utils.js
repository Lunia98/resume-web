import javaScript from "../../images/icons/js.png";
import css from "../../images/icons/css.png";
import html from "../../images/icons/html.png";
import react from "../../images/icons/react.png";
import redux from "../../images/icons/redux.png";
import node from "../../images/icons/node.png";
import express from "../../images/icons/express.png";
import python from "../../images/icons/python.png";
import sequelize from "../../images/icons/sequelize.png";
import postgres from "../../images/icons/postgres.png";
import scrum from "../../images/icons/scrum.png";
import github from "../../images/icons/github.png";
import material from "../../images/icons/material.png";
import selenium from "../../images/icons/selenium.png";
import homeiGiftYou from "../../images/projects/iGiftYou.png";
import plantswebsite from "../../images/projects/plantswebsiteFullSize.jpg";
import potrero from "../../images/projects/elpotreroFullSize.jpg";
import resumeWeb from "../../images/projects/resumeWeb.jpg";

export const projects = [
  {
    img: potrero,
    textEnglish:
      "I worked on the implementation of a registration form for a volunteer and the administration panel of Fundación el potrero. We used agile methodologies (SCRUM) and good practices in the code. My incidence was in the FrontEnd. Technologies: React, Material-UI, Redux, TypeScript.",
    textSpanish:
      "Trabajé en la implementación de un formulario de registro para voluntarios y en el panel de administración de la Fundación El potrero, usando metodologías ágiles (SCRUM) y buenas prácticas en el código. Mi incidencia fue en el FrontEnd. Tecnologías: React, Material-UI, Redux, TypeScript.",
    id: "https://entretiempo-staging.elpotrero.org/ ",
    animation: "fade-right",
  },
  {
    img: homeiGiftYou,
    textEnglish:
      "One of the final projects in Henry's bootcamp was to do an E-commerce. iGiftYou is a page that suggests gifts after answering a questionnaire. In this case I worked as a fullstack dev, but I was focused on the questions system, the cart and the catalog. Technologies: React, React-Bootstrap, Redux, NodeJS, Express, PostreSQL, Passport, Sequelize.",
    textSpanish:
      "Uno de los proyectos finales del bootcamp Henry fue hacer un Ecommerce. Esta es una página que sugiere regalos después de contestar un cuestionario. En este caso trabajé de manera fullstack, pero estuve enfocada en el sistema de preguntas, las tarjetas y el catálogo. Tecnologías: React, React-Bootstrap, Redux, NodeJS, Express, PostreSQL, Passport, Sequelize.",
    id: "https://github.com/Lunia98/iGiftyouE-commerce",
    animation: "fade-left",
  },

  {
    img: plantswebsite,
    textEnglish:
      "This is a small demonstration of my FrontEnd skills, I was inspired by a Pinterest design. Made with React and pure CSS.",
    textSpanish:
      "Esta es una pequeña demostración de mis habilidades en el FrontEnd inspirada por un diseño en Pinterest. Hecho con React y CSS puro.",
    id: "https://lunia98.github.io/plants-website/",
    animation: "fade-right",
  },

  {
    img: resumeWeb,
    textEnglish: "This website! Check the repository.",
    textSpanish: "¡Esta página! Mira el repositorio.",
    id: "https://github.com/Lunia98/resume-web ",
    animation: "fade-left",
  },
];

export const icons = [
  {
    icon: javaScript,
    text: "JavaScript",
    position: "2%",
    positionUp: "20%",
    positionLeft2: "6%",
  },
  {
    icon: css,
    text: "CSS",
    position: "9%",
    positionUp: "20%",
    positionLeft2: "23%",
  },
  {
    icon: html,
    text: "HTML",
    position: "15%",
    positionUp: "20%",
    positionLeft2: "37%",
  },
  {
    icon: react,
    text: "React",
    position: "21%",
    positionUp: "20%",
    positionLeft2: "51%",
  },
  {
    icon: redux,
    text: "Redux",
    position: "27%",
    positionUp: "20%",
    positionLeft2: "67%",
  },
  {
    icon: material,
    text: "Material UI",
    position: "33%",
    positionUp: "20%",
    positionLeft2: "84%",
  },
  {
    icon: node,
    text: "NodeJS",
    position: "62%",
    positionUp: "35%",
    positionLeft2: "6%",
  },
  {
    icon: express,
    text: "Express",
    position: "68%",
    positionUp: "35%",
    positionLeft2: "21%",
  },
  {
    icon: python,
    text: "Python",
    position: "74%",
    positionUp: "35%",
    positionLeft2: "37%",
  },
  {
    icon: sequelize,
    text: "Sequelize",
    position: "80%",
    positionUp: "35%",
    positionLeft2: "51%",
  },
  {
    icon: postgres,
    text: "PostgreSQL",
    position: "87%",
    positionUp: "35%",
    positionLeft2: "67%",
  },
  {
    icon: selenium,
    text: "Selenium",
    position: "94%",
    positionUp: "35%",
    positionLeft2: "84%",
  },
  {
    icon: scrum,
    text: "SCRUM",
    position: "44%",
    positionUp: "50%",
    positionLeft2: "40%",
  },
  {
    icon: github,
    text: "GitHub",
    position: "51%",
    positionUp: "50%",
    positionLeft2: "53%",
  },
];
