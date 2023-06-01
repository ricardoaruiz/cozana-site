import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Description } from "./components/Description";
import { Gallery, GalleryImage } from "./components/Gallery";
import { Footer } from "./components/Footer";

import cozonac1 from "./assets/images/cozonac1.png";
import cake1 from "./assets/images/cake1.jpg";
import cake2 from "./assets/images/cake2.jpg";
import cake3 from "./assets/images/cake3.jpeg";
import cake4 from "./assets/images/cake4.jpeg";
import cake5 from "./assets/images/cake5.jpeg";
import cake6 from "./assets/images/cake6.jpeg";
import cake7 from "./assets/images/cake7.jpeg";
import cake8 from "./assets/images/cake8.jpeg";

const IMAGES: GalleryImage[] = [
  { img: cake1, alt: "cake1" },
  { img: cake2, alt: "cake2" },
  { img: cake3, alt: "cake3" },
  { img: cake4, alt: "cake4" },
  { img: cake5, alt: "cake5" },
  { img: cake6, alt: "cake1" },
  { img: cake7, alt: "cake7" },
  { img: cake8, alt: "cake8" },
];

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
      <Gallery title="Cakes" images={IMAGES} />
      <Footer />
    </>
  );
}

export default App;
