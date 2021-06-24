import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeInBottom, fadeInRight, stagger3 } from "../common/animations";

function ProjectSection() {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head variants={fadeInRight}>
        <h1>PROJECTS I HAVE WORKED ON</h1>
      </Head>
      <ProjectContainer>
        <ProjectImage></ProjectImage>
        <ProjectContent>
          <h1>Project Name</h1>
          <h2>Duration</h2>
          <h3>What is it?</h3>
          <h4>Tech used</h4>
          <button>Github</button>
          <button>Today</button>
          <p>Descript ion</p>
        </ProjectContent>
      </ProjectContainer>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5rem;
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

const ProjectContainer = styled(motion.div)`
  width: 80rem;
  height: 25rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-bottom: 10rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ProjectImage = styled(motion.div)`
  width: 49.5%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.primary2}20`};
`;

const ProjectContent = styled(motion.div)`
  width: 49.5%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.primary2}20`};
`;

export default ProjectSection;
