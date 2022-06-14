import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/Button/Button";
import {
  getLoading,
  getError,
} from "../../../redux/userAccount/userAccount-selectors.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  console.log(error);

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
    <div>
      <h1>ВХІД</h1>
      <form action="submit" onSubmit={submitForm}>
        <Input
          name="email"
          onType={handleChange}
          value={userInfo.email}
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
