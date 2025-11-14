import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
  CarouselProgress,
  MobileCarouselWrapper
} from './projectsCarousel.styles';
import useWidth from '../../hooks/useWidth';

const ProjectsCarousel = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const { width } = useWidth();
  const isMobile = width < 768;
  
  // Agrupar proyectos en pares (2 por página)
  const projectsPerPage = 2;
  const pages = [];
  for (let i = 0; i < projects.length; i += projectsPerPage) {
    pages.push(projects.slice(i, i + projectsPerPage));
  }

  const totalPages = pages.length;

  const scrollToPage = useCallback((pageIndex) => {
    const container = containerRef.current;
    if (!container) return;
    
    const pageHeight = container.clientHeight;
    container.scrollTo({
      top: pageHeight * pageIndex,
      behavior: 'smooth'
    });
    setCurrentPage(pageIndex);
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  }, [currentPage, scrollToPage]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, scrollToPage]);

  // Auto-scroll con snap
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const pageHeight = container.clientHeight;
      const newPage = Math.round(scrollPosition / pageHeight);
      
      if (newPage !== currentPage && newPage >= 0 && newPage < totalPages) {
        setCurrentPage(newPage);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentPage, totalPages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrevious]);

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  // Mobile: Swiper horizontal
  if (isMobile) {
    return (
      <MobileCarouselWrapper>
        <Swiper
          modules={[Pagination, Navigation, Keyboard]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          keyboard={{
            enabled: true,
          }}
          onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <SimpleProjectCard project={project} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <CarouselProgress>
          <motion.div
            style={{
              height: '100%',
              background: 'var(--gradientPrimary)',
              borderRadius: '4px',
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${((currentPage + 1) / projects.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </CarouselProgress>
      </MobileCarouselWrapper>
    );
  }

  // Desktop: Scroll vertical con snap
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

export default ProjectsCarousel;
