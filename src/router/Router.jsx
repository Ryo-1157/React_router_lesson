import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {console.log(url)}
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route exact path={`${url}/page1detailA`}>
              <Page1DetailA />
            </Route>
            <Route exact path={`${url}/page1detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2></Page2>
      </Route>
    </Switch>
  );
};
