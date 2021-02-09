import React from "react";
import "./style.css";
import me from "../../images/LuLentes.png";
import bloques from "../../images/bloques.png";
import arrow_up from "../../images/arrow.png";
import { icons } from "../Utils/utils";
import UIfx from "uifx";
import coinSound from "../../images/mario_coin.mp3";
import Titles from "../Utils/Titles/Titles";
import useWindowsSize from "../Hooks/useWindowsSize";
import useKey from "../Hooks/useKey";

export default function Skills({ countIcon, setCountIcon, up, setUp }) {
  const coin = new UIfx(coinSound);
  const size = useWindowsSize();

  const mappedIcons = icons.map((obj) => {
    if (size.width > 750) {
      return (
        <div
          className="container_icon_skills animation"
          style={{ top: "40%", left: obj.position }}
        >
          <img src={obj.icon} alt="Oh no!" className={"icon "} />
          <p className={"text_skills"}>{obj.text}</p>
        </div>
      );
    } else {
      return (
        <div
          className="container_icon_skills animation"
          style={{ top: obj.positionUp, left: obj.positionLeft2 }}
        >
          <img src={obj.icon} alt="Oh no!" className={"icon "} />
          <p className={"text_skills"}>{obj.text}</p>
        </div>
      );
    }
  });

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
      <Titles title="My skills!" />
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
      <div>
        {mappedIcons.map((icon) => {
          return countIcon >= mappedIcons.indexOf(icon) + 1 && icon;
        })}
      </div>
    </div>
  );
}
