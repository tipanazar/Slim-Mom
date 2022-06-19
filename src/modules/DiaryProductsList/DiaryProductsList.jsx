import { useSelector, useDispatch } from 'react-redux';
import DiaryProductsListItem from '../DiaryProductsListItem';
import { useDevice } from '../../shared/hooks/useDevice';

import { getUserDailyProducts } from '../../redux/products/products-selectors';

import styles from "./diaryProductsList.module.scss";

const DiaryProductsList = () => {
  const { isMobileDevice } = useDevice();
  const userDailyProducts = useSelector(getUserDailyProducts);

  return <div>
    <ul className={styles.listProducts}>
        {userDailyProducts.map(product => (
          <DiaryProductsListItem key={product.id} product={product} />
        ))}
      </ul>
      {isMobileDevice && (
        <button onClick={onOpenModal} className={styles.button} type="submit">
          <svg className={styles.svg}>
            <use href={sprite + '#icon-plus'}></use>
          </svg>
        </button>
      )}
  </div>;
};

export default DiaryProductsList;
