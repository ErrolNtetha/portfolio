import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    this.setState({
      firstname: e.target.firstName.value,
      lastname: e.target.lastname.value,
    });

    console.log(this.state.firstname);
    console.log(this.state.lastname);
  };

  render() {
    const style = {
      color: "black",
    };

    return (
      <div className="contactContainer">
        <h1 className="enquiryText"> Enquiry Form </h1>
        <hr className="divider" />
        <div className="contactForm">
          <form>
            <div className="inputWrapper">
              <div className="inputItems">
                <input
                  type="text"
                  name="firstName"
                  onChange={this.onSubmitHandler}
                  className="inputGroup"
                  placeholder="First Names"
                />
                <input
                  type="text"
                  name="lastname"
                  onChange={this.onSubmitHandler}
                  className="inputGroup"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="inputGroup"
                  placeholder="Email Address"
                />
                <input
                  type="telephone"
                  className="inputGroup"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <textarea
              type="text"
              className="textarea"
              placeholder="Have a question? Type here..."
            />
            <p style={style}> Attach file (Optional): </p>
            <span className="uploadGroup">
              <input
                type="file"
                style={{
                  backgroundColor: "black",
                  borderRadius: "10px",
                  margin: "auto",
                }}
                name="fileAttach"
                className="fileAttchment"
              />
            </span>
            <div style={{ margin: "1em", textAlign: "center" }}>
              <button
                type="submit"
                onClick={this.onSubmitHandler}
                className="submitBTN"
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
        <p style={{ textAlign: "center", fontSize: "8pt" }}>
          {" "}
          By submitting this form, you agree to the Terms and Conditions.{" "}
        </p>
      </div>
    );
  }
}
