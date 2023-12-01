/*
  Modify <head>  
  https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
*/


/* temp component for logging data into dev console */
import ClientLog from "@/components/ClientLog";

import Logo from "../components/globals/logo/Logo";
import NavBar from "../components/globals/navBar/NavBar";
import NavMenu from "../components/globals/navBar/subcomponents/navMenu/NavMenu";
import NavMenuBtn from "../components/globals/navBar/subcomponents/navMenu/navMenuBtn/NavMenuBtn";
import DarkBg from "../components/globals/darkBg/DarkBg";
import SearchBar from "../components/globals/navBar/subcomponents/searchBar/SearchBar";
import Footer from "../components/globals/footer/Footer";

import "../styles/index.scss";

import { MenuContext } from "src/context/providers";

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
        {/* Roboto Condensed */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <ClientLog />
        {/* <MenuContext>
          <NavBar>
            <Logo />
            <NavMenuBtn>
              <NavMenu />
            </NavMenuBtn>
            <SearchBar />
          </NavBar>
          {/* darken background when menu is active */}
          {/* <DarkBg />
          {children}
          <Footer />
        </MenuContext> */}
      </body>
    </html>
  );
}
