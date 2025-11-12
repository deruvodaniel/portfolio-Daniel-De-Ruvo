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
  height: 60px;
  padding: 0 16px;

  & > nav {
    position: absolute;
    top: 61px;
    right: 0;
    left: 0;
    z-index: 20;
    background: var(--headerBackground);
    border-bottom: 1px solid var(--borderColor);
    overflow: clip;
    max-height: 0;
    opacity: 0;
    transform: translateY(-8px);
    transition: max-height 360ms cubic-bezier(0.22,1,0.36,1), opacity 260ms ease, transform 260ms ease;
  }

  &.open > nav {
    max-height: 520px;
    opacity: 1;
    transform: translateY(0);
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
  gap: 8px;
`;

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 9999px;
  background: transparent;
  color: var(--textMuted);
  border: 1px solid var(--borderColor);
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background 220ms ease, color 220ms ease, border-color 220ms ease, transform 180ms ease;
  margin-right: 0;

  &:hover { color: var(--colorPrimary); border-color: var(--colorSecondary); transform: translateY(-1px); }
  &.theme-animate { animation: themePop 360ms ease; }
  @keyframes themePop { 0% { transform: scale(1) rotate(0deg); } 50% { transform: scale(0.94) rotate(-12deg); } 100% { transform: scale(1) rotate(0deg); } }
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
  margin: 12px 0 16px;
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  text-align: end;
  padding: 0 12px 12px;
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--textMuted);
  padding: 8px 10px;
  margin-bottom: 8px;
  margin-right: 0;
  border-radius: 10px;
  transition: color 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  transform: translateY(-6px);

  ${Main}.open & {
    animation: navItemIn 260ms ease forwards;
  }

  &:nth-child(1) { animation-delay: 40ms; }
  &:nth-child(2) { animation-delay: 80ms; }
  &:nth-child(3) { animation-delay: 120ms; }
  &:nth-child(4) { animation-delay: 160ms; }
  &:nth-child(5) { animation-delay: 200ms; }
  &:nth-child(6) { animation-delay: 240ms; }

  @keyframes navItemIn {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  &:hover { color: var(--colorPrimary); }

  ${mediaQueries.tablet} {
    padding: 8px 14px;
    margin-bottom: 12px;
    margin-right: 6px;
    font-size: 1.2rem;
  }
`;
