import React from "react";
import useWindowsSize from "../Hooks/useWindowsSize";
import "./style.css";

export default function Home({ pos }) {
  let size = useWindowsSize();
  return (
    <div className="container_home">
      <div className="presentation">
        <h1>Hi again! I'm Lucia Ayala!</h1>

        <h2>A FullStack Developer</h2>
        {size.width < 750 ? (
          <h3 style={{ textAlign: "center" }}>
            Use the arrows (+) to navigate this page.
          </h3>
        ) : (
          <h3 style={{ textAlign: "center" }}>
            Just press the arrow keys on your keyboard to navigate this page.
          </h3>
        )}

        <div className="image_Lu_pixel" />
      </div>
    </div>
  );
}
