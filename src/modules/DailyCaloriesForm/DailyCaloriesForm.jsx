import { useState } from "react";
import { Link } from "react-router-dom";
import CalculatorСalorieForm from "../CalculatorСalorieForm";
import Modal from "../../shared/components/Modal";
import Button from "../../shared/components/Button";
import SvgBtn from "./SvgComponents/SvgBtn";
import SvgClose from "./SvgComponents/SvgClose";
import register from "../CalculatorСalorieForm";
import styles from "./dailyCaloriesForm.module.scss";

const modalRoot = document.querySelector("#modalRoot");

function DailyRate() {
  let rand = Math.round(
    10 * Number.parsefloat(register("currentWeight")) +
      6.25 * Number.parsefloat(register("age")) -
      5 * Number.parsefloat(register("height")) -
      161 -
      10 *
        Number.parsefloat(register("currentWeight") - register("desiredWeight"))
  );
  return DailyRate(rand);
}

const DailyCaloriesForm = () => {
  const [form, setForm] = useState("");

  const [isModalOpen, setModalOpen] = useState(false); // Поставить, "true" что бы по умолчанию была открыта

  const onChange = (e) => {
    e.preventDefault();
    // setModalOpen(false);
    // onSubmit(form);
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  isModalOpen
    ? (modalRoot.style.display = "flex")
    : (modalRoot.style.display = "none");

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CalculatorСalorieForm
        title={"Прорахуй свою добову норму калорій зараз"}
        onSubmit={onChange}
        handleChange={handleChange}
      />
      <Button
        onClickBtn={() => setModalOpen(true)}
        className={styles.modalOpenButton}
        btnText={"Open Modal"}
        type="button"
      />
      {!isModalOpen || (
        <Modal closeModal={closeModal}>
            <div className={styles.modalWindow}>
              <div className={styles.modalLogo}>
                <Button
                  className={styles.modalBtn}
                  btnText={<SvgBtn className={styles.iconBtn} />}
                  type="button"
                  onClickBtn={() => setModalOpen(false)}
                />
              </div>
              <Button
                className={styles.modalButton}
                btnText={<SvgClose className={styles.iconClose} />}
                type="button"
                onClickBtn={() => setModalOpen(false)}
              />
              <div className={styles.modalWrapper}>
                <div className={styles.modalHeader}>
                  <h2 className={styles.modalTitle}>
                    Ваша рекомендована добова норма калорій становить
                  </h2>
                  <p className={styles.modalCalory}>
                    {DailyRate}
                    <span className={styles.modalCalorySpan}>ккал</span>
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
                />
              </Link>
            </div>
        </Modal>
      )}
    </>
  );
};

export default DailyCaloriesForm;
