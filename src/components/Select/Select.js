import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';
import { labeledStatement } from '@babel/types';

const Select = (props) => {

  return ( 
  
  <select className={`${styles.select} `}>
    <option>Rose</option>
    <option>Tulip</option>
    <option>Pansy</option>
    <option>Other</option>

  </select>

  );

}

Select.propTypes = {
  onChange: PropTypes.func,
  topics: PropTypes.string,
  id: PropTypes.number,
}

export default Select;