import styled from "styled-components";

export const Modal = styled.div`
  background: rgb(0,0,0,.3);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 60;
`;

export const ModalContent = styled.div`
  background: transparent;
  height: 500px;
  margin: 25vh auto 5vh;
  position: relative;
  width: 500px;
  display: flex; 
  flex-flow: column wrap;
  align-items: center; 
`;

export const ContainerLoading = styled.div`
  display: flex;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
`;