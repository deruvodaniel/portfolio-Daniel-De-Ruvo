import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionForm = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column;
  z-index: 11;
  margin-top: 0px;
  width: 100%;
  ${mediaQueries.tablet} {
    width: 50%;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-areas:
    "name name"
    "phone phone"
    "email email"
    "subject subject"
    "message message"
    "errorTA errorTA"
    "button button";
  ${mediaQueries.tablet} {
    width: unset;
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
  flex-flow: column wrap;
  align-content: center;
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
    padding: 20px 10px;
    margin: 10px 20px;
    border-radius: 5px;
    width: 90%;
    color: var(--colorPrimary);
    font-size: 1rem;
    border: 2px solid #3a5856;
    outline: none;
    background-color: #3a5856;
    ::placeholder {
      color: var(--colorPrimary);
    }
    &:focus {
      background-color: #3a5856;
    }
    &:hover{
      filter: brightness(0.90);
    }
    &.input__error {
      border: 2px solid red;
      outline: none;
    }
    ${mediaQueries.desktop} {
      max-width: 250px;
    }
  }
`;

export const ContainerTextArea = styled.div`
  grid-area: message;
  display: flex;
  width: 100%
  flex-flow: column wrap;
`;

export const Textarea = styled.textarea`
  width: 90%;
  padding: 20px 20px;
  margin: 10px 0;
  color: var(--colorPrimary);
  font-size: 1rem;
  border: none;
  min-height: 150px;
  max-height: 350px;
  border-radius: 5px;
  outline: none;
  background-color: #3a5856;
  color: var(--colorPrimary);
  ::placeholder {
    color: var(--colorPrimary);
  }
  &:focus {
    background-color: #3a5856;
  }
  &.input__error {
    border: 1px solid red;
    outline: 1px solid red;
  }
  ${mediaQueries.desktop} {
    width: 90%;
  }
`;

export const Btn = styled.button`
  margin-top: 40px;
  grid-area: button;
  width: 100%;
  border-radius: 10px;
  background-color: transparent;
  color: var(--colorSecondary);
  border: 2px solid var(--colorSecondary);
  padding: 15px 0px;
  font-size: 1rem;
  align-self: flex-start;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    transition: 0.3s ease all;
    background-color: var(--colorSecondary);
    color: var(--background);
    filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.3));
  }
  ${mediaQueries.tablet} {
    padding: 12px 15px;
    width: 150px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 13px;
  margin: 0 0 0 20px;
  text-align: start;
`;
