import React from "react";
import ReactDOM from "react-dom/client";
import Book1 from "./Book1";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1 className="heading">Amazon Best Sellers</h1>
    <Book1 />
    <Book1 />
    <Book1 />
  </>
);
