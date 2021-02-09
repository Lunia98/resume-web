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
import useWindowsSize from "./components/Hooks/useWindowsSize";
import ButtonMobile from "./components/Buttons/ButtonMobile/ButtonMobile";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  var posLocation = function () {
    switch (location.pathname) {
      case "/resume-web/":
        return 0;
      case "/resume-web/home":
        return 1;
      case "/resume-web/projects":
        return 2;
      case "/resume-web/skills":
        return 3;
      case "/resume-web/contact":
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
    <Route path="/resume-web/">
      <Route
        exact
        path="/resume-web/"
        render={() => <Intro setPos={setPos} />}
      />
      <Route exact path="/resume-web/home" render={() => <Home pos={pos} />} />
      <Route exact path="/resume-web/projects" component={Projects} />
      <Route
        exact
        path="/resume-web/skills"
        render={() => (
          <Skills
            countIcon={countIcon}
            up={up}
            setUp={setUp}
            setCountIcon={setCountIcon}
          />
        )}
      />
      <Route exact path="/resume-web/contact" component={Contact} />

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
  );
}

export default App;
