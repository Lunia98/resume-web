import React from "react";
import me from "../../images/LuPixel.png";
import homeiGiftYou from "../../images/iGiftYou.png";
import plantswebsite from "../../images/plantswebsiteFullSize.jpg";
import potrero from "../../images/elpotreroFullSize.jpg";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function Projects() {
  const history = useHistory()

  const handleOnClick = (e) => {
    let path = e.target.id
    console.log(path)
    window.location.href= path

  }
  return (
    <div>
      <div className="title_projects">
        <h1>My projects!</h1>
        <img src={me} alt="Oh no!" className="me_projects" />
      </div>
      <div className="projects">
        
          <div className="image_project" >
              <img src={homeiGiftYou} alt="Oh no!" style={{ width: "100%" }} className='hover'/>
           {/*  <a href="https://github.com/Lunia98/iGiftyouE-commerce"> */}
           <p className="text_projects" id='https://github.com/Lunia98/iGiftyouE-commerce' onClick={(e) => handleOnClick(e)}>
            One of the final projects of Henry's bootcamp was to do an
            Ecommerce, it is a page that suggests gifts after answering a
            questionnaire. In this case I worked in a fullstack way, but it was
            focused on the question system, the cart and the catalog.
            Technologies: React, React-Bootstrap, Redux, NodeJS, Express,
            PostreSQL, Passport, Sequelize
          </p>
           {/*  </a> */}
         {/* <button className='button_projects'>Click Me</button> */}
        </div>
       
          <div className="image_project"  >
              <img src={plantswebsite} alt="Oh no!" style={{ width: "100%" }}className='hover'/>
          <p className="text_projects" id="https://lunia98.github.io/plants-website/" onClick={(e) => handleOnClick(e)}>
            This is a small demonstration of my FrontEnd skills, I was inspired
            by a Pinterest design. Made with React and pure CSS.
          </p>
          </div>
            
          <div className="image_project" >
              <img src={potrero} alt="Oh no!" style={{ width: "100%" }} className='hover'/>
          <p className="text_projects"  id="https://entretiempo-staging.elpotrero.org/ " onClick={(e) => handleOnClick(e)}>
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
