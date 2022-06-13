import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import styles from "./modal.module.scss";
import SvgBtn from "../../../modules/DailyCaloriesForm/SvgComponents/SvgBtn";
import SvgClose from "../../../modules/DailyCaloriesForm/SvgComponents/SvgClose";

const modalRoot = document.getElementById("modalRoot");

const Modal = ({ openClose }) => {
  const [value, setValue] = useState("");
  const handleChange = ({ target: { value } }) => setValue(value);
  // const [modal, setModal] = useState({
  //     open: false,
  //     content: null
  // });

  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (el) => {
      if (el.code === "Escape") {
        dispatch(openClose());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, openClose]);

  const closeBackdrop = (el) => {
    if (el.currentTarget === el.target) {
      dispatch(openClose());
    }
  };

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <div className={styles.modalLogo} onClick={closeBackdrop}>
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
          <SvgClose onClick={closeBackdrop} className={styles.iconClose} />
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
