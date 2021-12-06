import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Switch>
          <Route exact path="/">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="general" category="general" />
          </Route>
          <Route exact path="/business">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="business" category="business" />
          </Route>
          <Route exact path="/entertainment">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/general">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="general" category="general" />
          </Route>
          <Route exact path="/health">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="health" category="health" />
          </Route>
          <Route exact path="/science">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="science" category="science" />
          </Route>
          <Route exact path="/sports">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="sports" category="sports" />
          </Route>
          <Route exact path="/technology">
            {" "}
            <News setProgress={setProgress} pageSize={pageSize} country="in" key="general" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
