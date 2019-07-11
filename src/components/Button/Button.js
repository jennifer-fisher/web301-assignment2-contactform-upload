import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {

  const { color, handleClick } = props;

  return ( <button 
  type="button" 
  className={`${styles.button} ${styles[color]}`} 
  onClick={handleClick}
  onMouseOver={props.onMouseOver}
  onMouseOut={props.onMouseOut}
   >{props.buttonName}</button>
  
   );
}

Button.propTypes = {
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
}

export default Button;