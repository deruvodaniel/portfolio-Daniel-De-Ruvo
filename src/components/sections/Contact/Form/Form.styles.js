import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { primaryButton } from 'styles/mixins';

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
  width: 100%;
`;

export const Form = styled.form`
  display: grid;
  gap: 32px;
  width: 100%;
  max-width: 600px;
  
  grid-template-areas:
    "name"
    "phone"
    "email"
    "subject"
    "message"
    "button";
  
  ${mediaQueries.tablet} {
    grid-template-areas:
      "name phone"
      "email subject"
      "message message"
      "button button";
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  
  &.input__name { grid-area: name; }
  &.input__phone { grid-area: phone; }
  &.input__email { grid-area: email; }
  &.input__subject { grid-area: subject; }
  
  & > input {
    padding: 16px 12px;
    border: none;
    border-bottom: 2px solid var(--borderColor);
    background: var(--backgroundCard);
    border-radius: 10px;
    color: var(--colorPrimary);
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;

    &::placeholder {
      color: var(--textMuted);
      font-weight: 400;
    }

    &:focus {
      border-bottom-color: var(--colorSecondary);
      box-shadow: inset 0 -2px 0 0 var(--colorSecondary), 0 6px 24px rgba(0,0,0,0.25);
      background: var(--backgroundCardHover);
    }

    &:not(:placeholder-shown) {
      border-bottom-color: var(--colorSecondary);
      background: var(--backgroundCardHover);
    }

    &.input__error {
      border-bottom-color: var(--colorError);
      box-shadow: inset 0 -2px 0 0 var(--colorError);
    }
  }
`;

export const ContainerTextArea = styled.div`
  grid-area: message;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  grid-area: message;
  width: 100%;
  min-height: 120px;
  padding: 20px 0 8px;
  margin: 0;
  border: none;
  border-bottom: 2px solid var(--borderColor);
  background: transparent;
  color: var(--colorPrimary);
  font-size: 1rem;
  font-weight: 400;
  font-family: var(--fontBody);
  line-height: 1.6;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  resize: vertical;
  appearance: none;

  &::placeholder {
    color: var(--textMuted);
    font-weight: 400;
  }

  &:focus {
    border-bottom-color: var(--colorSecondary);
    box-shadow: inset 0 -2px 0 0 var(--colorSecondary), 0 6px 24px rgba(0,0,0,0.25);
    background: var(--backgroundCardHover);
  }

  &:not(:placeholder-shown) {
    border-bottom-color: var(--colorSecondary);
    background: var(--backgroundCardHover);
  }

  &.input__error {
    border-bottom-color: var(--colorError);
    box-shadow: inset 0 -2px 0 0 var(--colorError);
  }
`;

export const Btn = styled.button`
  grid-area: button;
  padding: 20px 40px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  ${primaryButton}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--colorError);
  font-size: 0.9rem;
  margin-top: 8px;
  font-weight: 500;
`;
