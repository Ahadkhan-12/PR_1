import React from "react";
import ReactDOM from "react-dom/client";
import Book1 from "./Book1";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Books = [
  {
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._AC_UF1000,1000_QL80_.jpg",
    bookname: "Interesting Facts For Curious Minds",
    author: "Jordan Moore",
  },
  {
    image: "https://m.media-amazon.com/images/I/61-hMfd7NGL._SL1400_.jpg",
    bookname: "The Psychology Of Money",
    author: "Morgan Housel",
  },
  {
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg",
    bookname: "Atomic Habits",
    author: "James Clear",
  },
];
const books_r = Books.map((Books) => {
  return (
    <Book1
      image={Books.image}
      bookname={Books.bookname}
      author={Books.author}
    />
  );
});
root.render(
  <>
    <h1 className="heading">Amazon Best Sellers</h1>
    <section className="booklist">{books_r}</section>
  </>
);
