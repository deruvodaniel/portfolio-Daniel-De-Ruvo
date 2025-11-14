import { DotSpinner } from "@uiball/loaders";
import ReactDOM from "react-dom";
import { ContainerLoading, Modal, ModalContent } from "./modalLoading.styles";

export default function ModalLoading() {
  return ReactDOM.createPortal(
    <Modal>
      <ModalContent>
        <ContainerLoading>
          <DotSpinner size={80} speed={0.9} color={"#56E39F"} />
        </ContainerLoading>
      </ModalContent>
    </Modal>,
    document.getElementById("modal-loading")
  );
}
