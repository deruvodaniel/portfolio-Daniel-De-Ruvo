import React from 'react';
import { motion } from 'framer-motion';
import {
  CardContainer,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription
} from './skillCard.styles';
import { hoverLift } from 'styles/animations';

const SkillCard = ({ icon, title, description }) => {
  return (
    <CardContainer
      as={motion.div}
      {...hoverLift}
    >
      <CardIcon>{icon}</CardIcon>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default SkillCard;