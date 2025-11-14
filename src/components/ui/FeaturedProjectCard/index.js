import React, { useState, useEffect } from 'react';
import { useI18n } from '../../../context/i18nContext';
import ProjectCardSkeleton from '../Skeleton';
import { 
  FeaturedCard,
  FeaturedImageContainer,
  FeaturedImage,
  FeaturedOverlay,
  FeaturedContent,
  FeaturedBadge,
  FeaturedTitle,
  FeaturedSubtitle,
  FeaturedDescription,
  FeaturedActions,
  FeaturedPrimaryButton,
  FeaturedSecondaryButton,
  FeaturedGradient
} from './featuredProjectCard.styles';

const FeaturedProjectCard = ({ project }) => {
  const { t } = useI18n();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  const handleVisitSite = () => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  const handleVisitRepo = () => {
    window.open(project.github, '_blank', 'noopener,noreferrer');
  };

  const getPreviewUrl = (url) => {
    if (!url) return null;
    return `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=600`;
  };

  const getImageSource = () => {
    if (project.img && project.img.trim() !== '') {
      return project.img;
    }
    return getPreviewUrl(project.link);
  };

  if (isLoading) {
    return <ProjectCardSkeleton />;
  }

  const imageSource = getImageSource();

  return (
    <FeaturedCard>
      <FeaturedImageContainer>
        {imageSource ? (
          <>
            <FeaturedImage 
              src={imageSource}
              alt={project.title}
              loading="lazy"
            />
            <FeaturedOverlay />
            <FeaturedGradient />
          </>
        ) : (
          <ProjectCardSkeleton />
        )}
      </FeaturedImageContainer>
      
      <FeaturedContent>
        <FeaturedBadge>⭐ {t('projects.featured') || 'Featured Project'}</FeaturedBadge>
        <FeaturedTitle>{project.title}</FeaturedTitle>
        <FeaturedSubtitle>{project.subtitle}</FeaturedSubtitle>
        <FeaturedDescription>{project.text}</FeaturedDescription>
        
        <FeaturedActions>
          <FeaturedPrimaryButton onClick={handleVisitSite}>
            {t('projects.live')}
          </FeaturedPrimaryButton>
          <FeaturedSecondaryButton onClick={handleVisitRepo}>
            {t('projects.viewCode')}
          </FeaturedSecondaryButton>
        </FeaturedActions>
      </FeaturedContent>
    </FeaturedCard>
  );
};

export default FeaturedProjectCard;
