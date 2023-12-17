import React from "react";
import ReactDOM from "react-dom/client";
import Book1 from "./Book1";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1 className="heading">Amazon Best Sellers</h1>
    <Book1
      image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._AC_UF1000,1000_QL80_.jpg"
      bookname="Interesting Facts For Curious Minds"
      author="Jordan Moore"
    />
    <Book1
      image="https://m.media-amazon.com/images/I/61-hMfd7NGL._SL1400_.jpg"
      bookname="The Psychology Of Money"
      author="Morgan Housel"
    />
    <Book1
      image="https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg"
      bookname="Atomic Habits"
      author="James Clear"
    />
  </>
);
