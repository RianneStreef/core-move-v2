import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

import "../../styles/nav.css";

const Nav = styled.nav`
  min-height: 55px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Navbar = (props) => {
  let { language, setLanguage } = props;
  return (
    <Nav id="navbar">
      <Burger language={language} setLanguage={setLanguage} />
    </Nav>
  );
};

export default Navbar;
