import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CalculatorСalorieForm from "../CalculatorСalorieForm";
import Modal from "../../shared/components/Modal";
import Button from "../../shared/components/Button";
import SvgBtn from "./SvgComponents/SvgBtn";
import SvgClose from "./SvgComponents/SvgClose";
import { initialState } from "./initialState";
import styles from "./dailyCaloriesForm.module.scss";

const modalRoot = document.querySelector("#modalRoot");

const DailyCaloriesForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ initialState });
  const [isModalOpen, setModalOpen] = useState(true); // Поставить, "true" что бы по умолчанию была открыта

  const onChange = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ ...initialState });
  };

  isModalOpen
    ? (modalRoot.style.display = "flex")
    : (modalRoot.style.display = "none");

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <>
        <CalculatorСalorieForm
          title={"Прорахуй свою добову норму калорій зараз"}
          onSubmit={onChange}
        />
      </>
      {!isModalOpen || (
        <Modal closeModal={closeModal}>
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <div className={styles.modalLogo}>
                <Button
                  className={styles.modalBtn}
                  btnText={<SvgBtn className={styles.iconBtn} />}
                  type="button"
                  onClickBtn={() => setModalOpen(false)}
                ></Button>
              </div>
              <Button
                className={styles.modalButton}
                btnText={<SvgClose className={styles.iconClose} />}
                type="button"
                onClickBtn={() => setModalOpen(false)}
              ></Button>
              <div className={styles.modalWrapper}>
                <div className={styles.modalHeader}>
                  <h2 className={styles.modalTitle}>
                    Ваша рекомендована добова норма калорій становить
                  </h2>
                  <p className={styles.modalCalory}>
                    2280 <span className={styles.modalCalorySpan}>ккал</span>
                  </p>
                </div>
                <div className={styles.products}>
                  <p className={styles.productsTitle}>
                    Продукти, які вам не варто вживати
                  </p>
                  <ul className={styles.modalList}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <Link to="/signup">
                <Button
                  className={styles.button}
                  btnText={"Почати худнути"}
                  type="submit"
                  onClickBtn={() => setModalOpen(false)}
                ></Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DailyCaloriesForm;

DailyCaloriesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
