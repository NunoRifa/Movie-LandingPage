import "./App.css";

import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import PopularMovie from "./components/popular-movie/PopularMovie";

function App() {
  const dataMovie = {
    id: "moc001",
    movieName: "https://imgur.com/tbHuIoA.png",
    top10: "#1 in TV Shows Today",
    sinopsis:
      "Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger.",
  };

  const popularOnNetflix = [
    {
      id: "mo001",
      movieName: "https://imgur.com/XnDssRn.png",
      releaseYear: "2021",
    },
    {
      id: "mo002",
      movieName: "https://imgur.com/fy8ZCTI.png",
      releaseYear: "2020",
    },
    {
      id: "mo003",
      movieName: "https://imgur.com/N2E27JM.png",
      releaseYear: "2020",
    },
    {
      id: "mo004",
      movieName: "https://imgur.com/DBYYCkw.png",
      releaseYear: "2021",
    },
    {
      id: "mo005",
      movieName: "https://imgur.com/Xt1Lr0y.png",
      releaseYear: "2022",
    },
  ];

  return (
    <div className="App">
      <Container>
        <Navbar />
        <Carousel onDataMovie={dataMovie} />
        <PopularMovie onPopular={popularOnNetflix} />
      </Container>
    </div>
  );
}

export default App;
