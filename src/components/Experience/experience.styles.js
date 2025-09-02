import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const SectionExperience = styled.section`
  margin: 60px 0;
  padding: 40px 0;
  position: relative;
  z-index: 50;

  ${mediaQueries.desktop} {
    margin: 120px 0;
    padding: 70px 0;
  }
`;

export const ExperienceTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 4rem;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: -2px;
  line-height: 0.9;
  transform: translateY(calc(var(--scrollY, 0) * 0.018px));
  will-change: transform;

  ${mediaQueries.desktop} {
    font-size: 7rem;
    margin-bottom: 80px;
    letter-spacing: -5px;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoleItem = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid var(--borderColor);
  position: relative;

  &:last-child { border-bottom: none; }

  h3 {
    font-size: 1.6rem;
    color: var(--colorPrimary);
    margin: 8px 0 12px;
    letter-spacing: -0.5px;
  }

  ${mediaQueries.desktop} {
    padding: 48px 0;
    &::before { top: 48px; }
    h3 { font-size: 2rem; }
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
`;

export const RoleCompany = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--colorSecondary);
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const RolePeriod = styled.span`
  font-size: 1rem;
  color: var(--textMuted);
  letter-spacing: 1px;
`;

export const BulletList = styled.ul`
  margin: 0;
  padding-left: 20px;
  color: var(--textSecondary);
`;

export const BulletItem = styled.li`
  margin: 6px 0;
  line-height: 1.6;
  font-size: 1.05rem;
`;
