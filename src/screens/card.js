import React, {useEffect, useState } from "react";
import "../App.css";
const Card = (props) =>{
    const [containerIndex, setContainerIndex] = useState();

   
    useEffect(() => {
       props.passIndex(containerIndex);
       
       
    });
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="movie"
          onClick={() => {
           setContainerIndex(index);
            props.onclick();
            console.log(index)
          }}
        >
          <img src={movie.Poster} />
          <ul>
            <li className="movie_title">{movie.Title}</li>
            <li>{movie.Year}</li>
            <li>{movie.type}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Card