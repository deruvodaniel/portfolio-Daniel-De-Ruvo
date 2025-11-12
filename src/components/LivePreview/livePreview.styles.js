import styled from 'styled-components';

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: var(--colorSurface);
  border: 1px solid var(--colorBorder);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  &:hover .hover-button {
    opacity: 1 !important;
  }
`;

export const PreviewImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PreviewContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const PreviewInfo = styled.div`
  padding: 12px 16px;
  background: var(--colorSurface);
`;

export const PreviewTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--colorText);
  margin: 0 0 6px 0;
  line-height: 1.3;
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PreviewDomain = styled.p`
  font-size: 0.8rem;
  color: var(--colorTextSecondary);
  margin: 0 0 10px 0;
  font-family: 'Courier New', monospace;
`;

export const PreviewActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: var(--colorPrimary);
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: var(--colorPrimaryDark);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;