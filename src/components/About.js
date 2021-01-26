import React, { Component } from "react";
import "../App.css";

export default class About extends Component {
  render() {
    const textColor = {
      color: "black",
    };

    return (
      // A three column nodes
      <div style={textColor} className="skillContainer">
        <div className=" nodeBlock">
          <div>
            <h4> Skills Set </h4>
            <ul>
              <li> Gaming </li>
              <li> Techinal Abilities </li>
              <li> Good Thinker </li>
              <li> Strategist </li>
            </ul>
          </div>
        </div>
        <div className=" nodeBlock">
          <div>
            <h4> Developer Toolbox </h4>
            <ul>
              <li> Gaming </li>
              <li> Techinal Abilities </li>
              <li> Good Thinker </li>
              <li> Strategist </li>
              <li> C Programming </li>
              <li> JavaScript </li>
              <li> ReactJS </li>
            </ul>
          </div>
        </div>
        <div className=" nodeBlock">
          <div>
            <h4> School </h4>I always strive to making sure that i meet the
            clients' needs right on time, and pride myself in what I offer. I am
            a well driven, disciplined person, and I am an autodidact. At all
            times, I often strive to satisfy my curiousity in all possible ways
            and to the best of my abilities. I am always eager to learn, and
            loving to know why and how things work.
          </div>
        </div>
      </div>
    );
  }
}
