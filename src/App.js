import "./App.css";

import Foote from "./footer";
import React, { useState, useEffect } from "react";
import Favor from './favories'
import Home from "./home"
import PostForm from './admin'

import { BrowserRouter, Route, handelchange, Remove} from "react-router-dom";

function App() {
  const [movie, setmovie] = useState([]);
  const [favouriteMovie, setfavouriteMovie] = useState([]);

  const getMovie = () => {
    fetch("movie.json")
      .then((response) => response.json())
      .then((movies) => setmovie(movies));
  };

  useEffect(() => {
    getMovie();

  }, []);
  const getFavoris = (el) => {
    favouriteMovie.push(el)
    console.log(favouriteMovie)
  }
  const Remove=(el)=>{
    favouriteMovie.remove(el)
    alert("ma7abetch")
    console.log(favouriteMovie(el))
  }
  return (
    <div>
      <BrowserRouter>


        <div className="App ">
          <div className="bag"> <img src="./landing.jpg" /> </div>
          <div className="box"><h2>watch your favorite movie for free in one place</h2><button className="button_one">Log in</button><button className="button_tow">Sign up</button></div>
          <Route exact path="/"  ><Home getFavoris={getFavoris} movie={movie} favouriteMovie={favouriteMovie} /></Route>

          <Route path='/favories'><Favor favouriteMovie={favouriteMovie} Remove={Remove}/></Route>
          <Route path='/admin'><PostForm/></Route>

          <div className="ahbet">
            <Foote />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
