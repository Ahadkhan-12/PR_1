import "./App.css";

const Book1 = (props) => {
  return (
    <>
      <div className="books">
        <img src={props.image} alt="img" />
        <h4>{props.bookname}</h4>
        <p className="op">{props.author}</p>
      </div>
    </>
  );
};
export default Book1;
