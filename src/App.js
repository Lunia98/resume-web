import React, { useState } from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Arrows from "./components/Arrows/Arrows";

function App() {
  const [pos, setPos] = useState(null);

  return (
    <>
      <Route path="/" render={() => <Arrows pos={pos} setPos={setPos} />} />
      <Route exact path="/" render={() => <Intro setPos={setPos} />} />
      <Route exact path="/home" render={() => <Home pos={pos} />} />
      <Route exact path="/projects" component={Projects} />
    </>
  );
}

export default App;
