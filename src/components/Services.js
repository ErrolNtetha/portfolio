import React, { Component } from "react";
import "../App.css";
import { service } from "./data.js";

export default class About extends Component {
  render() {
    const style = {
      padding: ".5em",
    };

    return (
      <>
        <section className="sectionHeader">
          <h2 className="servTitle"> Graphic Design </h2>
        </section>
        <div className="servContainer">
          {service.map((item, id) => {
            return (
              <div id={item.objectID} className="serviceItem">
                <img src={item.image} alt="computer" className="imageTitle" />
                <div className="details">
                  <h3 style={style}> {item.title} </h3>
                  <p> {item.descr} </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
