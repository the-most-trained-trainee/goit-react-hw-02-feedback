import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

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

  countTotalFeedback = () => {
    const initialTotal = this.props.total;
    const aggregateTotal = this.getFeedbacksSum();
    return initialTotal + aggregateTotal;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.props.feedBackStatistic.goodFeedBacks * 100) /
      this.getFeedbacksSum()
    );
  };

  render() {
    const isFeedbackGiven = this.getFeedbacksSum() !== 0;

    return (
      <div>
        <h2>Please, leave feedback</h2>
        <FeedbackOptions
          goodFeedbackIncrement={this.goodFeedbackIncrement}
          neutralFeedbackIncrement={this.neutralFeedbackIncrement}
          badFeedbackIncrement={this.badFeedbackIncrement}
        />

        {isFeedbackGiven && (
          <Statistics
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
            feedBackStatistic={this.props.feedBackStatistic}
          />
        )}
      </div>
    );
  }
}

export default FeedBackStats;
