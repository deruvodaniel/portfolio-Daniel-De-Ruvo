import React from 'react';
import { 
  PreviewContainer, 
  PreviewImageWrapper, 
  PreviewImage,
  PreviewInfo, 
  PreviewTitle, 
  PreviewDomain, 
  PreviewActions,
  ActionButton
} from './livePreview.styles';

const getDomain = (url) => {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch (_) {
    return '';
  }
};

const LivePreview = ({ url, title, fallbackImage }) => {
  const domain = getDomain(url);

  const handleVisitSite = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <PreviewContainer>
      <PreviewImageWrapper onClick={handleVisitSite}>
        <PreviewImage 
          src={fallbackImage} 
          alt={title}
          loading="lazy"
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }} className="hover-button">
          <ActionButton>
            🚀 Visitar Sitio
          </ActionButton>
        </div>
      </PreviewImageWrapper>
      
      <PreviewInfo>
        <PreviewTitle>{title}</PreviewTitle>
        <PreviewDomain>{domain}</PreviewDomain>
        <PreviewActions>
          <ActionButton onClick={handleVisitSite}>
            Ver Proyecto
          </ActionButton>
        </PreviewActions>
      </PreviewInfo>
    </PreviewContainer>
  );
};

export default LivePreview;