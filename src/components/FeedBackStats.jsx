import React from 'react';

class FeedBackStats extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  countTotalFeedback = () => Object.values(this.state).reduce((x, y) => x + y);

  countPositiveFeedbackPercentage = () =>
    (this.state.good * 100) / Object.values(this.state).reduce((x, y) => x + y);

  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <ul>
          <li>
            <button type="button" onClick={this.goodFeedbackIncrement}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.neutralFeedbackIncrement}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.badFeedbackIncrement}>
              Bad
            </button>
          </li>
        </ul>
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
              Positive Feedback{' '}
              {this.countTotalFeedback() === 0
                ? 0
                : this.countPositiveFeedbackPercentage()}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedBackStats;
