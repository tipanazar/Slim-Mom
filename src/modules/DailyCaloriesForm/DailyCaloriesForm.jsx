import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CalculatorСalorieForm from "../CalculatorСalorieForm";
import Modal from "../../shared/components/Modal";
import Button from "../../shared/components/Button";
import SvgBtn from "./SvgComponents/SvgBtn";
import SvgClose from "./SvgComponents/SvgClose";
import styles from "./dailyCaloriesForm.module.scss";

import { getCaloriesAndProducts } from "../../shared/api/products"; 
import Loader from "../../shared/components/Loader";

const modalRoot = document.querySelector("#modalRoot");



const DailyCaloriesForm = () => {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState({
    items: null,
    loading: false,
    error: null
  })

  const [isModalOpen, setModalOpen] = useState(false); // Поставить, "true" что бы по умолчанию была открыта
  

  useEffect(()=>{
    if(!data){
      return;
    }
    const fetchInfo = async () => {
      try {
        setInfo(prevData => ({
          ...prevData,
          loading: true,
        }))
        const result = await getCaloriesAndProducts(data, data.bloodType);
        setInfo({
          items: {...result},
          loading: false,
          error: null
        });
        setModalOpen(true);
      } catch (err) {
        setInfo({
          items: null,
          loading: false,
          error: err
        })
      }
    };
    fetchInfo();
  }, [data])
  const onChange = (data) => {
    setData(data);
  };



  isModalOpen
    ? (modalRoot.style.display = "flex")
    : (modalRoot.style.display = "none");

  const closeModal = () => {
    setModalOpen(false);
  };

  const productsList = info.items?.products.map((product, idx)=> <li className={styles.productText} key={product._id}> {`${idx+1}.`} {product.title.ua}</li>)

  return (
    <>
      <CalculatorСalorieForm
        title={"Прорахуй свою добову норму калорій зараз"}
        onChange={onChange}
      />
      {info.loading ? <Loader/> : !isModalOpen || (
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
                      {info.items.calories}
                    <span className={styles.modalCalorySpan}> ккал</span>
                  </p>
                </div>
                <div className={styles.products}>
                  <p className={styles.productsTitle}>
                    Продукти, які вам не варто вживати
                  </p>
                  <ul className={styles.modalList}>
                    {productsList}
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
