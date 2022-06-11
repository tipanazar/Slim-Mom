import React from 'react';

import styles from './Input.module.scss';

const Input = ({ ...props }) => {
   const { onChange } = props;

   return (
      <input
         className={styles.input}
         {...props}
         required
         onChange={({ target }) => onChange(target)}
      />
   );
};

export default Input;