import React from "react";

// import ReactDOM
import ReactDOM from "react-dom";

function PortalDemo() {
    // attach the returned JSX into the portal-root node
    // ReactDOM.createPortal(JSX, DOM Node)
    return ReactDOM.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById("portal-root")
    );
}

export default PortalDemo;
