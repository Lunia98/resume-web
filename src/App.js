import "./App.css";
import Intro from "./components/Intro/Intro";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}

export default App;
