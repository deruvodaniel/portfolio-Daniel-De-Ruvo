import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { sectionPadding, sectionTitlePlain, spacing } from 'styles/mixins';

export const SectionExperience = styled.section`
  ${sectionPadding}
  z-index: 50;
  position: relative;
  scroll-margin-top: 70px;
`;

export const ExperienceTitle = styled.h2`
  ${sectionTitlePlain}
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};

  ${mediaQueries.desktop} {
    gap: ${spacing.lg};
  }
`;

// Only keep styles that are actually used
export const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BulletItem = styled.li`
  position: relative;
  margin-bottom: 8px;
  padding-left: 20px;
  line-height: 1.6;
  font-size: 1rem;
  color: var(--textSecondary);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    background: var(--colorPrimary);
    border-radius: 50%;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueries.tablet} {
    margin-bottom: 10px;
    padding-left: 24px;
    font-size: 1.05rem;
    
    &:before {
      top: 8px;
      width: 8px;
      height: 8px;
    }
  }

  ${mediaQueries.desktop} {
    margin-bottom: 12px;
    font-size: 1.1rem;
  }
`;
