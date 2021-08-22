import React, { Component } from "react";

//Method 2
// callback ref approach

class RefsComp2 extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
      //   console.log(this.setCbRef.current.value);
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
        {/* <button onClick={this.clickHandler}>Click</button> */}
      </div>
    );
  }
}

export default RefsComp2;
