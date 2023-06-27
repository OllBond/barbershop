import { BrowserRouter } from "react-router-dom";

import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Main />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
