import React from "react";
import "./style.css";
export default function Titles({ title }) {
  return (
    <div>
      <div className="titles">
        <h1 className="title">{title}</h1>
        <div className="me" />
      </div>
    </div>
  );
}
