import React from "react";
import './nav.css';
import { Link } from 'react-router-dom'
import Mybest from './favories'

const Navi = ({ handelchange, favouriteMovie }) => {
  return (
    <div className=" naav mt-4">
      <nav>


        <ul>
          <li className="left_side">
            <img src="./logo.jpg" /></li>
          <li className="midle"></li>
          <div className="right_side">
            <Link to='/'>Home</Link>
            <Link to='/favories'>favourite</Link>
            <Link to='/about'>About us</Link>
          </div>
        </ul>



      </nav>

    </div>
  );
}

export default Navi;
