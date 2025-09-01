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
  padding: 0 40px;
  height: 80px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  
  &.withBackground {
    background: rgba(15, 15, 35, 0.95);
    border-bottom: 1px solid var(--borderColor);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  & > img {
    height: 50px;
    width: auto;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
    
    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.6));
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  .logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 1px;
  }
`;

export const ListLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
  margin: 0;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: var(--colorPrimary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 30px;
  border: 2px solid transparent;
  padding: 12px 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--colorSecondary), var(--colorAccent));
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: var(--colorSecondary);
    background: rgba(0, 212, 255, 0.1);
    border-color: rgba(0, 212, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover::after {
    width: 80%;
  }
`;