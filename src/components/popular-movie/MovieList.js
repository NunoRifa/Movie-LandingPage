import "./MovieList.css";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      <img src={props.items.movieName} alt="movie-list" />
    </div>
  );
};

export default MovieList;
