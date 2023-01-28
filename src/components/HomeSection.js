import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInRight, stagger1 } from "../common/animations";

function HomeSection() {
  return (
    <HomeContainer exit={{ opacity: 0 }} initial="initial" animate="animate">
      <HomeContent variants={stagger1}>
        <Head1 variants={fadeInRight}>Hi, my name is</Head1>
        <Head2 variants={fadeInRight}>Sainayan Mahto</Head2>
        <Head3 variants={fadeInRight}>Web Developer & Designer.</Head3>
        <Para1 variants={fadeInRight}>
          I'm a <Highlight>full-stack web developer</Highlight> who specializes
          in building digital web experiences. Currently I'm a student at{" "}
          <Highlight>BITS Pilani</Highlight>, India. I have serious passion for
          UI effects, animations and creating intuitive, dynamic user
          experiences.
        </Para1>
        <Button
          variants={fadeInRight}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1NNWODE5KqGBlF4_6ICR50ESX_WJb1UwF/view?usp=sharing"
            )
          }
        >
          Resume
        </Button>
      </HomeContent>
    </HomeContainer>
  );
}

const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight1};
`;

const HomeContainer = styled(motion.div)`
  height: 60vh;
  margin: 7vh 4.5rem 0 4.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 50vh;
    margin: 7vh 3.15rem;
    text-align: center;
  }
`;

const HomeContent = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Head1 = styled(motion.p)`
  color: ${({ theme }) => theme.highlight1};
  font-size: 1.25rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Head2 = styled(motion.p)`
  color: ${({ theme }) => theme.secondary0};
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Head3 = styled(motion.p)`
  color: ${({ theme }) => theme.secondary1};
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Para1 = styled(motion.p)`
  color: ${({ theme }) => theme.secondary2};
  font-size: 1.25rem;
  font-weight: 400;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const Button = styled(motion.button)`
  color: ${({ theme }) => theme.highlight1};
  background: none;
  font-family: "Poppins", sans-serif;
  width: 10rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  border: solid 2px ${({ theme }) => theme.highlight1};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  transition: border-radius 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.highlight1}40`};
    border-radius: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.4rem 0.8rem;
  }
`;

export default HomeSection;
