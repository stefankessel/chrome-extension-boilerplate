import React from "react";
import ReactDOM from "react-dom";

const test = <p>My React chrome Extension</p>;

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(test, root);
