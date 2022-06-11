import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/Button/Button";
import {getUser} from "../../../redux/userAccount/userAccount-selectors.js"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, shallowEqual } from 'react-redux'
const initialState = {
  login: "",
  password: "",
};
const Login = () => {
  const isLoading = useSelector(getUser, shallowEqual);
  const [userInfo, setUserInfo] = useState({
    ...initialState,
  });
  const submitForm = (e) => {
    e.preventDefault();
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
    <div>
      <h1>ВХІД</h1>
      <form action="submit" onSubmit={submitForm}>
        <Input
          name="login"
          onType={handleChange}
          value={userInfo.login}
        ></Input>
        <Input
          name="password"
          onType={handleChange}
          value={userInfo.password}
        ></Input>
        <Button btnText="Вхід" className="dfsdf" type="submit" />
        <Link to="/signup">Реєстрація</Link>
      </form>
    </div>
  );
};

export default Login;
