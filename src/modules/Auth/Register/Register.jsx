import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getError, getUserName } from "../../../redux/userAccount/userAccount-selectors.js";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/Button";

import style from "./Register.module.scss";

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const nameRegexp = /^[а-яА-ЯёЁєЄґҐїЇіІ' a-zA-Z]+$/;


const Register = () => {

  const [isActivReg, setActivReg] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const dispatch = useDispatch();
  const error = useSelector(getError, shallowEqual);
  
  const userName = useSelector(getUserName, shallowEqual);  
  
  const navigate = useNavigate();

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
    watch
  } = useForm({
    mode: "all"
  });

  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const passwordConfirmation = watch("passwordConfirmation");

  let MessageToUser = null;  
  let ButtonAfterRegister = null;  

  const MessageConfirmation = <p className={style.message}>Для завершення реєстрації Вам надіслано листа. Перейдіть до своєї електронної пошти {userEmail} та <span className={style.form_title}>підтвердіть реєстрацію</span>. Після цього залогіньтеся.</p>

  const MessageError = <p className={style.alert} >{error}. <span className={style.form_title}>Увійти?</span></p>

  const MessageNothing = <p className={style.alert} > Ой, щось пішло не так. <span className={style.form_title}>Спробуйте ще раз!</span></p>  
  
  const onButtonToSignin = () => {
    reset();
    setActivReg(true);  
    navigate('/signin');      
  };
  const onButtonToSignup = () => {
    reset();
    setActivReg(true);   
    navigate('/signup');     
  };
  
  const ButtonRegister = <Button
            type="submit"
            onClickBtn={handleSubmit}
            btnText="Реєстрація"
            className={style.button} />

  const ButtonToSignin = <Button
            type="button"
            onClickBtn={onButtonToSignin}
            btnText="Логін"
    className={style.button} />
  
  const ButtonToSignup = <Button
            type="button"
            onClickBtn={onButtonToSignup}
            btnText="Добре"
    className={style.button} />
  
    if (!isActivReg) {
       if (!error && !userName) {
        MessageToUser = MessageNothing;
        ButtonAfterRegister = ButtonToSignup;
      };
      if (error && !userName) {
        MessageToUser = MessageError;
        ButtonAfterRegister = ButtonToSignin;
      }; 
      if (!error && userName) {
        MessageToUser = MessageConfirmation;
        ButtonAfterRegister = ButtonToSignin;
      };
                
    } else {
      MessageToUser = null;
      ButtonAfterRegister = null;      
  }; 

  const onSubmit = (data) => {

    setActivReg(false);
    setUserEmail(email);    
    dispatch(userOperations.registerUser({
      name,
      email,
      password
    }));   
  };  
  
  return (
    <div className={style.wrapper}>
     <div className={style.form_wrapper}>
      <h2 className={style.form_title}>Реєстрація</h2>
      <form
        className={style.form}
        onSubmit={handleSubmit(onSubmit)}>
        
        <div className={style.inputs_wrapper}>

          <label htmlFor="name" className={style.label} >
            Ім'я *
          </label>   
            <input
              id="name"                   
              className={style.input}                      
            {...register("name", {                
                required: "Поле обов'язково для заповнення",
                pattern: {
                    value: nameRegexp,
                    message: 'Не допустимі символи!'
                },
                minLength: { value: 2, message: "Мінімальна кількість букв - 2!" },
                maxLength: { value: 16, message: "Максимальна кількість букв - 16!" }
            })}                      
            />           
          <div className={style.input_alert}>
            {errors?.name && <p>{errors?.name?.message }</p>}
          </div>

          
          <label htmlFor="mail" className={style.label}>
            Електронна пошта *
          </label>           
          <input
            id="mail"                          
              className={style.input}                
            {...register("email", {              
                required: "Поле обов'язково для заповнення",
                pattern: {
                    value: emailRegexp,
                    message: 'Не допустимий формат, перевірте адресу!'
                },                
            })}                      
            />            
          <div className={style.input_alert}>
            {errors?.email && <p>{errors?.email?.message }</p>}
          </div>

          
          <label htmlFor="password" className={style.label}>
            Пароль *
          </label>           
          <input
            id="password"                      
              className={style.input}              
            {...register("password", {               
                required: "Поле обов'язково для заповнення",                
                minLength: { value: 6, message: "Мінімальна кількість знаків - 6!" },
                maxLength: { value: 20, message: "Максимальна кількість знаків - 20!" }
            })}                      
            />            
          <div className={style.input_alert}>
            {errors?.password && <p>{errors?.password?.message }</p>}
          </div>


           <label htmlFor="passwordConfirmation" className={style.label}>
            Повторіть пароль *
           </label> 
          <input
            id="passwordConfirmation"                    
              className={style.input}             
            {...register("passwordConfirmation", {                
                required: "Поле обов'язково для заповнення",                
                minLength: { value: 6, message: "Мінімальна кількість знаків - 6!" },
                maxLength: { value: 20, message: "Максимальна кількість знаків - 20!" }
            })}                      
            />            
          <div className={style.input_alert}>
            {errors?.passwordConfirmation && <p>{errors?.passwordConfirmation?.message}</p>}
            { password !== passwordConfirmation && <p className={style.input_alert}>Введені паролі не співпадають!</p>              
            }
            { !isActivReg && MessageToUser }
          </div>          
        </div>
        <div className={style.btn_wrapper}>
          {!isActivReg && ButtonAfterRegister}
          {isActivReg && ButtonRegister}
          {/* <Button
            type="submit"
            onClickBtn={handleSubmit}
            btnText="Реєстрація"
            className={style.button}
          /> */}
        </div>
      </form>
    </div> 
    </div>
    
  );
};

export default Register;
