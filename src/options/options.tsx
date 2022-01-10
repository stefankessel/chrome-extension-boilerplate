import React from "react";
import ReactDOM from "react-dom";
import "./options.css";

const test = <p>My React chrome Extension Options</p>;

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(test, root);
