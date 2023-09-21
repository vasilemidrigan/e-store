"use client";

import "./styles/index.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CategoriesBar from "./components/CategoriesBar";

import Homepage from "./pages/Homepage";

export default function Home() {
  return (
    <div className="AppWrapper">
      <Nav/>
      <CategoriesBar/>
      <Homepage/>
      <Footer/>
    </div>
  )
}
