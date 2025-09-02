import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 60px;
  height: 100px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.withBackground {
    background: var(--headerBackground);
    backdrop-filter: blur(30px);
    border-bottom: 1px solid var(--borderColor);
  }

  &.withBackground ${'' /* enhance link contrast when dark header */} {

  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover { transform: translateY(-2px); }

  .logo-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--backgroundCard);
    border: 1px solid var(--borderColor);
    backdrop-filter: blur(12px);
  }

  .logo-text {
    font-size: 2.5rem;
    font-weight: 900;
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
    line-height: 1;
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
    color: var(--textMuted);
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
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background 220ms ease, color 220ms ease, border-color 220ms ease, transform 180ms ease;

  &:hover { color: var(--colorPrimary); border-color: var(--colorSecondary); transform: translateY(-2px); }

  &.theme-animate { animation: themePop 380ms ease; }

  @keyframes themePop { 0% { transform: scale(1) rotate(0deg); } 50% { transform: scale(0.88) rotate(-18deg); } 100% { transform: scale(1) rotate(0deg); } }
`;
