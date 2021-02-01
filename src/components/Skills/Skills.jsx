import React from 'react';
import './style.css'
import me from "../../images/LuPixel.png";
import bloques from '../../images/bloques.png'
export default function Skills(){
    return(
    <div>
        <div className="title_skills">
        <h1>My skills!</h1>
        <img src={me} alt="Oh no!" className="me_skills" />
    </div>
    <img src={bloques} alt= "Oh no!"/>
  </div>
  )
} 