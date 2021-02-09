import React, { useState, useEffect } from "react";
import "./style.css";

export default function ButtonStart() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 8000);
  }, []);
  return (
    state && (
      <div>
        <button className="button-start">START</button>
      </div>
    )
  );
}
