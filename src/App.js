import React, { useState } from "react";
import { Switch, useLocation } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Arrows from "./components/Arrows/Arrows";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import useWindowsSize from "./components/Hooks/useWindowsSize";
import ButtonMobile from "./components/Buttons/ButtonMobile/ButtonMobile";
import Footer from "./components/Footer/Footer";
import { Pdf } from "./components/PDF/Pdf";

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
  let size = useWindowsSize();
  let result = posLocation();
  const [pos, setPos] = useState(result);
  const [countIcon, setCountIcon] = useState(0);
  const [up, setUp] = useState(false);

  return (
    <Switch>
      <Route exact path="/pdf" component={Pdf} />
      <Route path="/">
        <Route exact path="/" render={() => <Intro setPos={setPos} />} />
        <Route exact path="/home" render={() => <Home pos={pos} />} />
        <Route exact path="/projects" component={Projects} />
        <Route
          exact
          path="/skills"
          render={() => (
            <Skills
              countIcon={countIcon}
              up={up}
              setUp={setUp}
              setCountIcon={setCountIcon}
            />
          )}
        />
        <Route exact path="/contact" component={Contact} />

        <Footer />
        {size.width < 750 ? (
          <ButtonMobile
            pos={pos}
            setPos={setPos}
            setCountIcon={setCountIcon}
            countIcon={countIcon}
            up={up}
            setUp={setUp}
          />
        ) : (
          <Arrows pos={pos} setPos={setPos} />
        )}
      </Route>
    </Switch>
  );
}

export default App;
