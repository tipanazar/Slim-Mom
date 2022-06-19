import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {  getError , getToken, getVerify, } from "../../../redux/userAccount/userAccount-selectors.js";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";
import Input from "@mui/material/Input";

import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

import Button from "@mui/material/Button";

// import Button from "../../../shared/components/Button/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import styles from "./login.module.scss";
import { Alert, Snackbar,  } from "@mui/material";

const initialState = {
  email: "",
  password: "",
};
  
const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError, shallowEqual);
  const [showPassword, setShow] = useState(false);
  const [verification,setVerification]=useState(false)
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
    if (validateEmail(userInfo.email)) {
      setShowModal(true);
      return dispatch(userOperations.loginUser(userInfo));
    }
    setVerification(true)

  };

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setUserInfo((prevForm) => ({
  //     ...prevForm,
  //     [name]: value,
  //   }));
  // };

  const emailIsVerify=()=>{
    dispatch(userOperations.verifyUser(userInfo.email ));
  }
  const InputLabelStyled = styled(InputLabel)`
    font-family: "Verdana";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    :hover {
      color: #fc842d;
    }
  `;
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const ButtonColor = styled(Button)({
    boxShadow: "0px 4px 10px rgba(252, 132, 45, 0.5)",
    textTransform: "none",
    fontSize: 14,
    border: "0px solid",
    borderRadius: "30px",
    lineHeight: 1.5,
    backgroundColor: "#fc842d",
    fontWeight: 700,
    letterSpacing: 0.82,
    width: 182,
    height: 44,
    color: "#ffffff",
    marginTop: 60,
    marginRight: 32,

    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const handleChange1 = (prop) => (event) => {
    setUserInfo({ ...userInfo, [prop]: event.target.value });
  };
  const changePassword = () => {
    setShow((prev) => (prev = !prev));
  };
  const closeModal = () => {
    setShowModal(false);
    setVerification(false);
  };
  const { vertical, horizontal } = state;
  return (
    <>
      <div className={styles.wrapper}>
      {verification ?(
          <Snackbar
            anchorOrigin={{ horizontal, vertical }}
            open={verification}
            autoHideDuration={6000}
            onClose={closeModal}
          >
            <Alert severity="error" sx={{ width: "100%" }} onClose={closeModal}>
              Введіть email с равликом(@) та доменом
            </Alert>
          </Snackbar>):""}
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
            <FormControl
              sx={{ m: 0, width: "25ch" }}
              variant="standard"
              color={validateEmail(userInfo.email) ? "warning" : "error"}
            >
              <InputLabelStyled htmlFor="Login" className="InputLabel">
                введіть Email
              </InputLabelStyled>
              <Input
                required
                style={{ marginBottom: 40 }}
                color={validateEmail(userInfo.email) ? "warning" : "error"}
                fullWidth
                id="Login"
                value={userInfo.email}
                onChange={handleChange1("email")}
              />
            </FormControl>

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
            <FormControl
              sx={{ m: 0, width: "25ch" }}
              variant="standard"
              color={userInfo.password.length>5 ? "warning" : "error"}
            >
              <InputLabelStyled htmlFor="password">Пароль</InputLabelStyled>

              <Input
                required
                color={userInfo.password.length>5 ? "warning" : "error"}
                fullWidth
                id="password"
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
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>{" "}
          <div className={styles.wrapperButtons}>
            {userInfo.email.length >= 5 && userInfo.password.length >= 5 ? (
              <ButtonColor type="submit">Логін</ButtonColor>
            ) : (
              <ButtonColor disabled type="submit">
                Логін
              </ButtonColor>
            )}
            <ButtonColor type="button" onClick={emailIsVerify}>Надіслати повторно верифікацію Email</ButtonColor>
            {/* <Link to="/signup" className={styles.link}>
              Реєстрація
            </Link> */}
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
