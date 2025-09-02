import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const PreviewCard = styled.a`
  display: block;
  width: 100%;
  background: var(--backgroundCard);
  border: 1px solid var(--borderColor);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    border-color: var(--colorSecondary);
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: clamp(140px, 52vw, 220px);
    background: var(--backgroundCard);
  }

  ${mediaQueries.desktop} {
    max-width: 480px;
    .loader { height: 200px; }
  }
`;

export const PreviewImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: var(--backgroundCard);
`;

export const PreviewInfo = styled.div`
  padding: 12px 14px 14px;
`;

export const PreviewTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: var(--colorPrimary);
  margin: 0 0 4px;
  letter-spacing: -0.2px;
`;

export const PreviewDomain = styled.span`
  font-size: 0.85rem;
  color: var(--textMuted);
`;
