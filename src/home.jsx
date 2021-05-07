import {React,useState } from 'react'
import Navi from "./nav"
import Movie from  "./movie" ;


function Home() {
    const [input,setInput]= useState("")
   const handelchange=(e)=>{
   setInput(e.target.value)
    }

    

    return (
     <div className="page_home">

            <Navi handelchange={handelchange}/>  
        <Movie input={input}/>
          </div>
    )
}

export default Home
