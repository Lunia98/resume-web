import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import arrowleft from "../../images/arrowleft.png";
import arrowright from "../../images/arrowright.png";
import Projects from "../Projects/Projects";

export default function Home() {
  const [pos, setPos] = useState(0);
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
      setPos(pos - 1);
    } else if (event.type === "keyup" && event.keyCode === 37) {
      setLeft(!left);
    } else if (event.type === "keydown" && event.keyCode === 39) {
      setRight(!right);
      setPos(pos + 1);
    } else if (event.type === "keyup" && event.keyCode === 39) {
      setRight(!right);
    }
  };

  useKey(37, handleKeyDown);
  useKey(39, handleKeyDown);

  return (
    <div className="container_home">
      {pos === 0 && (
        <div className={"presentation pos" + { pos }}>
          <h1>Hi again! I'm Lucia Ayala!</h1>
          <h3>
            Just press the arrow keys on your keyboard to navigate this page.
          </h3>
          <div className="image_Lu_pixel" />
        </div>
      )}
      <div className="arrows">
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
      </div>
      {pos === 1 && <Projects />}
      {pos === 2 && <div className="blue" />}
    </div>
  );
}
