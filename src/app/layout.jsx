/*
  Modify <head>  
  https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
*/

import Nav from "../components/globals/navBar/NavBar";
import NavMenuBtn from "../components/globals/navBar/subcomponents/navMenu/navMenuBtn/NavMenuBtn";
import Footer from "../components/globals/footer/Footer";
import Logo from "../components/globals/logo/Logo";
import SearchBar from "../components/globals/navBar/subcomponents/searchBar/SearchBar";

import "../styles/index.scss";
import NavMenu from "../components/globals/navBar/subcomponents/navMenu/NavMenu";
import {
  deleteEntireClassFromAPI,
  getEntireClassFromAPI,
  getFirstPageFromClassInAPI,
} from "src/lib/api";
import { assetsURL, categoriesURL, productsURL } from "src/api/endpoints";
import initializeProductsToAPI, {
  addAllProductsToAPI,
  assignCategoriesToAllProducts,
} from "src/lib/initialize-api";
import { initialProductsData } from "src/api/initial-products";

export default async function RootLayout({ children }) {
  // deleteEntireClassFromAPI(productsURL);
  // deleteEntireClassFromAPI(assetsURL);
  // deleteEntireClassFromAPI(categoriesURL);

  // addAllProductsToAPI(initialProductsData);
  // assignCategoriesToAllProducts();

  // initializeProductsToAPI();

  // getEntireClassFromAPI(getFirstPageFromClassInAPI, productsURL);

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
        <Nav>
          <Logo />
          <NavMenuBtn>
            <NavMenu />
          </NavMenuBtn>
          <SearchBar />
        </Nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
