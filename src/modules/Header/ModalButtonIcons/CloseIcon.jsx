import PropTypes from "prop-types";

const CloseIcon = ({ className, color }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className={className}>
      <path d="m6 6 12 12M6 18 18 6" stroke={color} stroke-width="2" />
    </svg>
  );
};

export default CloseIcon;

CloseIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};
