import React, { Component } from "react";
import Title from "./Title";
import "../App.css";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <Title />
        <div className="article">
          <h1 className="articleHeader"> About... </h1>
          <p className="p1">
            {/* It is important for your business to be easily recognizable and get your 
             custormers and clients familiar with what you offer. Graphic design helps
             your business to communicate with the audience in a very minimalistic way because
             a graphical presentation is easy to recall and understand. */}
            I am a React Front-End Developer who aspires to become a Software Engineer. I always envision
            myself as a hard and a dedicated worker who always eager to know why and how things work. I possess a strong problem-solving skill in
            technological environment. I am a highly motivated individual, and as well as goal driven.
          </p>
          {/* <h1 className='articleHeader'> What i do... </h1> */}
          <div className="secPara">
            <p className="p2">
              I am a hobbyist Graphic Designer by heart, and i thought adding this skill to my
              toolbox will be very essential for making nice UI for web applications.
              Designing has always been my passion, and incorporating this skill will work best.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
