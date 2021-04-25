import React from "react";
import useWindowsSize from "../Hooks/useWindowsSize";
import "./style.css";
import { useSelector } from "react-redux";

export default function Home({ pos }) {
  const lenguage = useSelector((state) => state.lenguage);
  let size = useWindowsSize();
  return (
    <div className="container_home">
      <div className="presentation">
        <h1>
          {lenguage
            ? "¡Hola de vuelta! ¡Soy Lucia Ayala!"
            : "Hi again! I'm Lucia Ayala!"}
        </h1>

        <h2 style={{ width: "60%", textAlign: "center" }}>
          {lenguage
            ? "Dije esto en febrero del 2021: Soy desarrolladora web FullStack.  ¡Me encuentro buscando un trabajo que me desafíe día a día! Constantemente estoy mejorando mis conocimientos, soy proactiva y me encanta trabajar en equipo."
            : "I said this in February 2021: A FullStack Developer. I find myself looking for a job that challenges me every day! I am constantly improving my knowledge, I am proactive and I love working as a team!"}
        </h2>
        <br/>
        <h2 style={{width: "60%", textAlign: 'center'}}>
            {lenguage ? "Ahora: Trabajo como Software Engineer en Auth0! Muchas gracias a todos por el apoyo! :)" : "Now: I work as a Software Engineer at Auth0! Thank you very much for the support! :) "}
        </h2>

        {size.width < 750 ? (
          <h3 style={{ textAlign: "center" }}>
            {lenguage
              ? "Usa las flechas (+) para navegar en esta página"
              : "Use the arrows (+) to navigate this page."}
          </h3>
        ) : (
          <h3 style={{ textAlign: "center" }}>
            {lenguage
              ? "Solo presiona las teclas de flecha en tu teclado para navegar en esta página"
              : " Just press the arrow keys on your keyboard to navigate this page."}
          </h3>
        )}

        <div className="image_Lu_pixel" />
      </div>
    </div>
  );
}
