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
      <Description />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
