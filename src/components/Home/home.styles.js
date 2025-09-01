import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContainerHome = styled.div`
  z-index: 50;
  margin: 0;
  padding-top: 100px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  padding-left: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(89, 201, 165, 0.1) 0%, rgba(2, 195, 189, 0.1) 100%);
    border-radius: 20px;
    z-index: -1;
  }
  
  ${mediaQueries.desktop} {
    margin: 0px auto;
    padding-top: 180px;
    align-content: start;
  }
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--colorSecondary), transparent);
    border-radius: 2px;
  }
  
  ${mediaQueries.desktop}{
    font-size: 1.6rem;
  }
  z-index: 50;
  margin: 0;
`;

export const TitleHome = styled.h1`
  color: var(--colorSecondary);
  z-index: 50;
  margin: 30px 0 40px;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--colorSecondary) 0%, #00B9AE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, rgba(89, 201, 165, 0.1), rgba(2, 195, 189, 0.1));
    border-radius: 15px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  ${mediaQueries.tablet}{
    font-size: 3.5rem;
  }
  ${mediaQueries.desktop}{
    font-size: 5rem;
  }
`;

export const DescriptionHome = styled.p`
  color: var(--colorPrimary);
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
  opacity: 0.9;
  
  ${mediaQueries.desktop}{
    font-size: 1.4rem;
    line-height: 1.9;
  }
  z-index: 50;
  margin: 0;
`;

export const ButtonHome = styled.button`
  margin-top: 50px;
  background: linear-gradient(135deg, transparent 0%, rgba(89, 201, 165, 0.1) 100%);
  z-index: 50;
  width: 220px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--colorSecondary);
  border: 2px solid transparent;
  background-image: linear-gradient(var(--background), var(--background)), 
                    linear-gradient(135deg, var(--colorSecondary), #00B9AE);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    color: var(--colorPrimary);
    background: linear-gradient(135deg, var(--colorSecondary), #00B9AE);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(89, 201, 165, 0.4);
    z-index: 50;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  ${mediaQueries.desktop}{
    font-size: 1.3rem;
    width: 250px;
    padding: 18px 35px;
  }
`;
