import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import me from "../../images/LuPixel.png";
import bloques from "../../images/bloques.png";
import arrow_up from "../../images/arrow.png";
import { icons } from "../utils";
import UIfx from "uifx";
import coinSound from "../../images/mario_coin.mp3";

export default function Skills() {
  const [countIcon, setCountIcon] = useState(0);
  const [up, setUp] = useState(false);

  const coin = new UIfx(coinSound);
  const mappedIcons = icons.map((obj) => {
    return (
      <div
        className="container_icon_skills animation"
        style={{ top: "40%", left: obj.position }}
      >
        <img src={obj.icon} alt="Oh no!" className={"icon "} />
        <p className={"text_skills"}>{obj.text}</p>
      </div>
    );
  });

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
    if (event.type === "keydown" && event.keyCode === 38 && countIcon < 14) {
      setUp(true);
      setCountIcon(countIcon + 1);
      coin.setVolume(0.05).play();
    } else if (
      event.type === "keyup" &&
      event.keyCode === 38 &&
      countIcon < 14
    ) {
      setUp(false);
    } else if (countIcon === 14) {
      setUp(false);
    }
  };

  useKey(38, handleKeyDown);

  return (
    <div style={{ height: "100vh" }}>
      <div className="title_skills">
        <h1>My skills!</h1>
        <img src={me} alt="Oh no!" className="me_skills" />
      </div>
      <img src={bloques} alt="Oh no!" className="block" />
      <img
        src={me}
        alt="Oh no!"
        className={up ? "presskeyup me_skills_block" : "me_skills_block"}
      />
      <img
        src={arrow_up}
        alt="Oh no!"
        className={countIcon === 0 ? "arrowUp arrowUp_animation" : "arrowUp "}
      />
      {mappedIcons.map((icon) => {
        return countIcon >= mappedIcons.indexOf(icon) + 1 && icon;
      })}
    </div>
  );
}
