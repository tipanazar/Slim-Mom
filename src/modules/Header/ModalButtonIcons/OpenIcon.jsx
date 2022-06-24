import PropTypes from "prop-types";

const OpenIcon = ({ className, color }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" className={className}>
      <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" fill={color} />
    </svg>
  );
};

export default OpenIcon;

OpenIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};
