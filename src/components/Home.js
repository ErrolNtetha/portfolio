import React, { Component } from "react";
import Title from "./Title";
import "../App.css";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <div className="article">
          <h1 className="articleHeader"> First Impression... </h1>
          <p className="p1">
            It is important for your business to be easily recognizable and get your 
             custormers and clients familiar with what you offer. Graphic design helps
             your business to communicate with the audience in a very minimalistic way because
             a graphical presentation is easy to recall and understand.
          </p>
          {/* <h1 className='articleHeader'> What i do... </h1> */}
          <div className="secPara">
            <p className="p2">
              I am the Graphic Designer by heart and hereby to bridge the gap between you and
               your custormers/clients. I am proficent and well versed in designing an affordable, high quality 
              project. I always want to work my way out to the top. Meeting my clients' needs
              is always my priorities.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
