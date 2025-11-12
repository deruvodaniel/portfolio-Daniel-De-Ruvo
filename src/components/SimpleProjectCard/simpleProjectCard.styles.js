import styled from 'styled-components';
import { mediaQueries } from "../../styles";
import { gradientButton, gradientText } from '../../styles/mixins';

export const SimpleCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--backgroundCard);
  border-radius: 16px;
  border: 1px solid var(--borderColor);
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-4px);
    background: var(--backgroundCardHover);
    box-shadow: var(--shadowPrimary);
  }
`;

export const SimpleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
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
  ${gradientText}
  margin: 0;
  line-height: 1.3;
`;

export const SimpleDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--textMuted);
  margin: 0;
  flex: 1;
  
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
  ${gradientButton}
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

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
  background: transparent;
  border: 2px solid var(--colorSecondary);
  border-radius: 8px;
  color: var(--colorSecondary);
  font-weight: 600;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.22s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: var(--backgroundCardHover);
    transform: translateY(-2px);
  }

  ${mediaQueries.desktop} {
    padding: 14px 24px;
    font-size: 0.95rem;
    border-radius: 10px;
  }
`;