import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { mediaQueries } from 'styles';

const SectionWrapper = styled.div`
  position: relative;
  margin-bottom: ${props => props.$isExpanded ? '48px' : '24px'};
  transition: margin-bottom 0.3s ease;

  ${mediaQueries.desktop} {
    margin-bottom: 48px;
  }
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: ${props => props.$isMobile ? 'pointer' : 'default'};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--borderColor) 10%,
      var(--borderColor) 90%,
      transparent 100%
    );
    opacity: ${props => props.$isExpanded ? 0.6 : 0.3};
    transition: opacity 0.3s ease;
  }

  ${mediaQueries.desktop} {
    pointer-events: none;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--colorPrimary);
    margin: 0;
    letter-spacing: -0.5px;
    transition: color 0.2s ease;

    ${mediaQueries.tablet} {
      font-size: 1.8rem;
    }
  }

  svg {
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  ${Header}:hover & h3 {
    color: var(--colorSecondary);
  }

  ${Header}:hover & svg {
    transform: translateY(-2px);
  }
`;

const ChevronIcon = styled(motion.svg)`
  flex-shrink: 0;
  color: var(--colorPrimary);
  opacity: 0.7;
  
  ${mediaQueries.desktop} {
    display: none;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
`;

const Content = styled.div`
  padding-top: 32px;
`;

export const CollapsibleSkillSection = ({ 
  icon, 
  title, 
  children, 
  defaultExpanded = false
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // On desktop, always expanded
      if (!mobile) setIsExpanded(true);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const shouldShowContent = !isMobile || isExpanded;

  return (
    <SectionWrapper $isExpanded={shouldShowContent}>
      <Header 
        onClick={handleToggle}
        $isExpanded={shouldShowContent}
        $isMobile={isMobile}
        aria-expanded={shouldShowContent}
        type="button"
      >
        <HeaderContent>
          {icon}
          <h3>{title}</h3>
        </HeaderContent>
        {isMobile && (
          <ChevronIcon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: shouldShowContent ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <path 
              d="M6 9l6 6 6-6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </ChevronIcon>
        )}
      </Header>

      <AnimatePresence initial={false}>
        {shouldShowContent && (
          <ContentWrapper
            initial={isMobile ? { height: 0, opacity: 0 } : false}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: { 
                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={isMobile ? { 
              height: 0, 
              opacity: 0,
              transition: { 
                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.2 }
              }
            } : {}}
          >
            <Content>
              {children}
            </Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default CollapsibleSkillSection;
