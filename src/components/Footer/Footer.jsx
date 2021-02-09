import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";

import "./style.css";
export default function Footer() {
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
        <a target="_BLANK" href="./pdf" className="icon_Cv">
          <h6 style={{ margin: 0 }}>CV</h6>
          <GetAppIcon fontSize="default" style={{ color: "black" }} />
        </a>
      </div>
      <div className="text_footer">
        <p>Made with 💛 by Lu</p>
      </div>
    </div>
  );
}
