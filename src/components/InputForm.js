import React, { Component } from 'react';
import styles from './InputForm.css';

export default class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<form onSubmit={this.props.onFormSubmit} className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className={`${styles.input} form-control`}
          value={this.props.height}
          onChange={this.props.onHeightChange}
          placeholder="Height (inches)"
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          className={`${styles.input} form-control`}
          value={this.props.weight}
          onChange={this.props.onWeightChange}
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
