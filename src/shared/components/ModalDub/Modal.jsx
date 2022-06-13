import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modalRoot");

const Modal = ({ children }) => {
  return createPortal(<>{ children }</>, modalRoot);
};

export default Modal;
