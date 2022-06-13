import { useState } from "react";

import Modal from "../../shared/components/Modal";
import SvgBtn from "./SvgComponents/SvgBtn";
import SvgClose from "./SvgComponents/SvgClose";

import styles from "./dailyCaloriesForm.module.scss";

const modalRoot = document.querySelector("#modalRoot");

const DailyCaloriesForm = () => {
  const [value, setValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = ({ target: { value } }) => setValue(value);

  // !isModalOpen
  //   ? (modalRoot.style.display = "block")
  //   : (modalRoot.style.display = "none");
  // modalRoot.style.backgroundColor = "rgba(0,0,0,0)";

  // modalRoot.style.display = "block";
  modalRoot.style.backgroundColor = "rgba(33, 33, 33, 0.12)";

  const closeBackdrop = () => {
    // !isModalOpen
    modalRoot.style.display = "none";
    //   : (modalRoot.style.display = "none");
    // modalRoot.style.backgroundColor = "rgba(0,0,0,0)";
  };

  return (<></>
    // <Modal>
    //   <div className={styles.modalWindow}>
    //     <div className={styles.modalLogo} onClick={closeBackdrop}>
    //       <div className={styles.modalContainer}>
    //         <button className={styles.modalBtn}>
    //           <SvgBtn className={styles.iconBtn} />
    //         </button>
    //       </div>
    //     </div>
    //     <div className={styles.modalWrapper}>
    //       <h2 className={styles.modalTitle}>
    //         Ваша рекомендована добова норма калорій становить
    //       </h2>
    //       <SvgClose onClick={closeBackdrop} className={styles.iconClose} />
    //       <p className={styles.modalCalory}>
    //         2280 <span className={styles.modalCalorySpan}>kkal</span>
    //       </p>

    //       <div className={styles.products}>
    //         <input
    //           className={styles.textInput}
    //           name="filter"
    //           type="text"
    //           value={value}
    //           onChange={handleChange}
    //         />
    //         <p className={styles.productsTitle}>
    //           Продукти, які вам не варто вживати
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </Modal>
  );
};

export default DailyCaloriesForm;
