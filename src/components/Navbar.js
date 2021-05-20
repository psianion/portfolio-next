import styled from "styled-components";
import { faAdjust, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar({ toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Nav>
      {/* 
      <NavList>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </NavList>
      */}
      <NavButton onClick={toggleMenu} title="Menu">
        {openMenu ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </NavButton>
      <LogoH1>Logo</LogoH1>
      <NavButton onClick={toggleTheme} title="Dark Mode">
        <FontAwesomeIcon icon={faAdjust} />
      </NavButton>
    </Nav>
  );
}

const Nav = styled.div`
  top: 0;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0rem 1rem;

  @media (max-width: 768px) {
    padding: 0.7rem 0.7rem;
  }
`;

const LogoH1 = styled.h1`
  color: ${({ theme }) => theme.highlight1};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavList = styled.ul`
  width: 30vw;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  z-index: 1;
  padding: 0rem 1rem;

  @media (max-width: 768px) {
    width: 60vw;
    font-size: 0.8rem;
    padding: 0rem 0.7rem;
  }
`;

const NavButton = styled.button`
  background-color: ${({ theme }) => theme.primary1};
  color: ${({ theme }) => theme.secondary1};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
  }
`;

export default Navbar;
