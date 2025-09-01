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
    background: rgba(15, 15, 35, 0.95);
    backdrop-filter: blur(30px);
    border-bottom: 1px solid var(--borderColor);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  .logo-text {
    font-size: 2.5rem;
    font-weight: 900;
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
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
`;