import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = (props) => {

const [input, setInput] = useState("Enter your information");

  return ( 
  
  <input 
  type="text" 
  className={`${styles.input} `}
  value={props.setInput}
  name={props.inputName}
  onChange={props.onChange}
   ></input>
  );
}

 Input.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Input;