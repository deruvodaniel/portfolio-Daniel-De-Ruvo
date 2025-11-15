import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { cardStyle } from 'styles/mixins';

export const CardContainer = styled.div`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 24px 20px;
  height: 100%;

  ${mediaQueries.tablet} {
    gap: 0;
    padding: 32px 24px;
  }

  ${mediaQueries.desktop} {
    padding: 48px 32px;
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Removed hover effect - card is not clickable */

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
  text-align: center;

  ${mediaQueries.tablet} {
    font-size: 2rem;
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
  text-align: center;

  ${mediaQueries.tablet} {
    font-size: 1.2rem;
    line-height: 1.7;
  }

  ${mediaQueries.desktop} {
    font-size: 1.4rem;
    line-height: 1.7;
  }
`;