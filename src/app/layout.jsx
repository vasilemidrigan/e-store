import Nav from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import SearchResults from "./components/searchResults/SearchResults";

import "../styles/index.scss";

import initializeProductsToAPI from "src/utils/initialize-api";
import {
  getAllCategories,
  getEntireClassFromAPI,
  getFirstPageFromClassInAPI,
} from "src/utils/api";
import { categoriesURL } from "src/api/endpoints";

export default function RootLayout({ children }) {
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
        <CategoriesBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
