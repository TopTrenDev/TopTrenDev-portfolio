import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PreloadMedia from "../components/PreloadMedia";
import { media } from "../constants";

import "./index.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreloadMedia images={Object.values(media)}>
        <App />
      </PreloadMedia>
    </BrowserRouter>
  </React.StrictMode>
);
