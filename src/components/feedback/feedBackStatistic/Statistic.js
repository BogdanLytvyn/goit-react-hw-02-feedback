import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from './notification/Notification';
import style from './feedStatInfo.module.css';

export default class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positaveFeedback } = this.props;
    return (
      <>
        {total > 0 ? (
          <div className={style.statInfo}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total > 0 ? total : '0'} </p>
            <p>
              Positive feedback: {positaveFeedback > 0 ? positaveFeedback : '0'}
              %
            </p>
          </div>
        ) : (
          <Notification msg="No feedback given" />
        )}
      </>
    );
  }
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positaveFeedback: PropTypes.number,
};
