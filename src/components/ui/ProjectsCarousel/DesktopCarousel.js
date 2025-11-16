import { motion } from 'framer-motion';
import SimpleProjectCard from '../SimpleProjectCard';
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselPage,
  ProjectPair,
  NavigationDots,
  Dot,
  NavigationButtons,
  NavButton,
  CarouselProgress
} from './projectsCarousel.styles';
import { useCarouselNavigation } from './useCarouselNavigation';

const DesktopCarousel = ({ projects }) => {
  // Group projects in pairs (2 per page)
  const projectsPerPage = 2;
  const pages = [];
  for (let i = 0; i < projects.length; i += projectsPerPage) {
    pages.push(projects.slice(i, i + projectsPerPage));
  }

  const totalPages = pages.length;
  const {
    currentPage,
    containerRef,
    scrollToPage,
    handlePrevious,
    handleNext,
    progressPercentage
  } = useCarouselNavigation(totalPages);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={containerRef}>
        {pages.map((pagePairs, pageIndex) => (
          <CarouselPage key={pageIndex}>
            <ProjectPair>
              {pagePairs.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  <SimpleProjectCard project={project} />
                </motion.div>
              ))}
            </ProjectPair>
          </CarouselPage>
        ))}
      </CarouselWrapper>

      {/* Navigation Dots */}
      <NavigationDots>
        {pages.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentPage}
            onClick={() => scrollToPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </NavigationDots>

      {/* Navigation Buttons */}
      <NavigationButtons>
        <NavButton
          onClick={handlePrevious}
          disabled={currentPage === 0}
          $direction="up"
          aria-label="Previous projects"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </NavButton>
        <NavButton
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          $direction="down"
          aria-label="Next projects"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </NavButton>
      </NavigationButtons>

      {/* Progress Bar */}
      <CarouselProgress>
        <motion.div
          style={{
            height: '100%',
            background: 'var(--gradientPrimary)',
            borderRadius: '4px',
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </CarouselProgress>
    </CarouselContainer>
  );
};

export default DesktopCarousel;
