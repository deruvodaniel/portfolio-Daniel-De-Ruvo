import styled from "styled-components";
import { mediaQueries } from "styles";

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
    padding: 24px 0;
    border: none;
    border-bottom: 1px solid var(--borderColor);
    background: transparent;
    color: var(--colorPrimary);
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    outline: none;
    transition: all 0.3s ease;
    
    &::placeholder {
      color: var(--textMuted);
      font-weight: 400;
    }
    
    &:focus {
      border-bottom-color: var(--colorSecondary);
      color: var(--colorSecondary);
    }
    
    &.input__error {
      border-bottom-color: var(--colorError);
    }
  }
`;

export const ContainerTextArea = styled.div`
  grid-area: message;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 24px 0;
  color: var(--colorPrimary);
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  min-height: 150px;
  border: none;
  border-bottom: 1px solid var(--borderColor);
  background: transparent;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: var(--textMuted);
    font-weight: 400;
  }
  
  &:focus {
    border-bottom-color: var(--colorSecondary);
    color: var(--colorSecondary);
  }
  
  &.input__error {
    border-bottom-color: var(--colorError);
  }
`;

export const Btn = styled.button`
  grid-area: button;
  padding: 24px 48px;
  border-radius: 60px;
  background: var(--gradientPrimary);
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 40px;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadowPrimary);
  }
  
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