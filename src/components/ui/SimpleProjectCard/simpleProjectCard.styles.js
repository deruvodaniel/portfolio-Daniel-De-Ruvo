import styled from 'styled-components';
import { mediaQueries } from "../../../styles";
import { primaryButton, secondaryButton, cardStyle } from '../../../styles/mixins';

export const SimpleCard = styled.div`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(10px);
  height: 100%;

  ${mediaQueries.tablet} {
    border-radius: 18px;
  }
`;

export const SimpleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${SimpleCard}:hover & {
    transform: scale(1.05);
  }

  ${mediaQueries.tablet} {
    height: 220px;
  }
`;

export const SimpleContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const SimpleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--colorPrimary);
  margin: 0;
  line-height: 1.3;
`;

export const SimpleDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--textMuted);
  margin: 0;
  flex: 1;
  font-family: var(--fontBody);
  
  /* Limitar a 4 líneas */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SimpleActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

export const PrimaryButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  ${primaryButton}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  ${mediaQueries.desktop} {
    padding: 14px 24px;
    font-size: 0.95rem;
    border-radius: 10px;
  }
`;

export const SecondaryButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  ${secondaryButton}

  ${mediaQueries.desktop} {
    padding: 14px 24px;
    font-size: 0.95rem;
    border-radius: 10px;
  }
`;