import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { getIsLogin } from "../../redux/userAccount/userAccount-selectors";

import Logo from "./Logo";
import Navigation from "../../shared/components/Navigation/Navigation";
import Button from "../../shared/components/Button";
import UserInfo from "../../shared/components/UserInfo/UserInfo";
import Modal from "../../shared/components/Modal";
import { OpenIcon, CloseIcon } from "./ModalButtonIcons";

import styles from "./header.module.scss";

const modalRoot = document.querySelector("#modalRoot");

const Header = () => {
  let visibility = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const isLogin = useSelector(getIsLogin, shallowEqual);

  isModalOpen && isLogin
    ? (modalRoot.style.display = "block")
    : (modalRoot.style.display = "none");

  isModalOpen ? (modalRoot.style.top = "84px") : (modalRoot.style.top = 0);

  if (!isLogin) {
    visibility = { display: "block" };
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLinksBlock}>
        <Logo
          logoLinkClassName={styles.logoLink}
          logoBigClassName={styles.logoBig}
          logoMediumClassName={styles.logoMed}
          logoSmallClassName={styles.logoSmall}
          logoImg={styles.logoImg}
          closeModal={closeModal}
        />
        <div className={styles.navigationBlock} style={visibility}>
          <Navigation isVisible={true} />
        </div>
      </div>

      {!isLogin || (
        <>
          <div className={styles.userInfoBlock}>
            <UserInfo />
          </div>
          <Button
            className={styles.modalButton}
            btnText={isModalOpen ? <CloseIcon color={"black"} /> : <OpenIcon />}
            type="button"
            onClickBtn={() => setModalOpen((prevState) => !prevState)}
          />
        </>
      )}

      {!isModalOpen || (
        <Modal closeModal={closeModal}>
          <div className={styles.modalBlock}>
            <Navigation closeModal={closeModal} />
          </div>
        </Modal>
      )}
    </header>
  );
};

export default Header;
