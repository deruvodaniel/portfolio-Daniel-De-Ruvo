import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  background: var(--backgroundCard);
  border: 1px solid var(--borderColor);
  border-radius: 20px;
  flex: 1;
  min-height: 280px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  ${mediaQueries.tablet} {
    min-height: 320px;
    padding: 40px 28px;
  }

  ${mediaQueries.desktop} {
    min-height: 300px;
    padding: 48px 32px;
  }
`;

export const CardIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 24px;
  flex-shrink: 0;

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
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--colorPrimary);
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.2;
  text-align: left;

  ${mediaQueries.tablet} {
    font-size: 2rem;
  }

  ${mediaQueries.desktop} {
    font-size: 2.2rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.2rem;
  color: var(--textMuted);
  line-height: 1.7;
  margin: 0;
  flex: 1;
  text-align: left;

  ${mediaQueries.tablet} {
    font-size: 1.3rem;
    line-height: 1.6;
  }

  ${mediaQueries.desktop} {
    font-size: 1.4rem;
    line-height: 1.7;
  }
`;