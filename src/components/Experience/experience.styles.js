import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const SectionExperience = styled.section`
  margin: 200px 0;
  padding: 150px 0;
  position: relative;
  z-index: 50;

  ${mediaQueries.desktop} {
    margin: 300px 0;
    padding: 200px 0;
  }
`;

export const ExperienceTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 5rem;
  margin-bottom: 100px;
  text-align: center;
  letter-spacing: -2px;
  line-height: 0.9;

  ${mediaQueries.desktop} {
    font-size: 9rem;
    margin-bottom: 150px;
    letter-spacing: -5px;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoleItem = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid var(--borderColor);
  position: relative;

  &:last-child { border-bottom: none; }


  h3 {
    font-size: 2rem;
    color: var(--colorPrimary);
    margin: 12px 0 16px;
    letter-spacing: -0.5px;
  }

  ${mediaQueries.desktop} {
    padding: 60px 0;
    &::before { top: 60px; }
    h3 { font-size: 2.4rem; }
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
  margin: 10px 0;
  line-height: 1.6;
  font-size: 1.15rem;
`;
