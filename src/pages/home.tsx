import { PageTemplate } from "../templates/page";
import { Banner } from "../components/Banner";

import cozonac1 from "../assets/images/cozonac1.png";

export function Home() {
  return (
    <PageTemplate>
      <Banner img={cozonac1} text="Făcut cu dragoste" />
    </PageTemplate>
  );
}
