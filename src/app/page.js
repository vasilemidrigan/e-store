"use client";

import "./styles/index.scss";

import Nav from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import ProductsMenu from "./components/productsMenu/ProductsMenu";

import Homepage from "./pages/homepage/Homepage";

export default function Home() {
  return (
    <div className="AppWrapper">
      <Nav/>
      <ProductsMenu/>
      <CategoriesBar/>
      <Homepage/>
      <Footer/>
    </div>
  )
}
