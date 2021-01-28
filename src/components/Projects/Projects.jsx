import React from "react";
import me from "../../images/LuPixel.png";
import homeiGiftYou from "../../images/iGiftYou.png";
import plantswebsite from "../../images/plantswebsiteFullSize.jpg";
import potrero from "../../images/elpotreroFullSize.jpg";
import "./style.css";

export default function Projects() {
  return (
    <div>
      <div className="title_projects">
        <h1>My projects!</h1>
        <img src={me} alt="Oh no!" className="me_projects" />
      </div>
      <div className="projects">
        
          <div className="image_project">
            <a href="https://github.com/Lunia98/iGiftyouE-commerce">
              <img src={homeiGiftYou} alt="Oh no!" style={{ width: "100%" }} className='hover'/>
            </a>
           <p className="text_projects">
            One of the final projects of Henry's bootcamp was to do an
            Ecommerce, it is a page that suggests gifts after answering a
            questionnaire. In this case I worked in a fullstack way, but it was
            focused on the question system, the cart and the catalog.
            Technologies: React, React-Bootstrap, Redux, NodeJS, Express,
            PostreSQL, Passport, Sequelize
          </p>
         
        </div>
       
          <div className="image_project">
            <a href="https://lunia98.github.io/plants-website/">
              <img src={plantswebsite} alt="Oh no!" style={{ width: "100%" }}className='hover'/>
            </a>
          <p className="text_projects">
            This is a small demonstration of my FrontEnd skills, I was inspired
            by a Pinterest design. Made with React and pure CSS.
          </p>
          </div>
      
        
          <div className="image_project">
            <a href="https://entretiempo-staging.elpotrero.org/ ">
              <img src={potrero} alt="Oh no!" style={{ width: "100%" }} className='hover'/>
            </a>
          <p className="text_projects">
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
