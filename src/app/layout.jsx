import Nav from "./components/navBar/NavBar";
import { NavMenuWrapper } from "./components/navBar/subcomponents/navMenu/navMenuWrapper";
import Footer from "./components/footer/Footer";
import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import Logo from "./components/globals/Logo";
import SearchBar from "./components/navBar/subcomponents/searchBar/SearchBar";

import "../styles/index.scss";

export default async function RootLayout({ children }) {
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
          <NavMenuWrapper />
          <SearchBar />
        </Nav>
        <CategoriesBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
