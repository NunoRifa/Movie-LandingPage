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
      date: new Date(2021, 9, 11),
    },
    {
      id: "mo002",
      movieName: "https://imgur.com/fy8ZCTI.png",
      date: new Date(2020, 7, 14),
    },
    {
      id: "mo003",
      movieName: "https://imgur.com/N2E27JM.png",
      date: new Date(2020, 3, 10),
    },
    {
      id: "mo004",
      movieName: "https://imgur.com/DBYYCkw.png",
      date: new Date(2021, 5, 22),
    },
    {
      id: "mo005",
      movieName: "https://imgur.com/Xt1Lr0y.png",
      date: new Date(2022, 9, 22),
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
