import React from "react";
import ReactDOM from "react-dom";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable'

import App from "./App";
import "./resources/style/normalize.css" 
import "./resources/style/style.scss"



ReactDOM.render(<App />, document.querySelector("#root"));

