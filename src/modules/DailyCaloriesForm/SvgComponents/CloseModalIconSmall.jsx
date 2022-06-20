import PropTypes from "prop-types";

const CloseModalIconSmall = ({ color, className }) => {
  return (
    // <svg
    //   className={className}
    //   width="15"
    //   height="9"
    //   viewBox="0 0 12 9"
    //   fill="none"
    // >
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
      <path
        d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  );
};

export default CloseModalIconSmall;

CloseModalIconSmall.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
