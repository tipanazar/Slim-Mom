import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/Button";

import style from "./Register.module.scss";

const RegisterConfirm = () => {

    const navigate = useNavigate();
    const GoToSignIn = () => {
    navigate('/signin');
};

    return (
        <div>
            <p>
            Для завершення реєстрації Вам надіслано листа. Перейдіть до своєї електронної пошти та підтвердіть реєстрацію. Після цього натисніть на кнопку "ВХІД".
        </p>
          <Button
            type="submit"
            onClickBtn={GoToSignIn}
            btnText="Вхід"
            className={style.button}
          />        
        </div>        
    );
  
};

export default RegisterConfirm;
