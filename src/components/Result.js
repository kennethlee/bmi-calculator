import React from 'react';

export default (props) => {
  const { height, weight } = props;
  const BMI = (weight / ( height * height )) * 703;

  function verdict() {
    if (BMI < 18.5) {
      return 'You are underweight.';
    } else if (BMI > 18.5 && BMI < 24.9) {
      return 'You are of normal weight.';
    } else if (BMI > 25.0 && BMI < 29.9) {
      return 'You are overweight.';
    } else if (BMI > 30.0) {
      return 'Please seek medical attention immediately.';
    }
    return 'Submit your height and weight info.';
  }

  return (<div>
    <p>Height: {height === '' ? '0' : height}</p>
    <p>Weight: {weight === '' ? '0' : weight}</p>
    <h4>BMI: {isNaN(BMI) ? '0' : BMI.toFixed(1)}</h4>
    <h4>{verdict()}</h4>
  </div>);
};
