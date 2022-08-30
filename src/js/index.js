//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle

//import your own components
import Layout from "./layout.jsx";

//render your react applications
ReactDOM.render(<Layout />, document.querySelector("#app"));
