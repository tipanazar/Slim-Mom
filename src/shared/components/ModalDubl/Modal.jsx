import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import SvgBtn from "../../../modules/DailyCaloriesForm/SvgComponents/SvgBtn";
import SvgClose from "../../../modules/DailyCaloriesForm/SvgComponents/SvgClose";

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ openClose }) => {
  const [value, setValue] = useState("");
  const handleChange = ({ target: { value } }) => setValue(value);

  useEffect(() => {
    const close = (el) => {
      if (el.code === "Escape") {
        openClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [openClose]);

  const close = (el) => {
    if (el.currentTarget === el.target) {
      openClose();
    }
  };

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalLogo} onClick={close}>
          <div className={styles.modalContainer}>
            <button className={styles.modalBtn}>
              <SvgBtn className={styles.iconBtn} />
            </button>
          </div>
        </div>
        <div className={styles.modalWrapper}>
          <h2 className={styles.modalTitle}>
            Ваша рекомендована добова норма калорій становить
          </h2>
          <SvgClose onClick={close} className={styles.iconClose} />
          <p className={styles.modalCalory}>
            2280 <span className={styles.modalCalorySpan}>kkal</span>
          </p>

          <div className={styles.products}>
            <input
              className={styles.textInput}
              name="filter"
              type="text"
              value={value}
              onChange={handleChange}
            />
            <p className={styles.productsTitle}>
              Продукти, які вам не варто вживати
            </p>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
