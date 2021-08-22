import React, { Component } from "react";

//Method 1
// createRef approach

//with use of Refs we can focus something or some element when we go to the page or refresh the page
//means when we refresh any form page then it focuses on the first textbox
class RefsComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>CLick</button>
      </div>
    );
  }
}

export default RefsComp;
