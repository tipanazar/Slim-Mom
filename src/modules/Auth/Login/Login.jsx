import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getError } from "../../../redux/userAccount/userAccount-selectors.js";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";
// import Input from "../../../shared/components/Input/Input";
import Input from '@mui/material/Input';

import Button from "../../../shared/components/Button/Button";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import styles from "./login.module.scss";
import { Alert, Snackbar } from "@mui/material";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError, shallowEqual);
  const [showPassword, setShow] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [userInfo, setUserInfo] = useState({
    ...initialState,
  });
  const [state] = useState({
    vertical: "top",
    horizontal: "center",
  });
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(userOperations.loginUser(userInfo));
    setShowModal(true);
    console.log(userInfo);
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleChange1 = (prop) => (event) => {
    setUserInfo({ ...userInfo, [prop]: event.target.value });
  };
  const changePassword = () => {
    setShow((prev) => (prev = !prev));
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const { vertical, horizontal } = state;

  return (
    <>
      <div className={styles.wrapper}>
        {showModal ? (
          <Snackbar
            anchorOrigin={{ horizontal, vertical }}
            open={Boolean(error)}
            autoHideDuration={6000}
            onClose={closeModal}
          >
            <Alert severity="error" sx={{ width: "100%" }} onClose={closeModal}>
              {error}
            </Alert>
          </Snackbar>
        ) : (
          ""
        )}

        <h1 className={styles.header}>ВХІД</h1>
        <form action="submit" onSubmit={submitForm}>
          
          <div className={styles.inputWrapper}>
            {/* <label className={styles.paragrahp}>
              Логін
              <Input
                className={styles.input}
                name="email"
                onType={handleChange}
                value={userInfo.email}
                required
              ></Input>
            </label> */}
            <InputLabel htmlFor="Login">Login</InputLabel>
            <Input
              fullWidth
              id="Login"
              value={userInfo.email}
              onChange={handleChange1("email")}
              label="Login"
            />
            {/* <label className={styles.paragrahpSecond}>
              Пароль
              <Input
                className={styles.input}
                name="password"
                onType={handleChange}
                value={userInfo.password}
                required
                type={showPassword ? "password" : "text"}
              ></Input>
            </label> */}
            <div className={styles.input}>
            <InputLabel htmlFor="password">Password</InputLabel>

            <Input
              fullWidth
              label="password"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={userInfo.password}
              onChange={handleChange1("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={changePassword}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            </div>
          </div>

          <div className={styles.wrapperButtons}>
            <Button btnText="Вхід" type="submit" className={styles.button} />
            <Link to="/signup" className={styles.link}>
              Реєстрація
            </Link>
          </div>
        </form>
        {/* <Button
          className={styles.hide}
          btnText={showPassword ? "показати" : "приховати"}
          onClickBtn={changePassword}
          type="button"
        ></Button> */}
      </div>
    </>
  );
};

export default Login;
