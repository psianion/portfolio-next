import { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  stagger3,
  stagger1,
} from "../common/animations";

import {
  faAdjust,
  faBars,
  faTimes,
  faHome,
  faAddressBook,
  faCode,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar({ toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Nav variants={stagger3}>
        {/*<NavButton
          onClick={toggleMenu}
          title="Menu"
          variants={fadeInRight}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {openMenu ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </NavButton> */}
        <NavButton
          onClick={toggleTheme}
          title="Dark Mode"
          variants={fadeInLeft}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faAdjust} />
        </NavButton>
      </Nav>
      <SocialBar variants={stagger1}>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialButton>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </SocialButton>
        <SocialButton
          variants={fadeInLeft}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </SocialButton>
      </SocialBar>
      {openMenu ? (
        <Sidebar variants={fadeInRight}>
          <SideBarIcons variants={stagger1}>
            <SideButton
              variants={fadeInRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Home"
            >
              <FontAwesomeIcon icon={faHome} />
            </SideButton>
            <SideButton
              variants={fadeInRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Projects"
            >
              <FontAwesomeIcon icon={faCode} />
            </SideButton>
            <SideButton
              variants={fadeInRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Contact"
            >
              <FontAwesomeIcon icon={faAddressBook} />
            </SideButton>
            <SideButtonResume
              variants={fadeInRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Resume"
            >
              <FontAwesomeIcon icon={faFileAlt} />
            </SideButtonResume>
          </SideBarIcons>
        </Sidebar>
      ) : (
        <></>
      )}
    </motion.div>
  );
}

const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 7vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0.7rem 0.7rem;
  }
`;

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0rem 1rem;
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.7rem 0.7rem;
    width: 3.15rem;
  }
`;

const SocialBar = styled(motion.div)`
  position: fixed;
  height: 100%;
  right: 0;
  bottom: 0;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem;
    width: 2.75rem;
  }
`;

const LogoH1 = styled.h1`
  color: ${({ theme }) => theme.highlight1};
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavButton = styled(motion.button)`
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

const SideBarIcons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const SocialButton = styled(motion.div)`
  color: ${({ theme }) => theme.highlight0};
  width: 2rem;
  height: 2rem;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`;

const SideButton = styled(motion.div)`
  background-color: ${({ theme }) => theme.primary2};
  color: ${({ theme }) => theme.secondary1};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30%;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
  }
`;

const SideButtonResume = styled(motion.div)`
  background-color: ${({ theme }) => theme.highlight1};
  color: ${({ theme }) => theme.primary0};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30%;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
  }
`;

export default Navbar;
