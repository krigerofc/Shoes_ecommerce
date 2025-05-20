
import Nav from "./components/nav";
import Header from "./components/header";
import ProductList from "./components/productslist";
import Testimonials from "./components/depoimentos";
import Footer from "./components/rodape";
import MaratonaSection from "./components/MaratonaSection";

export default function Home() {
  return (
    <>
      <Nav/>
      <Header/>
      <ProductList/>
      <MaratonaSection/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
