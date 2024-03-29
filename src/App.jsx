import {
  Mision,
  Evento,
  Mensaje,
  TeamSection,
  Entrenadores,
  Banner,
  Contacto,
  Galeria,
  Footer,
  HeroSlider,
  Acerca,
  Awards,
} from "./sections";

import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main>
      <Nav />
      <HeroSlider />
      <Acerca />
      <Mision />
      <Awards />
      <Entrenadores />
      <Mensaje />
      <Banner />
      <Evento />
      <TeamSection />
      <Galeria />
      <Contacto />
      <Footer />
    </main>
  );
};

export default App;
