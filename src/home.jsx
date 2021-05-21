import { React, useState } from 'react'
import Navi from "./nav"
import Movie from "./movie";


const Home = ({ getFavoris, movie, favouriteMovie, Remove}) => {
    const [input, setInput] = useState("")
    const handelchange = (e) => {
        setInput(e.target.value)
    }



    return (
        <div className="page_home">

            <Navi handelchange={handelchange} favouriteMovie={favouriteMovie} />
            <input placeholder="rechercher" onChange={handelchange} />

            <div className="d-flex flex-wrap justify-content-between mov">
                <Movie input={input} getFavoris={getFavoris} movie={movie} /></div>
        </div>
    )
}

export default Home
