import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.header)`
  position: fixed;
  display: flex;
  left: 0;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  min-width: 100%;
  max-width: 1400px;
  padding: 0 30px;
  transition: 0.5s ease all;
  &.withBackground {
    transition: 0.5s ease all;
    border-bottom: 4px solid var(--colorSecondary);
    background: var(--background);
  }
  & > img {
    color: var(--colorPrimary);
    cursor: pointer;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
  }
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0 40px;
  &.active {
    color: var(--colorSecondary);
    border: 2px solid var(--colorSecondary);
  }
`;

export const Links = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 15px;
  color: var(--colorPrimary);
  text-transform: uppercase;
  border-radius: 20px;
  border: 2px solid transparent;
  padding: 3px 20px;
  transition: 0.3s ease all;
  &:hover {
    transition: 0.3s ease all;
    color: var(--colorSecondary);
    border: 2px solid var(--colorSecondary);
  }
`;
