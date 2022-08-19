import React from 'react';
import FeedbackOptions from './FeedbackOptions';

class FeedBackStats extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  goodFeedbackIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedbackIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedbackIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const initialTotal = this.props.total;
    const aggregateTotal = Object.values(this.state).reduce((x, y) => x + y);
    return initialTotal + aggregateTotal;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good * 100) /
      Object.values(this.state).reduce((x, y) => x + y)
    );
  };

  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <FeedbackOptions
          goodFeedbackIncrement={this.goodFeedbackIncrement}
          neutralFeedbackIncrement={this.neutralFeedbackIncrement}
          badFeedbackIncrement={this.badFeedbackIncrement}
        />
        <h2>Statistics</h2>
        <ul>
          <li>
            <span>Good {this.state.good}</span>
          </li>
          <li>
            <span>Neutral {this.state.neutral}</span>
          </li>
          <li>
            <span> Bad{this.state.bad}</span>
          </li>
          <li>
            <span>Total {this.countTotalFeedback()}</span>
          </li>
          <li>
            <span>
              Positive Feedback
              {this.countTotalFeedback() === 0
                ? 0
                : this.countPositiveFeedbackPercentage()}{' '}
              %
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedBackStats;
