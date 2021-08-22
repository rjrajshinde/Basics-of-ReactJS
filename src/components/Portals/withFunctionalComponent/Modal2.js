import React from "react";
import ReactDOM from "react-dom";
const modaldiv = document.getElementById("modal-root");

function Modal2(props) {
  return ReactDOM.createPortal(
    <div className="modal">
      {this.props.children}
      <hr />
      <button className="modal-btn" onClick={props.onClose}>
        close
      </button>
    </div>,
    modaldiv
  );
}

export default Modal2;
