import React, { useState } from "react";

import "./PopularMovie.css";

import MovieList from "./MovieList";
import Filter from "./Filter";

const PopularMovie = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const getFilterValue = (selected) => {
    setFilterYear(selected);
  };

  const filterMovie = props.onPopular.filter((movieFilter) => {
    return movieFilter.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <div className="filtered">
        <span>Popular on Netflix</span>
        <Filter selected={filterYear} onGetValue={getFilterValue} />
      </div>
      <div className="popular-movie">
        <div className="movie-list">
          <MovieList items={filterMovie} />
        </div>
      </div>
    </>
  );
};

export default PopularMovie;
