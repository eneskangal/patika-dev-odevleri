import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import { createRoot } from 'react-dom/client'

let  root=createRoot(document.getElementById("root"))
root.render(<App />);
