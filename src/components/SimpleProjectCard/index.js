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
    if (!url) return getFallbackImage();
    const previewUrl = `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=400`;
    return previewUrl;
  };

  // Imágenes de fallback profesionales sin logos
  const getFallbackImage = () => {
    const fallbackImages = [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80', // Code screen
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&q=80', // Tech setup
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop&q=80', // Code editor
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop&q=80', // Programming
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop&q=80', // Dashboard
    ];
    
    // Seleccionar imagen basada en el ID del proyecto
    const index = (project.id - 1) % fallbackImages.length;
    return fallbackImages[index];
  };

  if (isLoading) {
    return <ProjectCardSkeleton />;
  }

  return (
    <SimpleCard>
      <SimpleImage 
        src={imageError ? getFallbackImage() : getPreviewUrl(project.link)} 
        alt={project.title}
        loading="lazy"
        onError={(e) => {
          if (!imageError) {
            setImageError(true);
            e.target.src = getFallbackImage();
          }
        }}
        onLoad={(e) => {
          // Si la imagen carga pero es muy pequeña (placeholder de servicio), usar fallback
          if (e?.target?.naturalWidth < 100 || e?.target?.naturalHeight < 100) {
            setImageError(true);
            e.target.src = getFallbackImage();
          }
        }}
      />
      
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