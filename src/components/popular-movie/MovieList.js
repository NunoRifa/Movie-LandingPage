import "./MovieList.css";

const MovieList = (props) => {
  return (
    <>
      {props.items.length === 0 ? (
        <div className="__error">
          <h2>Movie is Not Found.</h2>
        </div>
      ) : (
        props.items.map((list) => (
          <div className="movie-list" key={list.id}>
            <img src={list.movieName} alt="movie-list" />
          </div>
        ))
      )}
    </>
  );
};

export default MovieList;
