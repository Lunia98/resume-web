import React, { useState, useEffect } from "react";
import ButtonStart from "../Button/ButtonStart";
import { Link } from "react-router-dom";
import "./style.css";

export default function Intro() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 3500);
  }, []);
  const text = ["<h1>", "</h1>"];
  return (
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
  );
}
