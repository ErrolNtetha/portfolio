import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
               <div>
                   <h1> Enquiry </h1>
                   <div className="contactForm"> 
                        <form>
                            <label> Name </label>
                            <input placeholder="Enter your name..." />
                        </form>
                   </div>
               </div>
            </div>
        )
    }
}