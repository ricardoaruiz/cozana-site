import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type PageTemplateProps = {
  children: React.ReactNode;
};

export function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <Header />

      <div style={{ marginTop: "9rem" }}>{children}</div>

      <Footer />
    </>
  );
}
