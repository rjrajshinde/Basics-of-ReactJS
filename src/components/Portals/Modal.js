import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css.css";
const modal = document.getElementById("modal-root");

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        {this.props.children}
        <hr />
        <button className="modal-btn" onClick={this.props.onClose}>
          close
        </button>
      </div>,
      modal
    );
  }
}

export default Modal;
