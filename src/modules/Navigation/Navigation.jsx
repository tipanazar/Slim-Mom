import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import { getIsLogin } from "../../redux/userAccount/userAccount-selectors";

import styles from "./navigation.module.scss";

const linkClassName = ({ isActive }) =>
  isActive ? styles.activeLink : styles.inactiveLink;

const Navigation = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
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
          <NavLink className={linkClassName} to="/diary">
            Щоденник
          </NavLink>
          <NavLink className={linkClassName} to="/calculator">
            Калькулятор
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
