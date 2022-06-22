import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getUserName } from "../../../redux/userAccount/userAccount-selectors";
import { userOperations } from "../../../redux/userAccount/userAccount-operations";

import Button from "../Button";

import styles from "./userInfo.module.scss";

const UserInfo = () => {
  const userName = useSelector(getUserName, shallowEqual);
  const dispatch = useDispatch();
  return (
    <div className={styles.userInfoBlock}>
      <p className={styles.userName}>{userName}</p>
      <Button
        className={styles.logoutBtn}
        type="button"
        btnText="Вийти"
        onClickBtn={() => dispatch(userOperations.logoutUser())}
      />
    </div>
  );
};

export default UserInfo;
