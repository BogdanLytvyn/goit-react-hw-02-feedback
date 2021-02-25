import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './buttons.module.css';

export default class FeedbackOptions extends Component {
  render() {
    const { onBtnClick } = this.props;
    return (
      <div className={style.buttons}>
        <button
          type="button"
          className={style.good}
          name="good"
          onClick={onBtnClick}
        >
          Good
        </button>
        <button
          type="button"
          className={style.neutral}
          name="neutral"
          onClick={onBtnClick}
        >
          Neutral
        </button>
        <button
          type="button"
          className={style.bad}
          name="bad"
          onClick={onBtnClick}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
