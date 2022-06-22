import { PropTypes } from "prop-types";

import styles from "./loader.module.scss";

const Loader = ({ backgrColor }) => {
  return (
    <div
      className={styles.ldsDualRing}
      style={{ backgroundColor: backgrColor }}
    ></div>
  );
};

export default Loader;

Loader.propTypes = {
  backgrColor: PropTypes.string,
};
