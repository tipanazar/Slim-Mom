import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/Button/Button";
import {
  getGlobalStore
} from "../../../redux/userAccount/userAccount-selectors.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";
import style from "./login.module.scss"
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  // console.log(error);

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
    <div className={style.wrapper}>
      <h1 className={style.header}>ВХІД</h1>
      <form action="submit" onSubmit={submitForm}>
        <div className={style.inputWrapper}>
          <p className={style.paragrahp}>Логін</p>
        <Input
          className={style.input}
          name="email"
          onType={handleChange}
          value={userInfo.email}
        ></Input>
        <p className={style.paragrahpSecond}>Пароль</p>
        <Input
        className={style.input}
          name="password"
          onType={handleChange}
          value={userInfo.password}
        ></Input>
        </div>
        <div className={style.wrapperButtons}>
        <Button btnText="Вхід"  type="submit" className={style.button} />
        <Link to="/signup" className={style.link}>Реєстрація</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
