import Logo from "./Logo";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <Logo className={styles.headerLogoLink} />
    </header>
  );
};

export default Header;
