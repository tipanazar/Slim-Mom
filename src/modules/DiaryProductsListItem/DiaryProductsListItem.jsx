import { useDispatch, useSelector } from "react-redux";

import prouctsOperations from "../../redux/products/products-operations";
import { getPickedDate } from "../../redux/products/products-selectors";

import styles from "./diaryProductsListItem.module.scss";
import sprite from "../../images/icons/symbol-defs.svg";

const DiaryProductsListItem = ({ product }) => {
  const dispatch = useDispatch();

  const date = useSelector(getPickedDate);

  const { _id, title, weight, calories } = product;

  const deleteProduct = () =>
    dispatch(prouctsOperations.deleteProduct({ _id, date }));

  return (
    <li className={styles.item}>
      <span className={styles.prodName}>{title}</span>
      <span className={styles.prodWeight}>{weight} г</span>
      <span className={styles.prodKCal}>{Math.round(calories)} кал</span>
      <button type="button" className={styles.btn} onClick={deleteProduct}>
        <svg className={styles.icon}>
          <use href={sprite + "#icon-cross"} />
        </svg>
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
