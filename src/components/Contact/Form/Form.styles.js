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
  max-width: 700px;
  padding: 48px;
  background: var(--backgroundCard);
  backdrop-filter: blur(30px);
  border: 1px solid var(--borderColor);
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradientPrimary);
    opacity: 0.8;
  }
  
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
    padding: 24px 28px;
    border-radius: 20px;
    width: 100%;
    color: var(--colorPrimary);
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    background: var(--backgroundCard);
    backdrop-filter: blur(20px);
    border: 2px solid var(--borderColor);
    outline: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 400;
    }
    
    &:focus {
      border-color: var(--colorSecondary);
      box-shadow: 
        0 0 0 4px rgba(0, 212, 255, 0.1),
        var(--shadowPrimary);
      background: var(--backgroundCardHover);
      transform: translateY(-2px);
    }
    
    &:hover {
      border-color: rgba(0, 212, 255, 0.4);
      background: var(--backgroundCardHover);
      transform: translateY(-2px);
    }
    
    &.input__error {
      border-color: var(--colorError);
      box-shadow: 
        0 0 0 4px rgba(255, 107, 107, 0.1),
        0 8px 16px rgba(255, 107, 107, 0.3);
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
  padding: 24px 28px;
  color: var(--colorPrimary);
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  min-height: 180px;
  max-height: 320px;
  border-radius: 20px;
  outline: none;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 2px solid var(--borderColor);
  resize: vertical;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 400;
  }
  
  &:focus {
    border-color: var(--colorSecondary);
    box-shadow: 
      0 0 0 4px rgba(0, 212, 255, 0.1),
      var(--shadowPrimary);
    background: var(--backgroundCardHover);
    transform: translateY(-2px);
  }
  
  &:hover {
    border-color: rgba(0, 212, 255, 0.4);
    background: var(--backgroundCardHover);
    transform: translateY(-2px);
  }
  
  &.input__error {
    border-color: var(--colorError);
    box-shadow: 
      0 0 0 4px rgba(255, 107, 107, 0.1),
      0 8px 16px rgba(255, 107, 107, 0.3);
  }
`;

export const Btn = styled.button`
  grid-area: button;
  padding: 24px 48px;
  border-radius: 50px;
  background: var(--gradientPrimary);
  border: none;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 2px;
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
    transform: translateY(-6px);
    box-shadow: 
      0 25px 50px rgba(0, 212, 255, 0.4),
      0 0 50px rgba(0, 212, 255, 0.3);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--colorError);
  font-size: 0.95rem;
  margin-top: 12px;
  font-weight: 600;
`;