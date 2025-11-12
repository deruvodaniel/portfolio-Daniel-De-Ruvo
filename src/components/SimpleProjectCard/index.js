import React, { useState, useEffect } from 'react';
import { useI18n } from '../../context/i18nContext';
import ProjectCardSkeleton from '../Skeleton';
import { 
  SimpleCard, 
  SimpleImage,
  SimpleContent, 
  SimpleTitle, 
  SimpleDescription, 
  SimpleActions, 
  PrimaryButton, 
  SecondaryButton 
} from './simpleProjectCard.styles';

const SimpleProjectCard = ({ project }) => {
  const { t } = useI18n();
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    // Simular tiempo de carga mínimo para mostrar skeleton
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  const handleVisitSite = () => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  const handleVisitRepo = () => {
    window.open(project.github, '_blank', 'noopener,noreferrer');
  };

  // Generar preview URL usando WordPress mshots
  const getPreviewUrl = (url) => {
    if (!url) return null;
    const previewUrl = `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=400`;
    return previewUrl;
  };

  const getImageSource = () => {
    // Si el proyecto tiene una imagen específica (no string vacío), usarla
    if (project.img && project.img.trim() !== '') {
      return project.img;
    }
    // Si no tiene imagen específica, usar preview URL
    return getPreviewUrl(project.link);
  };

  if (isLoading) {
    return <ProjectCardSkeleton />;
  }

  const imageSource = getImageSource();

  return (
    <SimpleCard>
      {imageSource ? (
        <SimpleImage 
          src={imageSource}
          alt={project.title}
          loading="lazy"
          onError={() => {
            setImageError(true);
          }}
        />
      ) : (
        <ProjectCardSkeleton />
      )}
      
      <SimpleContent>
        <SimpleTitle>{project.title}</SimpleTitle>
        <SimpleDescription>{project.text}</SimpleDescription>
        
        <SimpleActions>
          <PrimaryButton onClick={handleVisitSite}>
            {t('projects.live')}
          </PrimaryButton>
          <SecondaryButton onClick={handleVisitRepo}>
            {t('projects.viewCode')}
          </SecondaryButton>
        </SimpleActions>
      </SimpleContent>
    </SimpleCard>
  );
};

export default SimpleProjectCard;