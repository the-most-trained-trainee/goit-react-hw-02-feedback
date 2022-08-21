const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  feedBackStatistic,
}) => {
  return (
    <div>
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
            {countPositiveFeedbackPercentage()} %
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
