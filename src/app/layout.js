"use client";

import Nav from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import ProductsMenu from "./components/productsMenu/ProductsMenu";
import SearchResults from "./components/searchResults/SearchResults";

import "../styles/index.scss";

import getImages from "src/utils/getImages";
import { ref } from "firebase/storage";
import { storage } from "src/api/firebase/firebase-config";

import { deleteItemsFromDb } from "src/utils/delete";

import { addItemToDb } from "src/utils/api";
import { readFromDb } from "src/utils/read";

import { productsURL } from "src/api/commercejs/endpoints";

export default function RootLayout({ children }) {
  // const imgRefIphone13Pro = ref(storage, "smartphones/apple-iphone-13-pro");
  // const urls = getImages(imgRefIphone13Pro);
  // readFromDb(productsURL, { limit: 10 });
  // addItemToDb(productsURL, { product: { name: "Phone", price: 3 } });

  return (
    <html lang="en">
      <head>
        {/* roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* pt sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@700&family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Nav />
        <SearchResults />
        <ProductsMenu />
        <CategoriesBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
