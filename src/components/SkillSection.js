import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInBottom, fadeInRight, stagger3 } from "../common/animations";

function SkillSection() {
  return (
    <SkillContainer exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Head variants={fadeInRight}>
        <h1>TECHNOLOGIES I HAVE WORKED WITH</h1>
      </Head>
      <ImageContent variants={stagger3}>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image
            src="/skills/HTML.png"
            title="HTML5"
            width={100}
            height={100}
          />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image src="/skills/CSS.png" title="CSS3" width={100} height={100} />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image
            src="/skills/JS.png"
            title="JavaScript"
            width={100}
            height={100}
          />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image
            src="/skills/REACT.png"
            title="REACT"
            width={100}
            height={100}
          />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image
            src="/skills/REDUX.png"
            title="REDUX"
            width={100}
            height={100}
          />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image src="/skills/NODE.png" title="NODE" width={150} height={150} />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image
            src="/skills/MONGO.png"
            title="MONGODB"
            width={150}
            height={150}
          />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image src="/skills/NEXT.png" title="NEXT" width={150} height={150} />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image src="/skills/FIGMA.png" title="FIGMA" width={70} height={70} />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image
            src="/skills/PS.png"
            title="PHOTOSHOP"
            width={80}
            height={80}
          />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image src="/skills/GIT.png" title="GIT" width={80} height={80} />
        </ImageContainer>
        <ImageContainer variants={fadeInBottom} whileHover={{ scale: 1.2 }}>
          <Image
            src="/skills/PYTHON.png"
            title="PYTHON"
            width={80}
            height={80}
          />
        </ImageContainer>
      </ImageContent>
    </SkillContainer>
  );
}

const SkillContainer = styled(motion.div)`
  text-align: center;
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

const ImageContent = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 4.5rem;

  @media (max-width: 768px) {
    margin: 0 3.15rem;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 70px;
  height: 70px;
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0.5rem;
    width: 35px;
    height: 35px;
  }
`;

export default SkillSection;
