import React from 'react';
import styles from './Result.css';

export default (props) => {

  return (<div className={`${styles.comp}`}>
    <h4>BMI: {props.bmi ? props.bmi.toFixed(1) : '0' }</h4>
    <h4>{props.verdict(props.bmi)}</h4>
  </div>);
};
