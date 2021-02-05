import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Arrows from "./components/Arrows/Arrows";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  const location = useLocation();
  var posLocation = function () {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/home":
        return 1;
      case "/projects":
        return 2;
      case "/skills":
        return 3;
      case "/contact":
        return 4;
      default:
        return 0;
    }
  };

  let result = posLocation();
  const [pos, setPos] = useState(result);

  return (
    <>
      <Route path="/" render={() => <Arrows pos={pos} setPos={setPos} />} />
      <Route exact path="/" render={() => <Intro setPos={setPos} />} />
      <Route exact path="/home" render={() => <Home pos={pos} />} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
}

export default App;
