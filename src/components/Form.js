import React, { Component } from "react";

//here we used the events onClick and onSubmit to convert this form into a react component
// with this react form Component we can handle the data

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //this is where we can save this form data in the form of properties
      name: "",
      address: "",
      courses: "Node",
    };
  }

  //this are the event function for changing the values of input boxes
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleChangeCourse = (event) => {
    this.setState({
      courses: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.name} ${this.state.address} ${this.state.courses}`);
    //to prevent the refresh the page after clicking the submit button
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            cols="30"
            rows="5"
            value={this.state.address}
            onChange={this.handleChangeAddress}
          ></textarea>
        </div>
        <div>
          <label>Courses:</label>
          <select value={this.state.courses} onChange={this.handleChangeCourse}>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="Next">Next</option>
          </select>
        </div>
        <button type="submit">submit</button>
        {/* if there is no form then we can give the submit functionality to the button with the use of the onClick() eventhandler  */}
        {/* <button type="submit" onClick={this.handleSubmit}>
          submit
        </button> */}
      </form>
    );
  }
}

export default Form;
