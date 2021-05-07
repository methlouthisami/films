import React from "react";
import './nav.css';
import {Link} from 'react-router-dom'


function Navi({handelchange}) {
  return (
    <div className="fixed-top naav">
   <nav>
     
     
      <ul>
     <li className="left_side">
       <img src="./logo.jpg"/></li>
       <li className="midle"> <input placeholder="rechercher" onChange={handelchange}/></li>
       <div className="right_side">
           <Link to='/'>Home</Link>
           <Link to='/favories'>favories</Link>
           <Link to='/about'>About us</Link>
       </div>
       </ul>
  
  
  
  </nav>

    </div>
  );
}

export default Navi;
