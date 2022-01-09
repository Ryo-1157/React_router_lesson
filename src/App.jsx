import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css";
import { Router } from "./router/Router";

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
        <Router />
      </BrowserRouter>
    </div>
  );
}
