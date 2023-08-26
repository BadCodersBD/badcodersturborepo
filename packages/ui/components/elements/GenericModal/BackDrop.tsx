import { motion } from "framer-motion";
import { ModalBackDropProps } from "../../../types/types";

const Backdrop = ({ onClicked, children }: ModalBackDropProps) => {
  return (
    <motion.div
      onClick={() => onClicked()}
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
