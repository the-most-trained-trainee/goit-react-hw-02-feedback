import React from 'react';

const Statistics = ({countTotalFeedback, countPositiveFeedbackPercentage, feedBackStatistic}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <span>Good {feedBackStatistic.goodFeedBacks}</span>
        </li>
        <li>
          <span>Neutral {feedBackStatistic.neutralFeedBacks}</span>
        </li>
        <li>
          <span> Bad {feedBackStatistic.badFeedBacks}</span>
        </li>
        <li>
          <span>Total {countTotalFeedback()}</span>
        </li>
        <li>
          <span>
            Positive Feedback
            {countTotalFeedback() === 0
              ? 0
              : countPositiveFeedbackPercentage()}{' '}
            %
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
