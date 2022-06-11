import { useEffect } from "react";

// import { useDispatch } from "react-redux";
// import { userOperations } from "../redux/userAccount/userAccount-operations";

import Routes from "./Routes";

import "../sass/main.scss";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userOperations.getCurrentUser());
  // }, [dispatch]);
  return <Routes />;
}

export default App;
