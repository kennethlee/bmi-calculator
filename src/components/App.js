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
    return (<div className={`${styles.main} text-center`}>
      <h2 className={`${styles.title} text-center`}>BMI Calculator</h2>
      <div className={`${styles.body}`}>
        <Result {...this.state} />
        <InputForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    </div>);
  }
}
