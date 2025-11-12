import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  height: 200px;
  background: var(--backgroundCard);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    90deg,
    var(--backgroundCard) 0px,
    var(--backgroundCardHover) 40px,
    var(--backgroundCard) 80px
  );
  background-size: 200px;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: var(--borderColor);
    border-radius: 8px;
    opacity: 0.5;
  }
`;

export const SkeletonText = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '16px'};
  background: linear-gradient(
    90deg,
    var(--backgroundCard) 0px,
    var(--backgroundCardHover) 40px,
    var(--backgroundCard) 80px
  );
  background-size: 200px;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
  margin: ${props => props.margin || '0'};
`;

export const SkeletonButton = styled.div`
  width: ${props => props.width || '120px'};
  height: 40px;
  background: linear-gradient(
    90deg,
    var(--backgroundCard) 0px,
    var(--backgroundCardHover) 40px,
    var(--backgroundCard) 80px
  );
  background-size: 200px;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 8px;
  margin: ${props => props.margin || '0'};
`;