import { BrowserRouter } from "react-router-dom";

import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
      </Container>
    </BrowserRouter>
  );
}

export default App;
