/*
  Modify <head>  
  https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
*/

import Nav from "../components/navBar/NavBar";
import NavMenuBtn from "../components/navBar/subcomponents/navMenu/navMenuBtn/NavMenuBtn";
import Footer from "../components/footer/Footer";
import Logo from "../components/globals/Logo";
import SearchBar from "../components/navBar/subcomponents/searchBar/SearchBar";

import "../styles/index.scss";
import NavMenu from "../components/navBar/subcomponents/navMenu/NavMenu";

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
