import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AccordionContainer,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent,
  AccordionBody
} from './accordion.styles';

const Accordion = ({ title, children, defaultOpen = false, ...props }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <AccordionContainer {...props}>
      <AccordionHeader
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon $isOpen={isOpen}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AccordionIcon>
      </AccordionHeader>

      <AnimatePresence initial={false}>
        {isOpen && (
          <AccordionContent
            id="accordion-content"
            as={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 0.25, delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: 'easeIn' },
                opacity: { duration: 0.15 }
              }
            }}
          >
            <AccordionBody>
              {children}
            </AccordionBody>
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionContainer>
  );
};

export default Accordion;