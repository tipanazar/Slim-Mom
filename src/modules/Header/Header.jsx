import { useState } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { getIsLogin } from "../../redux/userAccount/userAccount-selectors";

import Button from "../../shared/components/Button";

import Logo from "./Logo";

import styles from "./header.module.scss";

const linkClassName = ({ isActive }) =>
  isActive ? styles.activeLink : styles.inactiveLink;

const Header = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
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
        <nav className={styles.authLinks}>
          <NavLink className={linkClassName} to="/signin">
            Вхід
          </NavLink>
          <NavLink className={linkClassName} to="/signup">
            Реєстрація
          </NavLink>
        </nav>
      </div>
      {!isLogin || <Button className={styles.modalButton} btnText="btn" type="button" />}
    </header>
  );
};

export default Header;
