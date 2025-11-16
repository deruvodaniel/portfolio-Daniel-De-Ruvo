import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { sectionPadding, sectionTitlePlain, spacing } from 'styles/mixins';
import { motion } from 'framer-motion';

export const SectionExperience = styled.section`
  ${sectionPadding}
  z-index: 50;
  position: relative;
  scroll-margin-top: 70px;
`;

export const ExperienceTitle = styled.h2`
  ${sectionTitlePlain}
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  border-bottom: 2px solid var(--borderColor);
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--colorSecondary) transparent;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--colorSecondary);
    border-radius: 2px;
  }
  
  ${mediaQueries.tablet} {
    gap: 16px;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 12px 16px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${props => props.$active ? 'var(--colorSecondary)' : 'var(--textSecondary)'};
  cursor: pointer;
  position: relative;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 3px solid ${props => props.$active ? 'var(--colorSecondary)' : 'transparent'};
  margin-bottom: -2px;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    color: var(--colorSecondary);
  }
  
  ${mediaQueries.tablet} {
    font-size: 1.2rem;
    padding: 18px 32px;
  }
`;

export const TabContent = styled(motion.div)`
  min-height: 300px;
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
  padding-left: 0;
  line-height: 1.6;
  font-size: 1rem;
  color: var(--textSecondary);

  &:before {
    display: none;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQueries.tablet} {
    margin-bottom: 10px;
    padding-left: 24px;
    font-size: 1.05rem;
    
    &:before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 8px;
      height: 8px;
      background: var(--colorPrimary);
      border-radius: 50%;
    }
  }

  ${mediaQueries.desktop} {
    margin-bottom: 12px;
    font-size: 1.1rem;
  }
`;
