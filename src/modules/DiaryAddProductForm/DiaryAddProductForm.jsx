import { useDevice } from "../../shared/hooks/useDevice";

import AddProductForm from "./AddProductForm";
import styles from "./diaryAddProductForm.module.scss";
const DiaryAddProductForm = () => {
  const { isTabletAndDesktop } = useDevice();

  return (
    <div className={styles.wrapper}>
      {isTabletAndDesktop && <AddProductForm />}
    </div>
  );
};

export default DiaryAddProductForm;
