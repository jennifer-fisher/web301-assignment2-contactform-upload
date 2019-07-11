import React from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

const Textarea = (props) => {

  return <textarea 
  className={`${styles.textarea} `}
  rows={props.rows}
  cols={props.cols}
  onChange={props.onChange}
   ></textarea>;
};

Textarea.propTypes = {
    onChange: PropTypes.func,
    rows: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
    cols: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Textarea;