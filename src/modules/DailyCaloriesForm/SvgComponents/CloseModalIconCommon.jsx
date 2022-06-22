import PropTypes from "prop-types";

const CloseModalIconCommon = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={color}
    >
      <path
        d="M15.8333 5.3415L14.6583 4.1665L9.99998 8.82484L5.34164 4.1665L4.16664 5.3415L8.82498 9.99984L4.16664 14.6582L5.34164 15.8332L9.99998 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z"
        fill={color || "#000"}
      />
    </svg>
  );
};

export default CloseModalIconCommon;

CloseModalIconCommon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
