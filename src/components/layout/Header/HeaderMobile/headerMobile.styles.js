import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const Main = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--headerBackground);
  border-bottom: 1px solid var(--borderColor);
  backdrop-filter: blur(20px);
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img {
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--colorPrimary);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--colorSecondary);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    display: block;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
`;

export const DrawerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: opacity 0.3s ease;
`;

export const DrawerContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 320px;
  background: var(--background);
  border-left: 1px solid var(--borderColor);
  display: flex;
  flex-direction: column;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--borderColor);
  min-height: 60px;
`;

export const DrawerNav = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 24px 0;
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--textSecondary);
  padding: 16px 24px;
  transition: all 0.3s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: var(--gradientPrimary);
    transition: height 0.3s ease;
  }
  
  &:hover {
    color: var(--colorSecondary);
    background: var(--backgroundCardHover);
    
    &::before {
      height: 60%;
    }
  }
  
  &:active {
    transform: scale(0.98);
  }

  ${mediaQueries.tablet} {
    font-size: 1.4rem;
    padding: 18px 24px;
  }
`;

export const DrawerControls = styled.div`
  padding: 20px;
  border-top: 1px solid var(--borderColor);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--backgroundCard);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  color: var(--colorPrimary);
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--fontBody);
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    flex-shrink: 0;
    color: var(--colorSecondary);
  }
  
  span {
    flex: 1;
    text-align: left;
  }
  
  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateX(4px);
  }
  
  &:active {
    transform: translateX(4px) scale(0.98);
  }
`;
