
import ModalImplement from "./ModalImplementation";
import type { ModalProps } from "../../../types/types";

const Modal = ({ backgroundColor, children, open }: ModalProps) => {

  return (
    <div>
      {open && (
        <ModalImplement backgroundColor={backgroundColor}>
          {children}
        </ModalImplement>
      )}
    </div>
  );
};

export default Modal;
