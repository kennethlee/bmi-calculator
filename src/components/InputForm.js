import React, { Component } from 'react';
import styles from './InputForm.css';

export default class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: '',
      weight: '',
    };

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
      });
    }
  }

  render() {
    return (<form onSubmit={this.onFormSubmit} className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className={`${styles.input} form-control`}
          value={this.state.height}
          onChange={this.onHeightChange}
          placeholder="Height (inches)"
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          className={`${styles.input} form-control`}
          value={this.state.weight}
          onChange={this.onWeightChange}
          placeholder="Weight (pounds)"
        />
      </div>
      <br />
      <button
        type="submit"
        className={`${styles.butt} btn btn-default`}
      >
        Submit
      </button>
    </form>);
  }
}
