import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Modal, ModalText } from "./modalMessageForm.styles";

export default function ModalMessageForm() {
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setShowModal(false);
  }, 4000);
  return () => clearInterval(interval);
}, [showModal]);

  function ModalStructure({ state, children }) {
    return (
      <Modal type={state} role="status" aria-live="polite" aria-atomic="true">
          <ModalText>{children}</ModalText>
      </Modal>
    );
  }

  const ModalMessage = () => {
    const {state, text} = showModal
    return ReactDOM.createPortal(
      <ModalStructure state={state}>{text}</ModalStructure>,
      document.getElementById("modal-confirm")
    );
  };

  return { ModalMessage, setShowModal, showModal };
}
