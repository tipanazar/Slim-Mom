import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { initialState } from "./initialState";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";

import style from './Register.module.scss';

const Register = () => {

    const [form, setForm] = useState({ ...initialState });
    const { userName, email, password, passwordConfirmation } = form;

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            alert("Введені паролі не співпадають!");
            return;
        };
        console.log(userName, email, password);      
    };
    
    const handleChange = useCallback(( target ) => {        
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

    return (
    <div className={style.form_wrapper}>
         <h2 className={style.form_title}>Реєстрація</h2>
         <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.inputs_wrapper}>
                    <Input                       
                        name="userName"          
                        value={form.userName}
                        type="text"
                        placeholder="Ім'я *"                        
                        onType={handleChange}
                        className={style.input}
                        required                        
                    />
                    <Input
                        name="email"
                        value={form.email}
                        type="email"
                        placeholder="Електронна адреса *"
                        onType={handleChange}
                        className={style.input}
                        required
                    />
                    <Input
                        name="password"
                        value={form.password}
                        type="password"
                        placeholder="Пароль *"
                        onType={handleChange}
                        className={style.input}
                        required
                    />
                    <Input
                        name="passwordConfirmation"
                        value={form.passwordConfirmation}
                        type="password"
                        placeholder="Повторіть пароль *"
                        onType={handleChange}
                        className={style.input}
                        required
                    />
                    
            </div>
            <div className={style.btn_wrapper}>

               <Button 
               type="button"
               onClickBtn={() => navigate('/LoginPage')}
               btnText="Вхід"
               className={style.button}
               /> 

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