import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookList from "./pages/books";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
      </Switch>
    </Router>
  );
}

export default App;
