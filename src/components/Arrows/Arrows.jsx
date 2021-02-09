import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import arrowleft from "../../images/arrowleft.png";
import arrowright from "../../images/arrowright.png";
import "./style.css";
import useKey from "../Hooks/useKey";

export default function Arrows({ setPos, pos }) {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const handleKeyDown = (event) => {
    if (event.type === "keydown" && event.keyCode === 37) {
      setLeft(!left);
      setPos(pos !== 0 ? pos - 1 : 0);
    } else if (event.type === "keyup" && event.keyCode === 37) {
      setLeft(!left);
    } else if (event.type === "keydown" && event.keyCode === 39) {
      setRight(!right);
      setPos(pos !== 4 ? pos + 1 : 4);
    } else if (event.type === "keyup" && event.keyCode === 39) {
      setRight(!right);
    }
  };

  useKey(37, handleKeyDown);
  useKey(39, handleKeyDown);
  return (
    <div className={pos === 1 || pos === 0 ? "arrowsDown" : "arrowsUp"}>
      <img
        src={arrowleft}
        alt="<--"
        className={left ? "presskey arrow" : "arrow"}
      />
      <img
        src={arrowright}
        alt="-->"
        className={right ? "presskey arrow" : "arrow"}
      />
      {pos === 0 && <Redirect to="/resume-web/" />}
      {pos === 1 && <Redirect to="/resume-web/home" />}
      {pos === 2 && <Redirect to="/resume-web/projects" />}
      {pos === 3 && <Redirect to="/resume-web/skills" />}
      {pos === 4 && <Redirect to="/resume-web/contact" />}
    </div>
  );
}
