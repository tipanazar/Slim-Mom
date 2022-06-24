import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getError } from "../../../redux/userAccount/userAccount-selectors.js";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";

import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, Snackbar } from "@mui/material";
import ButtonComp from "../../../shared/components/Button/Button";

import styles from "./login.module.scss";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShow] = useState(false);
  const [verification, setVerification] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [userInfo, setUserInfo] = useState({
    ...initialState,
  });
  const [state] = useState({
    vertical: "top",
    horizontal: "center",
  });
  const error = useSelector(getError, shallowEqual);

  const submitForm = (e) => {
    e.preventDefault();
    if (validateEmail(userInfo.email)) {
      setShowModal(true);
      return dispatch(userOperations.loginUser(userInfo));
    }
    setVerification(true);
  };

  const resendVerification = () => {
    dispatch(userOperations.resendVerification(userInfo.email));
  };

  const InputLabelStyled = styled(InputLabel)`
    font-family: "Verdana";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
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

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    width: "95vw",
    maxWidth: "max-content",
    height: "auto",
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
        {!showModal || (
          <Modal
            disableAutoFocus={true}
            open={error === "Верифікуйте ваш Email"}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Ви не верифікували свій Email
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 1, mb: 2, fontSize: 16 }}
              >
                Надіслати повторно листа на "{userInfo.email}"?
              </Typography>

              <div className={styles.buttonwraper}>
                <ButtonColor
                  type="button"
                  onClick={resendVerification}
                  style={{ marginTop: 10, marginRight: 0 }}
                >
                  Так
                </ButtonColor>
                <ButtonColor
                  type="button"
                  onClick={closeModal}
                  style={{ marginTop: 10, marginRight: 0 }}
                >
                  Ні
                </ButtonColor>
              </div>
            </Box>
          </Modal>
        )}
        {!verification || (
          <Snackbar
            anchorOrigin={{ horizontal, vertical }}
            open={verification}
            autoHideDuration={6000}
            onClose={closeModal}
          >
            <Alert severity="error" sx={{ width: "100%" }} onClose={closeModal}>
              Введіть email с равликом(@) та доменом
            </Alert>
          </Snackbar>
        )}

        {!showModal || (
          <Snackbar
            anchorOrigin={{ horizontal, vertical }}
            open={error !== null && error !== "Верифікуйте ваш Email"}
            autoHideDuration={60000}
            onClose={closeModal}
          >
            <Alert severity="error" sx={{ width: "100%" }} onClose={closeModal}>
              {error}
            </Alert>
          </Snackbar>
        )}
        <form action="submit" onSubmit={submitForm} className={styles.form}>
          <h1 className={styles.header}>ВХІД</h1>

          <div className={styles.inputWrapper}>
            <FormControl
              sx={{ m: 0, width: "29ch" }}
              variant="standard"
              color={validateEmail(userInfo.email) ? "warning" : "error"}
            >
              <InputLabelStyled htmlFor="Login" className="InputLabel">
                Email
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
            <FormControl
              sx={{ m: 0, width: "29ch" }}
              variant="standard"
              color={userInfo.password.length > 5 ? "warning" : "error"}
            >
              <InputLabelStyled htmlFor="password">Пароль</InputLabelStyled>

              <Input
                required
                color={userInfo.password.length > 5 ? "warning" : "error"}
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
          </div>

          {userInfo.email.length > 5 && userInfo.password.length > 5 ? (
            <div className={styles.buttonMobile}>
              <ButtonColor type="submit">Логін</ButtonColor>
            </div>
          ) : (
            <ButtonComp
              type="button"
              btnText="Логін"
              className={styles.disabledBtn}
              isDisabled={true}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
