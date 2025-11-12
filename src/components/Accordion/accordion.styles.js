import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { baseCard, cardPadding, focusStyles, spacing, fontSize, textStyles } from 'styles/mixins';

export const AccordionContainer = styled.div`
  ${baseCard}
  overflow: hidden;
`;

export const AccordionHeader = styled.div`
  ${cardPadding}
  ${focusStyles}
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: var(--cardBackground);
  transition: all 0.2s ease;
  border: none;
  border-radius: 12px 12px 0 0;

  &:hover {
    background: var(--hoverBackground);
  }

  ${mediaQueries.tablet} {
    border-radius: 16px 16px 0 0;
  }
`;

export const AccordionTitle = styled.h3`
  ${fontSize.xl}
  ${textStyles.primary}
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.3;
  flex: 1;
`;

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--colorPrimary);
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

  svg {
    width: 20px;
    height: 20px;

    ${mediaQueries.tablet} {
      width: 24px;
      height: 24px;
    }
  }
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  background: var(--cardBackground);
`;

export const AccordionBody = styled.div`
  padding: 0 20px 20px 20px;
  ${textStyles.secondary}
  line-height: 1.6;

  ${mediaQueries.tablet} {
    padding: 0 24px 24px 24px;
  }

  ${mediaQueries.desktop} {
    padding: 0 28px 28px 28px;
  }

  h4 {
    ${fontSize.md}
    ${textStyles.primary}
    margin: 0 0 12px 0;

    ${mediaQueries.tablet} {
      margin-bottom: 16px;
    }
  }

  p {
    ${fontSize.sm}
    margin: 0 0 12px 0;
    line-height: 1.7;

    ${mediaQueries.tablet} {
      margin-bottom: 16px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin: 0;
    padding-left: 20px;
    list-style: none;

    ${mediaQueries.tablet} {
      padding-left: 24px;
    }
  }

  li {
    ${fontSize.sm}
    position: relative;
    margin-bottom: 8px;
    line-height: 1.6;

    ${mediaQueries.tablet} {
      margin-bottom: 10px;
    }

    ${mediaQueries.desktop} {
      margin-bottom: 12px;
    }

    &:before {
      content: '';
      position: absolute;
      left: -16px;
      top: 8px;
      width: 6px;
      height: 6px;
      background: var(--colorPrimary);
      border-radius: 50%;

      ${mediaQueries.tablet} {
        left: -20px;
        top: 10px;
        width: 8px;
        height: 8px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .period {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 6px;
    ${fontSize.xs}
    font-weight: 600;
    margin-bottom: 12px;
    border: 1px solid transparent;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    [data-theme="light"] & {
      background: #0891b2;
      color: #ffffff;
      border: 1px solid #0891b2;
      box-shadow: 0 2px 4px rgba(8, 145, 178, 0.2);
    }

    [data-theme="dark"] & {
      background: var(--colorPrimary);
      color: #000000;
      border: 1px solid var(--colorPrimary);
      box-shadow: 0 2px 8px rgba(0, 229, 255, 0.3);
    }

    ${mediaQueries.tablet} {
      padding: 6px 12px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
  }
`;