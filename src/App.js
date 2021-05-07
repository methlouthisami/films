import Movie from "./movie";
import "./App.css";

import Foote from "./footer";
import React from "react";
import Favor from './favories'
import Home from "./home"

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      

        <div className="App ">
          <Route exact path="/"  component={Home} />
          <Route path='/favories' component={Favor} />

          <div className="ahbet">
            <Foote />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
