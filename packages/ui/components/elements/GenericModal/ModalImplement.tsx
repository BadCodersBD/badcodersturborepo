import { motion } from "framer-motion";
import Backdrop from "./BackDrop";
import { baseTheme } from "../../foundations/theming";
import type {ModalImplementProps} from '../../../types/types'

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};

const ModalImplement = ({
  handleClose,
  backgroundColor,
  color,
  width,
  children
}: ModalImplementProps) => {
  return (
    <Backdrop onClicked={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 h-fit rounded-2xl p-5"
        style={{
          background: backgroundColor,
          color: color,
          width: `${width}%`,
          zIndex: 1
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <div className="p-8">
          <button
            className="absolute bottom-3 left-3 rounded-2xl px-5 py-2"
            style={{
              background: baseTheme.colors.primary.red,
              color: baseTheme.colors.neutrals.full_white
            }}
            onClick={() => handleClose()}
          >
            Close
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default ModalImplement;
