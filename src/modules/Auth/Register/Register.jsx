// import { useState, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getError } from "../../../redux/userAccount/userAccount-selectors.js";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";
import { useNavigate } from "react-router-dom";

// import { initialState } from "./initialState";
// import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";

import style from "./Register.module.scss";

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const nameRegexp = /^[а-яА-ЯёЁa-zA-Z]+$/;

const Register = () => {

  const dispatch = useDispatch();
  const error = useSelector(getError, shallowEqual);
  !error || console.log(error);
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

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));   
    dispatch(userOperations.registerUser({
      name,
      email,
      password
    }));

    !error || console.log(error);

    navigate('/signup/confirmation');
    reset()
  };
  
  return (
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
                // value: "form.name",
                required: "Поле обов'язково для заповнення",
                pattern: {
                    value: nameRegexp,
                    message: 'Не допустимі символи!'
                },
                minLength: { value: 2, message: "Мінімальна кількість букв - 2!" },
                maxLength: { value: 16, message: "Максимальна кількість букв - 16!" }
            })}                      
            />           
          <div className={style.alert}>
            {errors?.name && <p>{errors?.name?.message }</p>}
          </div>

          
          <label htmlFor="mail" className={style.label}>
            Електронна пошта *
          </label>           
          <input
            id="mail"                          
              className={style.input}                
            {...register("email", {
                // value: "form.name",
                required: "Поле обов'язково для заповнення",
                pattern: {
                    value: emailRegexp,
                    message: 'Не допустимий формат, перевірте адресу!'
                },                
            })}                      
            />            
          <div className={style.alert}>
            {errors?.email && <p>{errors?.email?.message }</p>}
          </div>

          
          <label htmlFor="password" className={style.label}>
            Пароль *
          </label>           
          <input
            id="password"                      
              className={style.input}              
            {...register("password", {
                // value: "form.name",
                required: "Поле обов'язково для заповнення",                
                minLength: { value: 6, message: "Мінімальна кількість знаків - 6!" },
                maxLength: { value: 20, message: "Максимальна кількість знаків - 20!" }
            })}                      
            />            
          <div className={style.alert}>
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
          <div className={style.alert}>
            {errors?.passwordConfirmation && <p>{errors?.passwordConfirmation?.message}</p>}
            { password !== passwordConfirmation && <p className={style.alert}>Введені паролі не співпадають!</p>              
            }
          </div>          
        </div>
        <div className={style.btn_wrapper}>
          <Button
            type="submit"
            onClickBtn={handleSubmit}
            btnText="Реєстрація"
            className={style.button}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
