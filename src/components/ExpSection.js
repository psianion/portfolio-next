import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInRight } from "../common/animations";
const data = require("../assets/ExpData");

function ExpSection() {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head variants={fadeInRight}>
        <h1>MY WORK EXPERIENCE</h1>
      </Head>
      <CompanySection>
        <>
          {data.map((i) => (
            <Company
              key={i.id}
              whileHover={{ scale: 1.2 }}
              onClick={() => window.open(i.companyLink)}
            >
              <Name>{i.companyName}</Name>
              <Divider />
              <Intern>
                <Duration>{i.duration}</Duration>
                <Role>{i.role}</Role>
              </Intern>
            </Company>
          ))}
        </>
      </CompanySection>
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

const CompanySection = styled(motion.div)`
  width: 60rem;
  background-color: ${({ theme }) => theme.primary1};
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Company = styled(motion.div)`
  width: 35rem;
  height: 3rem;
  display: flex;

  padding: 0rem 2rem;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-around;

  color: ${({ theme }) => `${theme.highlight1}`};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => `${theme.highlight0}`};
    border-left: ${({ theme }) => theme.highlight0} 0.25rem solid;
    background-color: ${({ theme }) => `${theme.primary2}50`};
  }

  @media (max-width: 768px) {
    padding: 0rem 0.5rem;
    width: 95%;
    color: ${({ theme }) => `${theme.highlight0}`};
    border-left: ${({ theme }) => theme.highlight0} 0.25rem solid;
    background-color: ${({ theme }) => `${theme.primary2}50`};
    height: 3rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Duration = styled(motion.div)`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const Divider = styled(motion.div)`
  height: 1.25rem;
  background-color: ${({ theme }) => `${theme.highlight0}`};
  width: 0.1rem;
`;
const Intern = styled(motion.div)``;

const Name = styled(motion.div)`
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;
const Role = styled(motion.div)`
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export default ExpSection;
