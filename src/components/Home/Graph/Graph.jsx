import React from "react";
import "./style.css";

export default function Graph({ obj }) {
  let ht = obj.height;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
      }}
    >
      <p>{obj.name}</p>
      <div className="barra" style={{ height: `${ht}` }} />
    </div>
  );
}
