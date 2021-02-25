import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  render() {
    const { onBtnClick } = this.props;
    return (
      <div>
        <button type="button" name="good" onClick={onBtnClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={onBtnClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={onBtnClick}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
