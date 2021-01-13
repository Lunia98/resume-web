import React, { useState, useEffect } from "react";
import ButtonStart from "../Button/ButtonStart";
import { Link } from "react-router-dom";
import LuPixel from "../../images/LuPixel.png";
import "./style.css";

export default function Intro() {
  const [state, setState] = useState(false);
  const [lips, setLips] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(true);
      setLips(true);
    }, 3500);
    setTimeout(() => {
      setLips(false);
    }, 2800);
  }, []);
  const text = ["<h1>", "</h1>"];
  return (
    <div>
      <div className="image_pixel">
        <div className={lips && "lips"} />
      </div>
      <div className="container_intro">
        <div className="command">
          <p className="text-top">{text[0]}</p>
          <div style={{ position: "relative" }}>
            <p
              className="line anim-typewriter"
              style={{ border: state && "none" }}
            >
              Oh! Hello there!
            </p>
            {state && (
              <p style={{ width: "12em" }} className="line anim-typewriter2">
                I didn't realize you were here
              </p>
            )}
          </div>
          <p className="text-top">{text[1]}</p>
          <Link to="/home">
            <ButtonStart />
          </Link>
        </div>
      </div>
    </div>
  );
}
