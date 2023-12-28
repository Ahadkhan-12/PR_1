import "./index.css";

const Book1 = (props) => {
  return (
    <>
      <div className="books">
        <img src={props.image} alt={props.bookname} />
        <h4>{props.bookname}</h4>
        <p>{props.author}</p>
      </div>
    </>
  );
};
export default Book1;
