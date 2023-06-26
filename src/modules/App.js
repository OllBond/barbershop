import { BrowserRouter } from "react-router-dom";

import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Main />
      </Container>
    </BrowserRouter>
  );
}

export default App;
