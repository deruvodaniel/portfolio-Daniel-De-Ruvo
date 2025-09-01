import styled from "styled-components";
import { mediaQueries } from "styles";

export const Main = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 3px solid var(--colorSecondary);
  right: 0;
  background: var(--background);
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  & > img:first-child {
    color: var(--colorPrimary);
    padding: 0 0 0 20px;
    cursor: pointer;
  }
  & > nav {
    position: absolute;
    top: 71px;
    right: 0;
    left: 0;
    z-index: 20;
    background: var(--background);
  }
`;

export const LogoMenu = styled.img`
  color: var(--colorPrimary);
  padding: 0 20px 0 0;
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

export const ListLinks = styled.ul`
  margin: 30px 0 60vh;
  display: flex;
  flex-flow: column wrap;
  list-style: none;
  text-align: end;
  padding: 0;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--colorSecondary);
  padding: 3px 15px;
  margin-bottom: 20px;
  margin-right: 0px;
  border-radius: 10px;
  transition: 0.3s ease all;
  &:hover {
    transition: 0.3s ease all;
    color: var(--colorSecondary);
  }
  ${mediaQueries.tablet} {
    padding: 3px 25px;
    margin-bottom: 30px;
    margin-right: 20px;
    font-size: 2rem;
  }
`;
