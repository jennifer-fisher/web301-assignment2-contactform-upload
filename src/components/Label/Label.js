import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Label.module.css';

const Label = (props) => {

    return(
        <h2 className={`${styles.label} `}>{props.label}</h2>

    );
}

export default Label;
