import { motion } from "framer-motion";
import Backdrop from "./BackDrop";
import type { ModalImplementProps } from "../../../types/types";
import { modalOpenState } from "./ModalOpen";
import { useRecoilState } from "recoil";
import { Styled } from "./ModalCloseButton.styled";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalImplement = ({ children }: ModalImplementProps) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);

  return (
    <Backdrop
      onClicked={() => {
        setModalOpen({ open: false, modalName: "" });
      }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative z-20 rounded-2xl"
        style={{
          zIndex: 1,
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative flex flex-col items-center justify-center">
          <button
            className="absolute top-2 right-3 z-50"
            onClick={() => {
              setModalOpen({ open: false, modalName: "" });
            }}
          >
            <Styled.CloseButton />
          </button>
          {children}
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default ModalImplement;
