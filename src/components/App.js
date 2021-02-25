import React, { Component } from 'react';
import FeedbackOptions from './feedback/feedbackOptions/FeedbackOptions';
import Statistic from './feedback/feedBackStatistic/Statistic';
import Section from './feedback/section/section';
import style from './app.module.css';

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
      <div className={style.statBox}>
        <Section title="Please leave feedback">
          <FeedbackOptions onBtnClick={this.handleButtonClick} />
        </Section>
        <Section title="Statistic">
          {
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positaveFeedback={positaveFeedback}
            />
          }
        </Section>
      </div>
    );
  }
}
