"use client";

import "./styles/index.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CategoriesBar from "./components/CategoriesBar";

export default function Home() {
  return (
    <div className="Homepage">
      <Nav/>
      <CategoriesBar/>
      homepage
      <Footer/>
    </div>
  )
}
