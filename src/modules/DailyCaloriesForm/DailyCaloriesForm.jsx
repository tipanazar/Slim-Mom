import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Modal from "../../shared/components/Modal";
import Button from "../../shared/components/Button";
import { getCaloriesAndProducts } from "../../shared/api/products";
import Loader from "../../shared/components/Loader";
import CalculatorСalorieForm from "../CalculatorСalorieForm";
import { CloseModalIconSmall } from "./SvgComponents/";
import { CloseModalIconCommon } from "./SvgComponents";

import styles from "./dailyCaloriesForm.module.scss";

const modalRoot = document.querySelector("#modalRoot");

const DailyCaloriesForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [info, setInfo] = useState({
    items: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    const fetchInfo = async () => {
      try {
        setInfo((prevData) => ({
          ...prevData,
          loading: true,
        }));
        const result = await getCaloriesAndProducts(data, data.bloodType);
        setInfo({
          items: { ...result },
          loading: false,
          error: null,
        });
        setModalOpen(true);
      } catch (err) {
        setInfo({
          items: null,
          loading: false,
          error: err,
        });
      }
    };
    fetchInfo();
  }, [data]);

  const onChange = (data) => {
    setData(data);
  };

  isModalOpen
    ? (modalRoot.style.display = "flex")
    : (modalRoot.style.display = "none");

  const closeModal = () => {
    setModalOpen(false);
    modalRoot.style.display = "none";
  };

  const productsList = info.items?.products.map((product, idx) => (
    <li className={styles.modalProductsItem} key={product._id}>
      {product.title.ua}
    </li>
  ));

  return (
    <>
      <CalculatorСalorieForm
        title={"Прорахуй свою добову норму калорій зараз"}
        onChange={onChange}
      />
      {info.loading ? (
        <Loader />
      ) : (
        !isModalOpen || (
          <Modal closeModal={closeModal}>
            <div className={styles.modalMainBlock}>
              <div className={styles.modalCloseBtnBar}>
                <Button
                  className={styles.modalCloseBtn}
                  btnText={
                    <>
                      <CloseModalIconSmall
                        className={styles.modalCloseModalIconSmall}
                      />
                      <CloseModalIconCommon
                        className={styles.modalCloseModalIconCommon}
                      />
                    </>
                  }
                  onClickBtn={closeModal}
                  type="button"
                />
              </div>
              <div className={styles.modalContentBlock}>
                <h2 className={styles.modalMainTitle}>
                  Ваша рекомендована добова норма калорій становить
                </h2>
                <p className={styles.modalCaloriesNum}>
                  {info.items.calories}
                  <span className={styles.modalCaloriesText}> ккал</span>
                </p>
                <h3 className={styles.modalListTitle}>
                  Продукти, які вам не варто вживати
                </h3>
                <ol className={styles.modalProductsList}>{productsList}</ol>
                <Link
                  className={styles.modalContinueLink}
                  onClick={closeModal}
                  to="/signup"
                >
                  Почати худнути
                </Link>
              </div>
            </div>
          </Modal>
        )
      )}
    </>
  );
};

export default DailyCaloriesForm;
