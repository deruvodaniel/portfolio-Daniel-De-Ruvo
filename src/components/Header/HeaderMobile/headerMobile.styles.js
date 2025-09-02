import styled from "styled-components";
import { mediaQueries } from "styles";

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
  height: 70px;
  padding: 0 16px;

  & > nav {
    position: absolute;
    top: 71px;
    right: 0;
    left: 0;
    z-index: 20;
    background: var(--headerBackground);
    border-bottom: 1px solid var(--borderColor);
  }
`;

export const LogoMenu = styled.img`
  color: var(--colorPrimary);
  padding: 0 8px 0 0;
  cursor: pointer;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 9999px;
  background: transparent;
  color: var(--textMuted);
  border: 1px solid var(--borderColor);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s ease;
  margin-right: 0;

  &:hover { color: var(--colorPrimary); border-color: var(--colorSecondary); transform: translateY(-2px); }
`;

export const LogoText = styled.div`
  font-size: 2rem;
  font-weight: 900;
  background: var(--gradientPrimary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  padding-left: 8px;
`

export const ListLinks = styled.ul`
  margin: 20px 0 24px;
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  text-align: end;
  padding: 0 16px;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: var(--textMuted);
  padding: 8px 12px;
  margin-bottom: 12px;
  margin-right: 0;
  border-radius: 10px;
  transition: 0.3s ease all;

  &:hover {
    color: var(--colorPrimary);
  }

  ${mediaQueries.tablet} {
    padding: 8px 16px;
    margin-bottom: 16px;
    margin-right: 8px;
    font-size: 1.4rem;
  }
`;
