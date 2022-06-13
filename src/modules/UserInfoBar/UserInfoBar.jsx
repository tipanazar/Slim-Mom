import UserInfo from "../../shared/components/UserInfo/UserInfo";

import styles from "./userInfoBar.module.scss";

const UserInfoBar = () => {
  return (
    <div className={styles.bar}>
      <UserInfo />
    </div>
  );
};

export default UserInfoBar;
