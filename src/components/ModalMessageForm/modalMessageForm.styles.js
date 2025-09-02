import styled from "styled-components";
import { mediaQueries } from "styles";

const TYPES = {
  true: "var(--successBg)",
  false: "var(--errorBg)",
};

export const Modal = styled.div`
  z-index: 91;
  position: fixed;
  top: 150px;
  right: 0;
  background: ${(props) => TYPES[props.type]};
  border-radius: 20px 0 0 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
`;

export const ModalText = styled.p`
  color: var(--alertText);
  font-weight: 700;
  margin: 0;
  font-size: 15px;
  padding: 15px 20px;
  ${mediaQueries.tablet} {
    font-size: 20px;
    padding: 15px 50px;
  }
`;
