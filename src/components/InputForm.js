import React, { Component } from 'react';

export default class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '',
      weight: '',
    }

    this.onHeightChange = this.onHeightChange.bind(this);
    this.onWeightChange = this.onWeightChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onHeightChange(event) {
    this.setState({ height: event.target.value });
  }

  onWeightChange(event) {
    this.setState({ weight: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    let { height, weight } = this.state;

    if (height && weight) {
      this.props.handleFormSubmit(height, weight);

      this.setState({
        height: '',
        weight: '',
      })
    }
  }

  render() {
    return (<form onSubmit={this.onFormSubmit}>
      <input
        placeholder="Your height (inches)"
        value={this.state.height}
        onChange={this.onHeightChange}
      />
      <input
        value={this.state.weight}
        placeholder="Your Weight (pounds)"
        onChange={this.onWeightChange}
      />
      <button type="submit">Submit</button>
    </form>);
  }
}
