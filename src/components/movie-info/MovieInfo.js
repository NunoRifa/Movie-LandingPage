import NSeriesLogo from "../../img/NSeriesOriginals.svg";
import Polygon from "../../img/Polygon.svg";
import Top10 from "../../img/Top10.svg";
import Info from "../../img/Info.svg";

import "./MovieInfo.css";

const MovieInfo = (props) => {
  return (
    <>
      <div className="n-series">
        <img src={NSeriesLogo} alt="n-series" />
      </div>
      <div className="movie-logo">
        <img src={props.items.movieName} alt="movie-logo" />
      </div>
      <div className="rate-on">
        <img src={Top10} alt="Top10" />
        <div className="show-on">{props.items.top10}</div>
      </div>
      <div className="movie-description">{props.items.sinopsis}</div>
      <div className="play-more">
        <div className="play">
          <img src={Polygon} alt="polygon" />
          <span>Play</span>
        </div>
        <div className="more-info">
          <img src={Info} alt="info" />
          <span>More Info</span>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
