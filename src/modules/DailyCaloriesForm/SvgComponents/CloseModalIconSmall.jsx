import PropTypes from "prop-types";

const CloseModalIconSmall = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="15px"
      height="15px"
      viewBox="0 0 512 512"
      fill="none"
    >
      <path
        d="M80 175.5-.5 256 80 336.5c44.3 44.3 81 80.5 81.5 80.5.6 0 9.3-8.3 19.5-18.5l18.5-18.5-48.5-48.5-48.5-48.5H512V121h-54v108H102.5l48.5-48.5 48.5-48.5-18.5-18.5C170.8 103.3 162.1 95 161.5 95c-.5 0-37.2 36.2-81.5 80.5z"
        fill={color || "#000"}
        stroke="none"
      />
    </svg>
  );
};

export default CloseModalIconSmall;

CloseModalIconSmall.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
