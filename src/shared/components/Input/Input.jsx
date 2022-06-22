import { memo } from "react";

import PropTypes from "prop-types";

const Input = ({
  type,
  name,
  value,
  placeholder,
  required,
  onType,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onType}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onType: PropTypes.func,
};

export default memo(Input);
