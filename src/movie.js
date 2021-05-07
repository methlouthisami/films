import React, { useEffect, useState } from "react";
import "./movie.css";
import { Card, Button } from "react-bootstrap";

function Movie({ input }) {
  const [movie, setmovie] = useState([]);

  const getMovie = () => {
    fetch("movie.json")
      .then((response) => response.json())
      .then((movies) => setmovie(movies));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log("%c render() du se composent ", "color:green;");

  return movie
    .filter((ro) => {
      if (input === "") {
        return ro;
      } else if (ro.title.toLowerCase().includes(input.toLowerCase())) {
        return ro;
      }
    })
    .map((el) => (
      <div className="cward">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={el.image} />
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
              <div className="mr-auto">
                {el.rating}
                <img src="/favoris.png" className="favoris" />
              </div>
              <h6>{el.genre}/</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
}

export default Movie;
