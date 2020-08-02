import React, { Component } from 'react';

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
        }
    }

    onSubmitHandler = e => {
        e.preventDefault()
        
        this.setState({
            firstname: e.target.fistname.value,
            lastname: e.target.value,
        })

    console.log(this.state.firstname)
    console.log(this.state.lastname)

    }

    render() {

        const style = {
                color: "black",
            }

        const selector = {
            outline: "none",
        }

        return (
            <div className="contactContainer">
              <h1 className="enquiryText"> Enquiry Form </h1>
              <hr className="divider" />
               <div className="contactForm"> 
                <form>
                    <div className="inputWrapper">
                        <div className="inputItems">
                            <input type="text" onChange={this.onSubmitHandler} className="inputGroup" placeholder="First Names" />
                            <input type="text" onChange={this.onSubmitHandler} className="inputGroup" placeholder="Last Name" />
                            <input type="email" className="inputGroup" placeholder="Email Address" />
                            <input type="telephone" className="inputGroup" placeholder="Phone Number" />
                        </div>
                    </div>
                    <textarea type="text" className="textarea" placeholder="Type your enquiry here..." />
                    <p style={style}> How would you like me to respond to your enquiry? Select the most prefered way: </p>
                    <div className="selectOption">
                        <select className="selectOption" style={selector}>
                            <option> Select </option>
                            <option> Email </option>
                            <option> Phone </option>
                            <option> Both </option>
                        </select>
                    </div>
                    <button type="button" onClick={this.onSubmitHandler} className="submitBTN"> Submit </button>
                </form>
               </div>
            </div>
        )
    }
}