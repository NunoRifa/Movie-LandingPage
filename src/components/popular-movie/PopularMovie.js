import "./PopularMovie.css";

import MovieList from "./MovieList";

const PopularMovie = (props) => {
  return (
    <div className="popular-movie">
      <span>Popular on Netflix</span>
      <div className="movie-list">
        {props.onPopular.map((list) => (
          <MovieList key={list.id} items={list} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
