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
  padding: 0 50px;
  height: 90px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(30px);
  
  &.withBackground {
    background: rgba(10, 10, 15, 0.95);
    border-bottom: 1px solid var(--borderColor);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(0, 212, 255, 0.1);
  }
  
  & > img {
    height: 55px;
    width: auto;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 25px rgba(0, 212, 255, 0.4));
    
    &:hover {
      transform: scale(1.15);
      filter: drop-shadow(0 0 35px rgba(0, 212, 255, 0.7));
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  .logo-text {
    font-size: 2rem;
    font-weight: 900;
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 2px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--gradientPrimary);
      border-radius: 1px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
  }
  
  &:hover .logo-text::after {
    transform: scaleX(1);
  }
`;

export const ListLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 12px;
  margin: 0;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--colorPrimary);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 35px;
  border: 2px solid transparent;
  padding: 14px 28px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--gradientPrimary);
    transition: left 0.5s;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--gradientPrimary);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: white;
    background: rgba(0, 212, 255, 0.1);
    border-color: rgba(0, 212, 255, 0.4);
    transform: translateY(-4px);
    box-shadow: 
      0 15px 30px rgba(0, 212, 255, 0.2),
      0 0 30px rgba(0, 212, 255, 0.1);
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover::after {
    width: 90%;
  }
`;