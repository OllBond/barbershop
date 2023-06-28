import { BrowserRouter } from "react-router-dom";

import Container from "./Container/Container";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import UserRoutes from "../UserRoutes";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <UserRoutes />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
