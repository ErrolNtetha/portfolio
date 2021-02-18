import React, { Component } from "react";
import AboutItems from "./AboutItems";
import { about } from './data';
import "../App.css";

export default class About extends Component {
  state = {
    title: about.title,
    paragraph: about.paragraph,
  }

  handleChange = () => {
    this.setState({
      title: "I am Errol, i have no life!"
    })
  }
  
  render() {
    const { title, paragraph } = this.state
    
    return (
      // A three column nodes
      <div>
        <AboutItems onclick={this.handleChange} title={title} paragraph={paragraph} />
      </div>
    );
  }
}
