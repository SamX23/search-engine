import React from "react";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
