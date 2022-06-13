import { useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import { getIsLogin } from "../../../redux/userAccount/userAccount-selectors";

import styles from "./navigation.module.scss";

const linkClassName = ({ isActive }) =>
  isActive ? styles.activeLink : styles.inactiveLink;

const Navigation = ({ isVisible }) => {
  let visibility = useRef(null);
  const isLogin = useSelector(getIsLogin, shallowEqual);
  if (isVisible) {
    visibility = { display: "inline" };
  }
  return (
    <nav className={styles.navLinks}>
      {!isLogin ? (
        <>
          <NavLink className={linkClassName} to="/signin">
            Вхід
          </NavLink>
          <NavLink className={linkClassName} to="/signup">
            Реєстрація
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className={linkClassName} style={visibility} to="/diary">
            Щоденник
          </NavLink>
          <NavLink
            className={linkClassName}
            style={visibility}
            to="/calculator"
          >
            Калькулятор
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  isVisible: PropTypes.bool,
};
