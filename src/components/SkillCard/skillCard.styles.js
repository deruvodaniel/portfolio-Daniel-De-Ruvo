import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  gap: 16px;
  padding: 24px 20px;
  background: var(--backgroundCard);
  border: 1px solid var(--borderColor);
  border-radius: 16px;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  [data-theme="dark"] & {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(0, 229, 255, 0.2);
    }
  }

  ${mediaQueries.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
    padding: 32px 24px;
  }

  ${mediaQueries.desktop} {
    padding: 48px 32px;
  }
`;

export const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: iconFloat 4s ease-in-out infinite;
  }
  
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }

  ${mediaQueries.tablet} {
    font-size: 4rem;
    margin-bottom: 28px;
  }

  ${mediaQueries.desktop} {
    font-size: 4.5rem;
    margin-bottom: 32px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  justify-content: flex-start;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--colorPrimary);
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-align: left;

  ${mediaQueries.tablet} {
    font-size: 2rem;
    text-align: center;
    letter-spacing: -1px;
  }

  ${mediaQueries.desktop} {
    font-size: 2.2rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--textMuted);
  line-height: 1.6;
  margin: 0;
  flex: 1;
  text-align: left;

  ${mediaQueries.tablet} {
    font-size: 1.2rem;
    line-height: 1.7;
    text-align: center;
  }
    font-size: 1.3rem;
    line-height: 1.6;
  }

  ${mediaQueries.desktop} {
    font-size: 1.4rem;
    line-height: 1.7;
  }
`;