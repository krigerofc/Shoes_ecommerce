
import Nav from "./components/nav";
import Header from "./components/header";
import ProductList from "./components/productslist";
import Testimonials from "./components/depoimentos";
import Footer from "./components/rodape";

export default function Home() {
  return (
    <>
      <Nav/>
      <Header/>
      <ProductList/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
