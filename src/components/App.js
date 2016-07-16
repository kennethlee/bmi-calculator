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
      bmi: ''
    };
    this.onWeightChange = this.onWeightChange.bind(this);
    this.onHeightChange = this.onHeightChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.verdict = this.verdict.bind(this);
  }

  verdict(BMI) {
    if (BMI < 18.5 || BMI > 30.0) {
      return 'Please seek medical attention immediately.';
    } else if (BMI > 18.5 && BMI < 24.9) {
      return 'You are of normal weight.';
    } else if (BMI > 25.0 && BMI < 29.9) {
      return 'You are overweight.';
    }
    return 'Submit your height and weight info.';
  }

  onWeightChange(event) {
    this.setState({ weight: event.target.value });
  }

  onHeightChange(event) {
    this.setState({ height: event.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    let { height, weight } = this.state;

    this.setState({
      height: 0,
      weight: 0,
      bmi: (weight / ( height * height )) * 703
    })
  }

  render() {
    return (<div className={`${styles.main} text-center`}>
      <h2 className={`${styles.title} text-center`}>BMI Calculator</h2>
      <div className={`${styles.body}`}>
        <Result bmi={this.state.bmi}
                verdict={this.verdict} />
        <InputForm onFormSubmit={this.handleFormSubmit}
                   onHeightChange={this.onHeightChange}
                   onWeightChange={this.onWeightChange}
                   height={this.state.height}
                   weight={this.state.weight} />
      </div>
    </div>);
  }
}
