import React, { Component } from "react";
import Modal2 from "./Modal2";

class ParentModal2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalStatus: false,
    };
  }

  openModal = () => {
    this.setState({
      modalStatus: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalStatus: false,
    });
  };

  render() {
    return (
      <div>
        <h1>open the modal</h1>
        <button onClick={this.openModal}>Open</button>
        {this.state.modalStatus ? (
          <Modal2 onClose={this.closeModal}>
            This is the Modal that you open
          </Modal2>
        ) : null}
      </div>
    );
  }
}

export default ParentModal2;
