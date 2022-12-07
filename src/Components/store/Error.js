import React from "react";
import "./Error.css";
import "./ErrorButton.css";
import ReactDOM from "react-dom"

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};
const ModelOverley = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button className="button" onClick={props.onConfirm}>
          Okay
        </button>
      </footer>
    </div>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("back-drop")
      )}
      {ReactDOM.createPortal(
        <ModelOverley
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("errorOverlay")
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
