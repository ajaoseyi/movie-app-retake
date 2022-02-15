import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import Card from "../screens/card.js"
import Modal from "../screens/modal"
import Hero from "../assets/hero.svg";
import Logo from "../assets/logo.png";
import movie from "../assets/herotwo.svg";
import Lottie from "react-lottie";
import loader from "../assets/loader.json";

 

export function Welcome(props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [plot, setPlot] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [displayForm, setDisplayForm] = useState(false);
  const [displayName, setDisplayName] = useState(true);
  const [movieScreen, setMovieScreen] = useState(false);
  const [modalScreen, setModalScreen] = useState(false);
  const [index, setIndex] = useState()
  const [search, displaySearch] = useState({});
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  console.log(name);
  console.log(search)

 

  const searchData = async () => {
    setLoading(true);
    setDisplayForm(false);
   
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=1edf7a86&${
      title ? `s=${title}` : ""
    }${type ? `type=${type}` : ""}${date ? `y=${date}` : ""}`;

    const response = await fetch(url);
    const data = await response.json();
    displaySearch(data.Search)
 
   
   
  };

  if (loading) {
    setTimeout(
      () => {
        setLoading(false);
         setMovieScreen(true);
      },
      5000
    );
  }
   console.log(search[0]);
   console.log(movieScreen);
  return (
    <div className="overall_container container-fluid">
      {displayName && (
        <div>
          <div className="logo">
            <img src={Logo} alt="Find film" />
          </div>
          <div className="hero">
            <img src={Hero} alt="Find film" />
          </div>
          <h3>What should we call you ?</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="submit_button"
            onClick={() => {
              setDisplayForm(true);
              setDisplayName(false);
            }}
          >
            SUBMIT
          </button>
        </div>
      )}
      {displayForm && (
        <div className="information_container">
          <div className="logo">
            <img src={Logo} alt="Find film" />
          </div>
          <div className="hero">
            <img src={movie} alt="film movie " />
          </div>
          <h3>Hello {name},</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Movie/Series"
          />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
          />
          <input
            type="text"
            value={plot}
            onChange={(e) => setPlot(e.target.value)}
            placeholder="Plot"
          />

          <button
            className="submit_button"
            onClick={() => {
              searchData();
            }}
          >
            SUBMIT
          </button>
        </div>
      )}
      {loading && (
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
          <div className="logo_middle">
            <img src={Logo} alt="Find film" />
          </div>
        </div>
      )}
      {movieScreen && (
        <div>
          <div className="logo">
            <img src={Logo} alt="Find film" />
          </div>
          <div>
            <div className="movies-container">
              <Card
                movies={search}
                onclick={(e) => {
                  setModalScreen(!modalScreen);
                  console.log(index)
                  console.log(search[0])
                }}
                passIndex= {setIndex}
              />
            </div>
            {modalScreen && (
              <div>
               <Modal
               movie={search}
              index={index}
                /> 
              </div>
            )}
            
          </div>
        </div>
      )}
  
    </div>
  );
}
