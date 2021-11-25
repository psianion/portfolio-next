import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

function Footer() {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <FooterBG>
        <Bubbles>
          <Bubble1></Bubble1>
          <Bubble2></Bubble2>
          <Bubble3></Bubble3>
          <Bubble4></Bubble4>
        </Bubbles>
      </FooterBG>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
`;

const FooterBG = styled(motion.div)`
  position: relative;
  width: 100%;
  background: ${({ theme }) => `${theme.highlight1}`};
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Bubbles = styled(motion.div)``;

const animate = keyframes`
from {
    background-position-x: 1000px;
}
to {
    background-positon-x: 0px;
}
`;

const animateWaves = keyframes`
from {
    background-position-x: -1000px;
}
to {
    background-positon-x: 0px;
}
`;

const Bubble1 = styled(motion.div)`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/wave.png");
  background-size: 1000px 100px;
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: ${animateWaves} 4s linear infinite;

  @media (max-width: 768px) {
    top: -50px;
    height: 50px;
  }
`;

const Bubble2 = styled(motion.div)`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/wave.png");

  background-size: 1000px 100px;
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: ${animate} 4s linear infinite !important;

  @media (max-width: 768px) {
    top: -50px;
    height: 50px;
  }
`;

const Bubble3 = styled(motion.div)`
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: ${animateWaves} 3s linear infinite;
  width: 100%;
  height: 100px;
  background: url("/wave.png");
  @media (max-width: 768px) {
    top: -50px;
    height: 50px;
  }

  background-size: 1000px 100px;
`;

const Bubble4 = styled(motion.div)`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: ${animate} 3s linear infinite;
  height: 100px;
  background: url("/wave.png");
  @media (max-width: 768px) {
    top: -50px;
    height: 50px;
  }
  background-size: 1000px 100px;
`;

export default Footer;
