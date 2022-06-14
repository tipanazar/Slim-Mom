import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modalRoot");

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    document.addEventListener("keydown", close);
    modalRoot.addEventListener("click", close);
  });

  const close = (ev) => {
    if (ev.code === "Escape" || ev.target === ev.currentTarget) {
      document.removeEventListener("keydown", close);
      modalRoot.removeEventListener("click", close);

      closeModal();
    }
  };

  return createPortal(<>{children}</>, modalRoot);
};

export default Modal;
