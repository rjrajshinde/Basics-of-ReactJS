import React from "react";
import ReactDOM from "react-dom";
const portalElement = document.getElementById("portal-root");

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portal Demo in div id = 'portal-root'</h1>,
    portalElement
  );
}

export default PortalDemo;
