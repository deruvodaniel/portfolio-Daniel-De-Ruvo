import React from 'react';
import {
  CardContainer,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription
} from './skillCard.styles';

const SkillCard = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <CardIcon>{icon}</CardIcon>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default SkillCard;