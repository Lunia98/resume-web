import React, { useState, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";
import arrowleft from "../../images/arrowleft.png";
import arrowright from "../../images/arrowright.png";
import "./style.css";

export default function Arrows({ setPos, pos }) {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  function useKey(key, cb) {
    const callbackRef = useRef(cb);

    useEffect(() => {
      callbackRef.current = cb;
    });
    useEffect(() => {
      function handle(event) {
        if (event.keyCode === key) {
          callbackRef.current(event);
        }
      }
      document.addEventListener("keydown", handle);
      document.addEventListener("keyup", handle);

      return function () {
        document.removeEventListener("keydown", handle);
        document.removeEventListener("keyup", handle);
      };
    }, [key]);
  }

  const handleKeyDown = (event) => {
    if (event.type === "keydown" && event.keyCode === 37) {
      setLeft(!left);
      setPos(pos !== 1 ? pos - 1 : 1);
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
      {pos === 1 && <Redirect to="/home" />}
      {pos === 2 && <Redirect to="/projects" />}
      {pos === 3 && <Redirect to="/skills" />}
      {pos === 4 && <Redirect to="/contact" />}
    </div>
  );
}
