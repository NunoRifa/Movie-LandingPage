import MovieInfo from "../movie-info/MovieInfo";
import "./Carousel.css";

const Carousel = (props) => {
  return (
    <div className="carousel__personal">
      <MovieInfo items={props.onDataMovie} />
    </div>
  );
};

export default Carousel;
