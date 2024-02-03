import React from "react";
import ReactDOM from "react-dom/client";
import BookComponent from "./BookComponent";
import "./index.css";
import { Books } from "./Book";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Bookslist = () => {
  return (
    <>
      <div class="book_comp">
        <h1 className="bookheading">Best Selling Books</h1>
        <section className="booklist">
          {Books.map((book, index) => {
            return (
              <>
                <BookComponent
                  {...book}
                  key={book.id}
                  number={index}
                ></BookComponent>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

root.render(
  <>
    <h1 className="heading">Amazon Best Sellers</h1>
    <Bookslist />
  </>
);
