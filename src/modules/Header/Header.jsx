import { useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { getIsLogin } from "../../redux/userAccount/userAccount-selectors";

import Logo from "./Logo";
import Navigation from "../../shared/components/Navigation/Navigation";
import Button from "../../shared/components/Button";
import UserInfo from "../../shared/components/UserInfo/UserInfo";

import styles from "./header.module.scss";

const Header = () => {
  let visibility = useRef(null);
  const isLogin = useSelector(getIsLogin, shallowEqual);

  if (!isLogin) {
    visibility = { display: "block" };
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerLinksBlock}>
        <Logo
          logoLinkClassName={styles.logoLink}
          logoBigClassName={styles.logoBig}
          logoMediumClassName={styles.logoMed}
          logoSmallClassName={styles.logoSmall}
          logoImg={styles.logoImg}
        />
        <div className={styles.navigationBlock} style={visibility}>
          <Navigation isVisible={true}/>
        </div>
      </div>

      {!isLogin || (
        <>
          <div className={styles.userInfoBlock}>
            <UserInfo />
          </div>
          <Button className={styles.modalButton} btnText="btn" type="button" />
        </>
      )}
    </header>
  );
};

export default Header;
