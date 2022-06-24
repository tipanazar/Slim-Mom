import { useState } from "react";
import { useSelector } from "react-redux";
import DiaryProductsListItem from "../DiaryProductsListItem";
import { useDevice } from "../../shared/hooks/useDevice";

import Modal from "../../shared/components/Modal";
import AddProductForm from "../DiaryAddProductForm/AddProductForm";

import { getUserDailyProducts } from "../../redux/products/products-selectors";
import sprite from "../../images/icons/symbol-defs.svg";

import styles from "./diaryProductsList.module.scss";

const modalRoot = document.querySelector("#modalRoot");

const DiaryProductsList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { isMobileDevice } = useDevice();
  const userDailyProducts = useSelector(getUserDailyProducts);

  isModalOpen
    ? (modalRoot.style.display = "flex")
    : (modalRoot.style.display = "none");

  const onCloseModal = () => {
    setModalOpen(false);
  };
  const onOpenModal = () => {
    setModalOpen(true);
  };
  const elements = userDailyProducts.map((product) => {
    return <DiaryProductsListItem key={product._id} product={product} />;
  });
  return (
    <div className={styles.wrapper}>
      <ul className={styles.listProducts}>{elements}</ul>
      {isMobileDevice && (
        <button onClick={onOpenModal} className={styles.button} type="submit">
          <svg className={styles.svg}>
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </button>
      )}
      {isModalOpen && (
        <Modal closeModal={onCloseModal}>
          <div className={styles.addFormModal}>
            <AddProductForm closeModal={onCloseModal} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DiaryProductsList;
