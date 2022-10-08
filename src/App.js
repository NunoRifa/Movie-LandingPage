import background from "./img/MainShowBG.png";

import "./App.css";

import { Container } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Carousel />
      </Container>
    </div>
  );
}

export default App;
