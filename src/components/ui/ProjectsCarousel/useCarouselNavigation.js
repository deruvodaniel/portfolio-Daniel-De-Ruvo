import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing carousel navigation logic
 * Handles page state, scroll behavior, and keyboard navigation
 * @param {number} totalPages - Total number of pages in the carousel
 * @returns {Object} Navigation state and handlers
 */
export const useCarouselNavigation = (totalPages) => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);

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

  // Auto-scroll with snap behavior
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

  // Keyboard navigation (Arrow Up/Down)
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

  return {
    currentPage,
    containerRef,
    scrollToPage,
    handlePrevious,
    handleNext,
    progressPercentage
  };
};
