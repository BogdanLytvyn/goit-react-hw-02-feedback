import React, { Component } from 'react';
import FeedbackOptions from './feedback/feedbackOptions/FeedbackOptions';
import Statistic from './feedback/feedBackStatistic/Statistic';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      const total = prevState.good + prevState.neutral + prevState.bad;
      return { total };
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      const positaveFeedback = Math.round(
        (prevState.good /
          (prevState.good + prevState.neutral + prevState.bad)) *
          100,
      );
      return { positaveFeedback };
    });
  };

  handleButtonClick = ({ target }) => {
    const { name } = target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad, total, positaveFeedback } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions onBtnClick={this.handleButtonClick} />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positaveFeedback={positaveFeedback}
        />
      </>
    );
  }
}
