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
  gap: 24px;
  width: 100%;
  max-width: 600px;
  grid-template-areas:
    "name name"
    "phone phone"
    "email email"
    "subject subject"
    "message message"
    "errorTA errorTA"
    "button button";
  
  ${mediaQueries.tablet} {
    grid-template-areas:
      "name phone"
      "email subject"
      "message message"
      "errorTA errorTA"
      "button button";
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  
  &.input__name {
    grid-area: name;
  }
  &.input__phone {
    grid-area: phone;
  }
  &.input__email {
    grid-area: email;
  }
  &.input__subject {
    grid-area: subject;
  }
  
  & > input {
    padding: 20px 24px;
    border-radius: 16px;
    width: 100%;
    color: var(--colorPrimary);
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    background: var(--backgroundCard);
    backdrop-filter: blur(20px);
    border: 1px solid var(--borderColor);
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    &:focus {
      border-color: var(--colorSecondary);
      box-shadow: 
        0 0 0 3px rgba(0, 212, 255, 0.1),
        var(--shadowPrimary);
      background: var(--backgroundCardHover);
    }
    
    &:hover {
      border-color: rgba(0, 212, 255, 0.3);
      background: var(--backgroundCardHover);
    }
    
    &.input__error {
      border-color: var(--colorError);
      box-shadow: 
        0 0 0 3px rgba(255, 107, 107, 0.1),
        0 8px 16px rgba(255, 107, 107, 0.2);
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
  padding: 20px 24px;
  color: var(--colorPrimary);
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  min-height: 160px;
  max-height: 300px;
  border-radius: 16px;
  outline: none;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    border-color: var(--colorSecondary);
    box-shadow: 
      0 0 0 3px rgba(0, 212, 255, 0.1),
      var(--shadowPrimary);
    background: var(--backgroundCardHover);
  }
  
  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
    background: var(--backgroundCardHover);
  }
  
  &.input__error {
    border-color: var(--colorError);
    box-shadow: 
      0 0 0 3px rgba(255, 107, 107, 0.1),
      0 8px 16px rgba(255, 107, 107, 0.2);
  }
`;

export const Btn = styled.button`
  grid-area: button;
  padding: 20px 40px;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 20px 40px rgba(0, 212, 255, 0.3),
      0 0 40px rgba(0, 212, 255, 0.2);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:active {
    transform: translateY(-2px);
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