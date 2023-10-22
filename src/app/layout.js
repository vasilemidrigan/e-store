/*
  Notes: 
    Find a solution to persist data trough refreshes on 
         addMultipleItemsToCommerceJS()
*/

"use client";

import { Provider } from "react-redux";
import store from "./store";

import Nav from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import ProductsMenu from "./components/productsMenu/ProductsMenu";
import SearchResults from "./components/searchResults/SearchResults";

import "../styles/index.scss";

export default function RootLayout({ children }) {
  // const imgRefIphone13Pro = ref(storage, "smartphones/apple-iphone-13-pro");
  // const urls = getImages(imgRefIphone13Pro);
  // readFromDb(productsURL, { limit: 10 });
  // addItemToDb(productsURL, { product: { name: "Phone", price: 3 } });

  // addItemsToDb(allProducts);

  // store.dispatch(fetchProducts());

  // when application starts, write items into commerce.js
  // addMultipleItemsToCommerceJS(allProducts);

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
        <Provider store={store}>
          <Nav />
          <SearchResults />
          <ProductsMenu />
          <CategoriesBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
