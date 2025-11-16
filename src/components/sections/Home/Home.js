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
      <TextHome aria-label="Role">{t('home.kicker')}</TextHome>
      <ParallaxText As={TitleHome} amount={36} fade={0.1} id="home-title">{t('home.name')}</ParallaxText>
      <ParallaxText As={SubtitleHome} amount={20} fade={0.06}>{t('home.subtitle')}</ParallaxText>
      <DescriptionHome>
        {t('home.description')}
      </DescriptionHome>

      <StatsContainer role="region" aria-label="Professional statistics">
        <StatItem>
          <CountUp to={yearsCount} duration={2500} suffix="+" aria-label={`${yearsCount} years of experience`} />
          <span className="label" aria-hidden="true">{t('home.years')}</span>
        </StatItem>
        <StatItem>
          <CountUp to={projectsCount} duration={2800} suffix="+" aria-label={`${projectsCount} projects completed`} />
          <span className="label" aria-hidden="true">{t('home.projects')}</span>
        </StatItem>
        <StatItem>
          <CountUp to={satisfactionCount} duration={3000} suffix="+" aria-label={`${satisfactionCount} percent client satisfaction`} />
          <span className="label" aria-hidden="true">{t('home.satisfaction')}</span>
        </StatItem>
      </StatsContainer>
    </ContainerHome>
  );
};
