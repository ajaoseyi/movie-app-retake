import React, { useEffect, useState } from "react";
import "../App.css";
const Modal = (props) => {
  console.log(props.index)
  
  console.log(props.movie[props.index].Poster);
  return (
    <div className="modal_container">
      <img> src={props.movie[props.index].Poster}</img>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <div>
        <h4>{props.type}</h4>
        <h4>{props.imdb}</h4>
      </div>

    </div>
  );
};

export default Modal;
