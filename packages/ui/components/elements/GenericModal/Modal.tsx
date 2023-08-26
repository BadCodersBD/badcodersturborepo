import { useState } from "react";
import { motion } from "framer-motion";
import ModalImplement from "./ModalImplement";
import type {ModalProps} from '../../../types/types'

const Modal = ({
  backgroundColor,
  color,
  buttonBackgroundColor,
  buttonColor,
  buttonText,
  width,
  children
}: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="m-20 rounded-2xl p-3"
        style={{ background: buttonBackgroundColor, color: buttonColor }}
        onClick={() => (modalOpen ? close() : open())}
      >
        {buttonText}
      </motion.button>
      {modalOpen && (
        <ModalImplement
          handleClose={close}
          backgroundColor={backgroundColor}
          color={color}
          width={width}
        >
          {children}
        </ModalImplement>
      )}
    </div>
  );
};

export default Modal;
