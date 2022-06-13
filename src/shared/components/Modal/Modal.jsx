import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modalRoot");

const Modal = ({ children }) => {
  // const escapeListener = addEventListener('')
  return createPortal(<>{ children }</>, modalRoot);
};

export default Modal;
