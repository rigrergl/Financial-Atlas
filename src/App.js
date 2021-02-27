import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MonthlyView from "./components/MonthlyView";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/monthlyView">
              <MonthlyView />
            </Route>

            <Route path="/">
              <ul>
                <li>
                  <Link to="/monthlyView">Home</Link>
                </li>
              </ul>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
