import React from "react";
import "./style.css";

export default function Home({ pos }) {
  return (
    <div className="container_home">
      <div className="presentation">
        <h1>Hi again! I'm Lucia Ayala!</h1>
        <h3>
          Just press the arrow keys on your keyboard to navigate this page.
        </h3>
        <div className="image_Lu_pixel" />
      </div>
    </div>
  );
}
