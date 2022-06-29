import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";

import "../../styles/nav.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-end;
  z-index: 10;
  padding: 20px;
  margin: 0;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #dedede;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
  }

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    background-color: transparent;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #fff;
    margin: 15px;
    margin-right: 20px;
    a {
      color: var(--color-dark);
      text-decoration: none;
    }

    @media (min-width: 768px) {
      p {
        margin-top: 0;
      }
      justify-content: center;
      align-items: center;
    }
  }
`;

const Dot = styled.span`
  color: var(--color-dark);
  display: none;
  font-weight: 800;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
  }
`;

const RightNav = (props) => {
  let { open, setOpen } = props;
  return (
    <Ul open={open}>
      <li className="menu-item">
        <Link to="/base" onClick={() => setOpen(!open)}>
          base
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link to="/mama" onClick={() => setOpen(!open)}>
          mama
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link to="/work" onClick={() => setOpen(!open)}>
          work
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link to="/about" onClick={() => setOpen(!open)}>
          about
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link to="/tarieven" onClick={() => setOpen(!open)}>
          tarieven
        </Link>
      </li>
      <Dot className="dot">&#8226;</Dot>

      <li className="menu-item">
        <Link to="/contact" onClick={() => setOpen(!open)}>
          contact
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
