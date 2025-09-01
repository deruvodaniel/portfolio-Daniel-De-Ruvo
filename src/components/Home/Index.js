import React from 'react';
import {
  ContainerHome,
  TextHome,
  TitleHome,
  SubtitleHome,
  DescriptionHome,
  ButtonsContainer,
  ButtonHome,
  SecondaryButton,
  StatsContainer,
  StatItem,
} from "./home.styles";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";

export const Home = () => {
  const { refHome, refProjects, refContact } = useRefs();
  const { t } = useI18n();

  const scrollToSection = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ContainerHome ref={refHome}>
      <TextHome>{t('home.kicker')}</TextHome>
      <TitleHome>{t('home.name')}</TitleHome>
      <SubtitleHome>{t('home.subtitle')}</SubtitleHome>
      <DescriptionHome>
        {t('home.description')}
      </DescriptionHome>

      <ButtonsContainer>
        <ButtonHome onClick={() => scrollToSection(refProjects)}>
          {t('home.viewProjects')}
        </ButtonHome>
        <SecondaryButton onClick={() => scrollToSection(refContact)}>
          {t('home.getInTouch')}
        </SecondaryButton>
      </ButtonsContainer>

      <StatsContainer>
        <StatItem>
          <span className="number">3+</span>
          <span className="label">{t('home.years')}</span>
        </StatItem>
        <StatItem>
          <span className="number">50+</span>
          <span className="label">{t('home.projects')}</span>
        </StatItem>
        <StatItem>
          <span className="number">100%</span>
          <span className="label">{t('home.satisfaction')}</span>
        </StatItem>
      </StatsContainer>
    </ContainerHome>
  );
};
