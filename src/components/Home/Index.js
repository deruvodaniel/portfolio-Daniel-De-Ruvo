import React from 'react';
import CountUp from '../CountUp';
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
  LocationTag,
} from "./home.styles";
import { useRefs } from "../../context/refsContext";
import ParallaxText from "components/ParallaxText";
import { useI18n } from "context/i18nContext";
import { FiExternalLink } from 'react-icons/fi';

export const Home = () => {
  const { refHome, refProjects, refContact } = useRefs();
  const { t } = useI18n();

  const scrollToSection = (section) => {
    if (section && section.current) {
      const headerOffset = window.innerWidth < 1024 ? 80 : 110;
      const { smoothScrollTo } = require('lib/scrollTo');
      smoothScrollTo(section.current, { offset: headerOffset });
    }
  };

  return (
    <ContainerHome ref={refHome}>
      <TextHome>{t('home.kicker')}</TextHome>
      <ParallaxText As={TitleHome} amount={36} fade={0.1}>{t('home.name')}</ParallaxText>
      <ParallaxText As={SubtitleHome} amount={20} fade={0.06}>{t('home.subtitle')}</ParallaxText>
      <LocationTag>{t('home.location')}</LocationTag>
      <DescriptionHome>
        {t('home.description')}
      </DescriptionHome>

      <ButtonsContainer>
        <ButtonHome onClick={() => scrollToSection(refProjects)}>
          {t('home.viewProjects')}
        </ButtonHome>
        <SecondaryButton onClick={() => window.open('https://cdn.builder.io/o/assets%2Feb9edba76d874a5385833a00b6be2b6e%2F44c199474638431da9d1c7d8d0e28707?alt=media&token=1af667d8-3632-4777-b419-39ad015be4eb&apiKey=eb9edba76d874a5385833a00b6be2b6e','_blank','noopener') } aria-label="Open resume in a new tab">
          {t('about.resume')}
        </SecondaryButton>
      </ButtonsContainer>

      <StatsContainer>
        <StatItem>
          <CountUp to={parseInt(t('home.yearsNumber')) || 6} suffix="+" />
          <span className="label">{t('home.years')}</span>
        </StatItem>
        <StatItem>
          <CountUp to={parseInt(t('home.projectsNumber')) || 15} suffix="+" />
          <span className="label">{t('home.projects')}</span>
        </StatItem>
        <StatItem>
          <CountUp to={parseInt(t('home.satisfactionNumber')) || 60} suffix="+" />
          <span className="label">{t('home.satisfaction')}</span>
        </StatItem>
      </StatsContainer>
    </ContainerHome>
  );
};
