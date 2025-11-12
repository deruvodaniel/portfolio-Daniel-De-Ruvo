import React from 'react';
import { 
  SkeletonContainer, 
  SkeletonImage, 
  SkeletonText, 
  SkeletonButton 
} from './skeleton.styles';

const ProjectCardSkeleton = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      background: 'var(--backgroundCard)', 
      borderRadius: '16px', 
      border: '1px solid var(--borderColor)', 
      overflow: 'hidden'
    }}>
      <SkeletonContainer>
        <SkeletonImage />
      </SkeletonContainer>
      
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Title skeleton */}
        <SkeletonText width="80%" height="20px" />
        
        {/* Description skeleton */}
        <div>
          <SkeletonText width="100%" height="14px" margin="0 0 8px 0" />
          <SkeletonText width="90%" height="14px" margin="0 0 8px 0" />
          <SkeletonText width="60%" height="14px" />
        </div>
        
        {/* Buttons skeleton */}
        <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
          <SkeletonButton width="48%" />
          <SkeletonButton width="48%" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;