import { useState } from "react";

import Modal from "../../shared/components/Modal";
import SvgBtn from "./SvgComponents/SvgBtn";
import SvgClose from "./SvgComponents/SvgClose";

import styles from "./dailyCaloriesForm.module.scss";

const modalRoot = document.querySelector("#modalRoot");

const DailyCaloriesForm = () => {
  const [value, setValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false); // Поставить, "true" что бы по умолчанию была открыта

  const handleChange = ({ target: { value } }) => setValue(value);

  isModalOpen
    ? (modalRoot.style.display = "flex")
    : (modalRoot.style.display = "none");

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {!isModalOpen || (
        <Modal closeModal={closeModal}>
          <div className={styles.modalWindow}>
            <div className={styles.modalLogo} onClick={closeModal}>
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
              <SvgClose onClick={closeModal} className={styles.iconClose} />
              <p className={styles.modalCalory}>
                2280 <span className={styles.modalCalorySpan}>ккал</span>
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
        </Modal>
      )}
    </>
  );
};

export default DailyCaloriesForm;
