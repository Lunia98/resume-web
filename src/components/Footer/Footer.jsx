import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import Lenguage from "../Lenguage/Lenguage";

import "./style.css";
import { useSelector } from "react-redux";

export default function Footer() {
  const lenguage = useSelector((state) => state.lenguage);
  return (
    <div className="container_footer">
      <div className="social_medias">
        <a
          rel="noopener noreferrer"
          target="_BLANK"
          href="https://www.linkedin.com/in/lunia98/"
        >
          <LinkedInIcon fontSize="default" style={{ color: "black" }} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_BLANK"
          href="https://github.com/Lunia98"
        >
          <GitHubIcon fontSize="default" style={{ color: "black" }} />
        </a>
        <a
          target="_BLANK"
          href="https://drive.google.com/file/d/1e0_Dvun9sUsNsqlhkUjF2odyqyMX-u2w/view?usp=sharing"
          rel="noreferrer"
          className="icon_Cv"
        >
          <h6 style={{ margin: 0 }}>CV</h6>
          <GetAppIcon fontSize="default" style={{ color: "black" }} />
        </a>
      </div>
      <div className="text_footer">
        <p>{lenguage ? "Hecho con 💛 por Lu" : "Made with 💛 by Lu"}</p>
      </div>
      <Lenguage />
    </div>
  );
}
