import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">page1</Link>
          <br />
          <Link to="/page2">page2</Link>
          <br />
        </div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/page1">
            <Page1></Page1>
          </Route>
          <Route path="/page2">
            <Page2></Page2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
