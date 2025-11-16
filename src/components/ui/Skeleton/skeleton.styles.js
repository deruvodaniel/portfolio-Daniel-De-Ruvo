import styled, { keyframes, css } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: calc(400px + 100%) 0;
  }
`;

// DRY: Reusable shimmer effect mixin
const shimmerEffect = css`
  background: linear-gradient(
    90deg,
    var(--backgroundCard) 0%,
    var(--backgroundCardHover) 20%,
    var(--borderColor) 40%,
    var(--backgroundCardHover) 60%,
    var(--backgroundCard) 100%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
  ${shimmerEffect}
  position: relative;
  border-radius: 8px 8px 0 0;
  
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
    opacity: 0.3;
  }
`;

export const SkeletonText = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '16px'};
  ${shimmerEffect}
  border-radius: 4px;
  margin: ${props => props.margin || '0'};
`;

export const SkeletonButton = styled.div`
  width: ${props => props.width || '120px'};
  height: 40px;
  ${shimmerEffect}
  border-radius: 8px;
  margin: ${props => props.margin || '0'};
`;