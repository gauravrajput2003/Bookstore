const Book = (props) => {
    const { title, imgLink, author } = props;
    return (
      <div className="book">
        <h2>{title}</h2>
        <img src={imgLink} />
        <h3>{author}</h3>
      </div>
    );
  };
  export default Book;
  