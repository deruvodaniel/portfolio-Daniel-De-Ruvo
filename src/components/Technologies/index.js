import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { RefsContext } from '../../context/refsContext';
import { technologies } from '../../arrays/arrayTechnologies';
import {
  SectionProjects,
  ContainerProjects,
  Container,
  ImageContainer,
  Img,
  ContainerTexts,
  ProjectTitle,
  ProjectSubtitle,
  ProjectDescription,
  ContainerButtons,
  ProjectButton,
  TechStack,
  TechTag
} from './technologies.styles';

export const Technologies = () => {
  const { refTechnologies } = useContext(RefsContext);

  return (
    <SectionProjects ref={refTechnologies}>
      <h2>Technologies</h2>
      <ContainerProjects>
        {technologies && technologies.map((tech, index) => (
          <Container
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Img src={tech.img} alt={tech.text} />
            </ImageContainer>
            <ContainerTexts>
              <ProjectTitle>{tech.text}</ProjectTitle>
            </ContainerTexts>
          </Container>
        ))}
      </ContainerProjects>
    </SectionProjects>
  );
};