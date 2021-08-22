import React, { Component } from "react";
import Modal from "./Modal";

class ParentModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div>
        <h1>OPEN the MODAL</h1>
        <button className="btn" onClick={this.openModal}>
          Open
        </button>
        {this.state.showModal ? (
          <Modal onClose={this.closeModal}>
            Thank You for the Opening the Modal
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default ParentModal;
