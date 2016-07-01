import React, { Component } from 'react';

import styles from './App.css';
import InputForm from './InputForm';
import Result from './Result';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '',
      weight: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(height, weight) {
    this.setState({
      height,
      weight,
    });

    console.log('Height is', this.state.height);
    console.log('Weight is', this.state.weight);
  }

  render() {
    return (<div className={styles.app}>
      <h2 className={styles.center}>BMI Calculator</h2>
      <InputForm handleFormSubmit={this.handleFormSubmit} />
      <Result {...this.state} />
      <button onClick={this.onClickReset}>Reset</button>
    </div>);
  }
}
