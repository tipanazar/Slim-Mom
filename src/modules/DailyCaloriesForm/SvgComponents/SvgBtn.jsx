import PropTypes from "prop-types";

const SvgBtn = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="10"
      viewBox="0 0 20 20"
      fill={color}
    >
      <path
        d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
        stroke="#000000"
        strokeWidth="2"
      />
    </svg>
  );
};

export default SvgBtn;

SvgBtn.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
