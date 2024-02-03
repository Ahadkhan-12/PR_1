import "./index.css";

const Book = (props) => {
  const { image, bookname, author } = props;
  return (
    <>
      <div className="books">
        <img src={image} alt={bookname} />
        <h4>{bookname}</h4>
        <p>{author}</p>
      </div>
    </>
  );
};
export default Book;
