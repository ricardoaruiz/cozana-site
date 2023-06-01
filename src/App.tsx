import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Description } from "./components/Description";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

import cozonac1 from "./assets/images/cozonac1.png";

function App() {
  return (
    <>
      <Header />
      <Banner img={cozonac1} text="Făcut cu dragoste" />
      <Description
        title="Despre"
        text="Cozana Home este o brutărie artizanală unde se simte aroma cozonacilor
          cu parfum de sarbatoare tot timpul anului, nu doar de sărbători. Se
          plămădesc din ingrediente naturale, și se coc în tihnă. Indiferent
          dacă sunt cu nucă, stafide, rahat sau mac sunt dulci, francezi de se
          topesc în gură. Cozonacii se fac la comandă, după pofta clientului,
          iar ingredientul secret , un stop de iubire născut din pasiunea pentru
          dulciuri sănătoase."
      />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
