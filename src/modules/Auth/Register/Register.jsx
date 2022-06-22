import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getError,
  getUserName,
} from "../../../redux/userAccount/userAccount-selectors.js";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/Button";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import style from "./register.module.scss";

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const nameRegexp = /^[а-яА-ЯёЁєЄґҐїЇіІ' a-zA-Z]+$/;

const Register = () => {
  const [isActivReg, setActivReg] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(getError, shallowEqual);

  const userName = useSelector(getUserName, shallowEqual);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: "all",
  });

  const MessageConfirmation = (
    <p className={style.confirm_message}>
      Для завершення реєстрації Вам надіслано листа. Перейдіть до своєї
      електронної пошти {userEmail} та{" "}
      <span className={style.form_title}>підтвердіть реєстрацію</span>. Після
      цього залогіньтеся.
    </p>
  );

  const MessageError = (
    <p className={style.error_message}>
      {error}. <span className={style.form_title}>Увійти?</span>
    </p>
  );

  const MessageNothing = (
    <p className={style.error_message}>
      Ой, щось пішло не так.{" "}
      <span className={style.form_title}>Спробуйте ще раз !</span>
    </p>
  );

  const onButtonToSignin = () => {
    closeModal();
    reset();
    setActivReg(true);
    navigate("/signin");
  };
  const onButtonToSignup = () => {
    reset();
    setActivReg(true);
    navigate("/signup");
  };

  const ButtonToSignin = (
    <Button
      type="button"
      onClickBtn={onButtonToSignin}
      btnText="Увійти"
      className={style.button}
    />
  );

  const ButtonToSignup = (
    <Button
      type="button"
      onClickBtn={onButtonToSignup}
      btnText="Добре"
      className={style.button}
    />
  );

  const ButtonBackToSignup = (
    <Button
      type="button"
      onClickBtn={onButtonToSignup}
      btnText="До реєстрації"
      className={style.button}
    />
  );

  let MessageToUser = MessageNothing;
  let ButtonAfterRegister = ButtonToSignup;

  if (userName) {
    MessageToUser = MessageConfirmation;
    ButtonAfterRegister = ButtonToSignin;
  }
  if (error) {
    MessageToUser = MessageError;
    ButtonAfterRegister = ButtonToSignin;
  }

  const ButtonRegister = (
    <Button
      type="submit"
      onClickBtn={handleSubmit}
      btnText="Реєстрація"
      className={style.button}
    />
  );

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    width: "80vw",
    maxWidth: "max-content",
    height: "auto",
  };

  const closeModal = () => {
    setShowModal(false);
    reset();
    setActivReg(true);
  };

  const changeShowPassword1 = () => {
    setShowPassword1((prev) => (prev = !prev));
  };
  const changeShowPassword2 = () => {
    setShowPassword2((prev) => (prev = !prev));
  };

  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const passwordConfirmation = watch("passwordConfirmation");

  const onSubmit = (data) => {
    setTimeout(() => {
      setActivReg(false);
    }, 500);
    setUserEmail(email);
    dispatch(
      userOperations.registerUser({
        name,
        email,
        password,
      })
    );
    setShowModal(true);
  };

  return (
    <div className={style.wrapper}>
      {!showModal || (
        <Modal
          disableAutoFocus={true}
          open={!isActivReg}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {MessageToUser}
            </Typography>
            <div className={style.modal_btn_wrapper}>
              {ButtonAfterRegister}
              {error && ButtonBackToSignup}
            </div>
          </Box>
        </Modal>
      )}
      <div className={style.form_wrapper}>
        <h2 className={style.form_title}>Реєстрація</h2>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.inputs_wrapper}>
            <label htmlFor="name" className={style.label}>
              Ім'я *
            </label>
            <Input
              id="name"
              className={style.input}
              color={"warning"}
              fontSize={"14px"}
              {...register("name", {
                required: "Поле обов'язково для заповнення",
                pattern: {
                  value: nameRegexp,
                  message: "Не допустимі символи!",
                },
                minLength: {
                  value: 2,
                  message: "Мінімальна кількість букв - 2!",
                },
                maxLength: {
                  value: 16,
                  message: "Максимальна кількість букв - 16!",
                },
              })}
            />
            <div className={style.input_alert}>
              {errors?.name && <p>{errors?.name?.message}</p>}
            </div>

            <label htmlFor="mail" className={style.label}>
              Електронна пошта *
            </label>
            <Input
              id="mail"
              className={style.input}
              color={"warning"}
              {...register("email", {
                required: "Поле обов'язково для заповнення",
                pattern: {
                  value: emailRegexp,
                  message: "Не допустимий формат, перевірте адресу!",
                },
              })}
            />
            <div className={style.input_alert}>
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>

            <label htmlFor="password" className={style.label}>
              Пароль *
            </label>
            <Input
              id="password"
              className={style.input}
              type={showPassword1 ? "text" : "password"}
              color={"warning"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={changeShowPassword1}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    edge="end"
                  >
                    {showPassword1 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              {...register("password", {
                required: "Поле обов'язково для заповнення",
                minLength: {
                  value: 6,
                  message: "Мінімальна кількість знаків - 6!",
                },
                maxLength: {
                  value: 20,
                  message: "Максимальна кількість знаків - 20!",
                },
              })}
            />
            <div className={style.input_alert}>
              {errors?.password && <p>{errors?.password?.message}</p>}
            </div>

            <label htmlFor="passwordConfirmation" className={style.label}>
              Повторіть пароль *
            </label>
            <Input
              id="passwordConfirmation"
              className={style.input}
              color={"warning"}
              type={showPassword2 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={changeShowPassword2}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                    edge="end"
                  >
                    {showPassword2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              {...register("passwordConfirmation", {
                required: "Поле обов'язково для заповнення",
                minLength: {
                  value: 6,
                  message: "Мінімальна кількість знаків - 6!",
                },
                maxLength: {
                  value: 20,
                  message: "Максимальна кількість знаків - 20!",
                },
              })}
            />
            <div className={style.input_alert}>
              {errors?.passwordConfirmation && (
                <p>{errors?.passwordConfirmation?.message}</p>
              )}
              {password !== passwordConfirmation && (
                <p>Введені паролі не співпадають!</p>
              )}
            </div>
          </div>
          <div className={style.btn_wrapper}>
            {isActivReg && ButtonRegister}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
