import { useEffect } from "react";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { userOperations } from "../redux/userAccount/userAccount-operations.js";
import { getToken } from "../redux/userAccount/userAccount-selectors.js";
import Routes from "./Routes";

import "../sass/main.scss";

function App() {
  const dispatch = useDispatch();
  const userToken = useSelector(getToken, shallowEqual);
  useEffect(() => {
    dispatch(userOperations.getCurrentUser(userToken));
  });

  return <Routes />;
}

export default App;
