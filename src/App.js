import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Works from "./views/Works";
import Project from "./views/Project";
import Calendar from "./views/Calendar";
import Possibilities from "./views/Possibilities";


function App() {
  return (
      <Router>
        <Route exact path='/'><Redirect to="/project" /></Route>
        <Route path='/works'><Works/></Route>
        <Route path='/project'><Project/></Route>
        <Route path='/calendar'><Calendar/></Route>
        <Route path='/possibilities'><Possibilities/></Route>
      </Router>
  );
}

export default App;