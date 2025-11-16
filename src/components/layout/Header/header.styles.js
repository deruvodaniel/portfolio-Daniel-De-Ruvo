import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 20px;
  height: 80px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  background: transparent;

  ${'' /* Ajuste de padding para diferentes tamaños */}
  @media (min-width: 768px) {
    padding: 0 60px;
  }

  &.withBackground {
    background: rgba(var(--headerBackgroundRGB), 0.92);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--borderColor);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: brightness(1);

  &:hover { 
    transform: translateY(-2px); 
    filter: brightness(1.1);
  }

  .logo-image {
    transition: all 0.3s ease;
  }

  ${Main}.withBackground & {
    filter: brightness(1.2) contrast(1.1);
  }
`;

export const ListLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 60px;
  margin: 0;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--textMuted);
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--colorSecondary);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--colorPrimary);
    transform: translateY(-2px);
  }

  &:hover::after {
    width: 100%;
  }

  ${Main}.withBackground & {
    color: var(--colorPrimary);
    font-weight: 600;
  }
  ${Main}.withBackground &:hover {
    color: var(--colorSecondary);
  }
  ${Main}.withBackground &::after {
    background: var(--gradientPrimary);
    height: 3px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 9999px;
  background: transparent;
  color: var(--textMuted);
  border: 1px solid var(--borderColor);
  cursor: pointer;
  font-size: 0.95rem;
  font-family: var(--fontBody);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background 220ms ease, color 220ms ease, border-color 220ms ease, transform 180ms ease;

  &:hover { 
    color: var(--colorPrimary); 
    border-color: var(--colorSecondary); 
    transform: translateY(-2px); 
  }

  &.theme-animate { animation: themePop 380ms ease; }

  ${Main}.withBackground & {
    color: var(--colorPrimary);
    border-color: var(--colorPrimary);
    font-weight: 700;
  }

  ${Main}.withBackground &:hover {
    background: rgba(var(--colorSecondaryRGB, 100, 255, 218), 0.1);
    border-color: var(--colorSecondary);
  }

  @keyframes themePop { 0% { transform: scale(1) rotate(0deg); } 50% { transform: scale(0.88) rotate(-18deg); } 100% { transform: scale(1) rotate(0deg); } }
`;
