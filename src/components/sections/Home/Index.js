import React from 'react';
import CountUp from '../../ui/CountUp';
import {
  ContainerHome,
  TextHome,
  TitleHome,
  SubtitleHome,
  DescriptionHome,
  StatsContainer,
  StatItem,
} from "./home.styles";
import { useRefs } from "../../../context/refsContext";
import ParallaxText from "components/ui/ParallaxText";
import { useI18n } from "context/i18nContext";

export const Home = () => {
  const { refHome } = useRefs();
  const { t } = useI18n();

  // Parse numbers safely from translations
  const yearsCount = parseInt(t('home.yearsNumber').replace(/[^0-9]/g, '')) || 6;
  const projectsCount = parseInt(t('home.projectsNumber').replace(/[^0-9]/g, '')) || 15;
  const satisfactionCount = parseInt(t('home.satisfactionNumber').replace(/[^0-9]/g, '')) || 60;

  return (
    <ContainerHome ref={refHome}>
      <TextHome>{t('home.kicker')}</TextHome>
      <ParallaxText As={TitleHome} amount={36} fade={0.1}>{t('home.name')}</ParallaxText>
      <ParallaxText As={SubtitleHome} amount={20} fade={0.06}>{t('home.subtitle')}</ParallaxText>
      <DescriptionHome>
        {t('home.description')}
      </DescriptionHome>

      {/* <ButtonsContainer>
        <ButtonHome onClick={() => scrollToSection(refProjects)}>
          {t('home.viewProjects')}
        </ButtonHome>
        <SecondaryButton onClick={() => window.open('https://cdn.builder.io/o/assets%2Feb9edba76d874a5385833a00b6be2b6e%2F44c199474638431da9d1c7d8d0e28707?alt=media&token=1af667d8-3632-4777-b419-39ad015be4eb&apiKey=eb9edba76d874a5385833a00b6be2b6e','_blank','noopener') } aria-label="Open resume in a new tab">
          {t('home.resume')}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M14 3h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 14v7h-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10v11h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SecondaryButton>
      </ButtonsContainer> */}

      <StatsContainer>
        <StatItem>
          <CountUp to={yearsCount} duration={2500} suffix="+" />
          <span className="label">{t('home.years')}</span>
        </StatItem>
        <StatItem>
          <CountUp to={projectsCount} duration={2800} suffix="+" />
          <span className="label">{t('home.projects')}</span>
        </StatItem>
        <StatItem>
          <CountUp to={satisfactionCount} duration={3000} suffix="+" />
          <span className="label">{t('home.satisfaction')}</span>
        </StatItem>
      </StatsContainer>
    </ContainerHome>
  );
};
