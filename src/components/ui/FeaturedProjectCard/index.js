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
    <FeaturedCard role="article" aria-labelledby={`featured-project-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
      <FeaturedImageContainer>
        {imageSource ? (
          <>
            <FeaturedImage 
              src={imageSource}
              alt={`Screenshot of ${project.title} project`}
              loading="lazy"
              decoding="async"
            />
            <FeaturedOverlay aria-hidden="true" />
            <FeaturedGradient aria-hidden="true" />
          </>
        ) : (
          <ProjectCardSkeleton />
        )}
      </FeaturedImageContainer>
      
      <FeaturedContent>
        <FeaturedBadge aria-label="Featured project badge">{t('projects.featured') || 'Featured Project'}</FeaturedBadge>
        <FeaturedTitle id={`featured-project-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>{project.title}</FeaturedTitle>
        <FeaturedSubtitle>{project.subtitle}</FeaturedSubtitle>
        <FeaturedDescription>{project.text}</FeaturedDescription>
        
        <FeaturedActions role="group" aria-label="Project actions">
          <FeaturedPrimaryButton 
            onClick={handleVisitSite}
            aria-label={`Visit ${project.title} live site`}
          >
            {t('projects.live')}
          </FeaturedPrimaryButton>
          <FeaturedSecondaryButton 
            onClick={handleVisitRepo}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            {t('projects.viewCode')}
          </FeaturedSecondaryButton>
        </FeaturedActions>
      </FeaturedContent>
    </FeaturedCard>
  );
};

export default FeaturedProjectCard;
