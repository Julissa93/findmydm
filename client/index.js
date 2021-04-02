import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <h1>Welcome to our D&D app!</h1>
      <Login />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
