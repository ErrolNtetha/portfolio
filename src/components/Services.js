import React, { Component } from 'react';
import service from "./data.js"

export default class About extends Component {
    render() {
        return (
            <div classsName="servContainer">
                        <h2> This is a service page </h2>

                { service.map((item, id) => {
                    return (
                        <div id={item.objectID} className="serviceItem"> 
                            <img src={item.image} alt="computer" className="imageTitle" />
                            <h3> {item.title} </h3>
                            <p> {item.descr} </p>
                        </div>
                    )
                }) }
            </div>
        )
    }
}