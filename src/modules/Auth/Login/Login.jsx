import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getError } from "../../../redux/userAccount/userAccount-selectors.js";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";

import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/Button/Button";

import styles from "./login.module.scss";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError, shallowEqual);
  !error || console.log(error);

  const [userInfo, setUserInfo] = useState({
    ...initialState,
  });
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(userOperations.loginUser(userInfo));
    setUserInfo(initialState);
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>ВХІД</h1>
      <form action="submit" onSubmit={submitForm}>
        <div className={styles.inputWrapper}>
          <p className={styles.paragrahp}>Логін</p>
          <Input
            className={styles.input}
            name="email"
            onType={handleChange}
            value={userInfo.email}
          ></Input>
          <p className={styles.paragrahpSecond}>Пароль</p>
          <Input
            className={styles.input}
            name="password"
            onType={handleChange}
            value={userInfo.password}
          ></Input>
        </div>
        <div className={styles.wrapperButtons}>
          <Button btnText="Вхід" type="submit" className={styles.button} />
          <Link to="/signup" className={styles.link}>
            Реєстрація
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
