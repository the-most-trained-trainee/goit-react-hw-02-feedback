import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import FeeBackStats from './FeedBackStatsStyled';
import PropTypes from 'prop-types';

class FeedBackStats extends React.Component {
  goodFeedbackIncrement = () => {
    this.props.stateUpdate({
      goodFeedBacks: this.props.feedBackStatistic.goodFeedBacks + 1,
    });
  };

  neutralFeedbackIncrement = () => {
    this.props.stateUpdate({
      neutralFeedBacks: this.props.feedBackStatistic.neutralFeedBacks + 1,
    });
  };

  badFeedbackIncrement = () => {
    this.props.stateUpdate({
      badFeedBacks: this.props.feedBackStatistic.badFeedBacks + 1,
    });
  };

  getFeedbacksSum = () =>
    Object.values(this.props.feedBackStatistic).reduce((x, y) => x + y);

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.props.feedBackStatistic.goodFeedBacks * 100) /
        this.getFeedbacksSum()
    );
  };

  render() {
    const isFeedbackGiven = this.getFeedbacksSum() !== 0;

    return (
      <FeeBackStats>
        <h2>Please, leave feedback</h2>
        <FeedbackOptions
          goodFeedbackIncrement={this.goodFeedbackIncrement}
          neutralFeedbackIncrement={this.neutralFeedbackIncrement}
          badFeedbackIncrement={this.badFeedbackIncrement}
        />
        <h2>Statistics</h2>
        {!isFeedbackGiven ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            countTotalFeedback={this.getFeedbacksSum}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
            feedBackStatistic={this.props.feedBackStatistic}
          />
        )}
      </FeeBackStats>
    );
  }
}

FeedBackStats.propTypes = {
  feedBackStatistic: PropTypes.shape({
    goodFeedBacks: PropTypes.number.isRequired,
    neutralFeedBacks: PropTypes.number.isRequired,
    badFeedBacks: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  stateUpdate: PropTypes.func.isRequired,
};

export default FeedBackStats;
