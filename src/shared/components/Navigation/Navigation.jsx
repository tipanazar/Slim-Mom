import { useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import { getIsLogin } from "../../../redux/userAccount/userAccount-selectors";

import styles from "./navigation.module.scss";

const navLinkClassName = ({ isActive }) =>
  isActive ? styles.activeNavLink : styles.inactiveNavLink;

const authLinkClassName = ({ isActive }) =>
  isActive ? styles.activeAuthLink : styles.inactiveAuthLink;

const Navigation = ({ isVisible }) => {
  let visibility = useRef(null);
  let linksDisplay = useRef(null);
  const isLogin = useSelector(getIsLogin, shallowEqual);

  const navBlockClassName = () => {
    return isLogin ? styles.navLinksBlock : styles.authLinksBlock;
  };

  if (isVisible) {
    visibility = { display: "inline" };
  }
  return (
    <nav className={navBlockClassName()} style={linksDisplay}>
      {!isLogin ? (
        <>
          <NavLink className={authLinkClassName} to="/signin">
            Вхід
          </NavLink>
          <NavLink className={authLinkClassName} to="/signup">
            Реєстрація
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className={navLinkClassName} style={visibility} to="/diary">
            Щоденник
          </NavLink>
          <NavLink
            className={navLinkClassName}
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
