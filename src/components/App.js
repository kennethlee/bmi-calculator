import React, { Component } from 'react';

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

  onClickReset(event) {
    this.setState({
      height: '',
      weight: '',
    });
  }

  render() {
    return (<div>
      <h3>BMI Calculator</h3>
      <InputForm handleFormSubmit={this.handleFormSubmit} />
      <Result {...this.state} />
    </div>);
  }
}
