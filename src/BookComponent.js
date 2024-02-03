import "./index.css";

const Book = (props) => {
  const { image, bookname, author, number } = props;
  return (
    <>
      <div class="book_comp">
        <div class="numbers">{`# ${number + 1}`}</div>
        <div class="triangle "></div>
        <div className="books">
          <img src={image} alt={bookname} />
          <h4>{bookname}</h4>
          <p>{author}</p>
        </div>
      </div>
    </>
  );
};
export default Book;
