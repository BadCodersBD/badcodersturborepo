import React from "react";
import {
  Modal as ModalComponent,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";

interface IModal {
  title?: React.ReactNode | string;
  children: React.ReactNode;
  isDismissible?: boolean;
  show: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  handleClose: () => void;
  isShowHeader?: boolean;
  className?: string;
}

const Modal: React.FC<IModal> = ({
  title,
  children,
  isDismissible = true,
  show,
  size = "md",
  handleClose,
  isShowHeader = true,
}) => {
  return (
    <>
      <ModalComponent
        size={size}
        backdrop="blur"
        isOpen={show}
        onClose={handleClose}
        placement={"center"}
        isDismissable={isDismissible}
      >
        <ModalContent>
          {() => (
            <>
              {isShowHeader && (
                <ModalHeader className="flex flex-col gap-1">
                  {title ?? "Model Title"}
                </ModalHeader>
              )}

              <ModalBody>{children}</ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </ModalComponent>
    </>
  );
};

export default Modal;
