"use client";

import "./styles/index.scss";

import Nav from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import ProductsMenu from "./components/productsMenu/ProductsMenu";
import SearchResults from "./components/searchResults/SearchResults";

import Homepage from "./pages/homepage/Homepage";
import ProductListing from "./pages/productListing/ProductListing";

export default function Home() {
  return (
    <div className="AppWrapper">
      <Nav/>
      <SearchResults/>
      <ProductsMenu/>
      <CategoriesBar/>
      {/* <Homepage/> */}
      <ProductListing/>
      <Footer/>
    </div>
  )
}
