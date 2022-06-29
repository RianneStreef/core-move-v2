import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/style.css";

const GlobalStyle = createGlobalStyle`

  body{
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    background-color: #30838c;
    color: #abe9ef;
  }
  
`;

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
