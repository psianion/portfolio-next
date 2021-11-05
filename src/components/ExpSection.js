import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInBottom, fadeInRight, stagger3 } from "../common/animations";

function ExpSection() {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head variants={fadeInRight}>
        <h1>MY WORK EXPERIENCE</h1>
      </Head>
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

const Head = styled(motion.div)`
  h1 {
    color: ${({ theme }) => theme.secondary1};
    font-size: 1.25rem;
    font-weight: 400;
    text-transform: capitalize;
    transform: translateY(30px);
    letter-spacing: 2px;
    opacity: 0.7;
    cursor: default;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      opacity: 1;
    }
  }
`;

export default ExpSection;
