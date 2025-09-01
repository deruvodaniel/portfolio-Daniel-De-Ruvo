import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.header)`
  position: fixed;
  display: flex;
  left: 0;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  min-width: 100%;
  max-width: 1400px;
  padding: 0 30px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &.withBackground {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 3px solid var(--colorSecondary);
    background: rgba(42, 31, 45, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  & > img {
    color: var(--colorPrimary);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 5px 15px rgba(89, 201, 165, 0.6));
    }
  }
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0 40px;
  gap: 5px;
  
  &.active {
    color: var(--colorSecondary);
    border: 2px solid var(--colorSecondary);
  }
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  margin-right: 15px;
  color: var(--colorPrimary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 25px;
  border: 2px solid transparent;
  padding: 8px 20px;
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
    background: linear-gradient(90deg, transparent, rgba(89, 201, 165, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    color: var(--colorSecondary);
    background: rgba(89, 201, 165, 0.1);
    border: 2px solid rgba(89, 201, 165, 0.5);
    box-shadow: 0 5px 15px rgba(89, 201, 165, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;
