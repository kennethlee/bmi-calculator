import React from 'react';

export default (props) => {
  const { height, weight } = props;
  const BMI = (weight / ( height * height )) * 703;

  return (<div>
    <p>Height: {height === '' ? '0' : height}</p>
    <p>Weight: {weight === '' ? '0' : weight}</p>
    <h4>BMI: {isNaN(BMI) ? '0' : BMI.toFixed(1)}</h4>
  </div>);
};
