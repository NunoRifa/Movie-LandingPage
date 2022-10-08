import "./App.css";

import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";

function App() {
  const dataMovie = {
    id: "moc001",
    top10: "#1 in TV Shows Today",
    sinopsis:
      "Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger.",
  };

  // const popularOnNetflix = [
  //   {
  //     id: "mo001",
  //   },
  // ];

  return (
    <div className="App">
      <Container>
        <Navbar />
        <Carousel onDataMovie={dataMovie} />
      </Container>
    </div>
  );
}

export default App;
