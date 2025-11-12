import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const PreviewContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--backgroundCard);
  border-radius: 8px;
  position: relative;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--textMuted);
  
  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--borderColor);
    border-top: 3px solid var(--colorSecondary);
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
  
  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const ErrorFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .error-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--textMuted);
    text-align: center;
    
    span {
      font-size: 2rem;
      opacity: 0.5;
    }
    
    p {
      font-size: 0.9rem;
      font-weight: 500;
      margin: 0;
    }
  }
`;

export const PreviewOverlay = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  
  button {
    background: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    opacity: 0;
    
    &:hover {
      background: rgba(0, 0, 0, 0.8);
      transform: scale(1.1);
    }
  }

  ${PreviewContainer}:hover & button {
    opacity: 1;
  }
`;