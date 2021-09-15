import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { fadeInBottom, fadeInRight, stagger3 } from "../common/animations";

const data = require("../assets/ProjectData");

function ProjectSection() {
  const [isActive, setIsActive] = useState(1);
  const active = data.find(({ id }) => id === isActive);

  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head variants={fadeInRight}>
        <h1>PROJECTS I HAVE WORKED ON</h1>
      </Head>
      <ProjectContainer>
        <ProjectList>
          {data.map((i) => (
            <Project
              key={i.id}
              onClick={() => {
                setIsActive(i.id);
              }}
            >
              <Content>
                <Title>
                  <h1>{i.name}</h1>
                  <h5>{i.duration}</h5>
                </Title>
                <p>{i.desc}</p>
                <Tech>
                  {i.tech.map((i) => (
                    <h5>{i}</h5>
                  ))}
                </Tech>
              </Content>
            </Project>
          ))}
        </ProjectList>
        <ProjectContent>
          <WebView>
            <img
              src={active.webImage}
              onClick={() => window.open(active.liveLink)}
            />
          </WebView>
          <ActiveContent>
            <h1>{active.name}</h1>
          </ActiveContent>
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
  overflow-y: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    margin-top: 3rem;
    width: 95%;
    height: 35rem;
    flex-direction: column-reverse;
  }
`;

const ProjectList = styled(motion.div)`
  width: 39.5%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.primary2}20`};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primary1};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `${theme.secondary1}40`};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => `${theme.secondary1}60`};
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    height: 60%;
    width: 98%;
  }
`;

const Project = styled(motion.div)`
  width: 99%;
  height: 4.7rem;
  background-color: ${({ theme }) => `${theme.primary2}50`};
  margin: 0.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.primary2};
    border-left: ${({ theme }) => theme.highlight0} 0.5rem solid;
  }

  @media (max-width: 768px) {
    width: 99%;
    height: 31%;
  }
`;

const Content = styled(motion.div)`
  margin-left: 0.5rem;
  text-align: left;

  p {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }
`;

const Title = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 29.5rem;

  h1 {
    font-size: 1rem;
  }

  h5 {
    font-weight: 500;
    text-transform: uppercase;
    font-style: italic;
    color: ${({ theme }) => `${theme.secondary2}80`};
    font-size: 0.65rem;
  }
`;

const Tech = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  h5 {
    font-weight: 500;
    color: #f7f7f8;
    font-size: 0.7rem;
    background-color: ${({ theme }) => `${theme.highlight1}`};
    padding: 0rem 0.4rem;
    margin-right: 0.25rem;
    border-radius: 0.2rem;
  }
`;

const ProjectContent = styled(motion.div)`
  width: 59.5%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.primary2}20`};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 98%;
  }
`;

const WebView = styled(motion.div)`
  width: 95%;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;

  img {
    width: 75%;
    height: auto;
    box-shadow: 1px 0px 10px 0px rgba(119, 44, 232, 1);
    margin-top: 1rem;
    transition: all 0.2s ease-in-out;

    :hover {
      box-shadow: 1px 0px 20px 0px rgba(119, 44, 232, 1);
    }
  }
`;
const ActiveContent = styled(motion.div)`
  margin-top: 0.5rem;
`;

export default ProjectSection;
