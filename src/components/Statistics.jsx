import PropTypes from 'prop-types';
import StyledStatistics from './StatisticsStyled';

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  feedBackStatistic,
}) => {
  return (
    <StyledStatistics>
      <ul>
        <li>
          <span>Good </span>
          <span>{feedBackStatistic.goodFeedBacks}</span>
        </li>
        <li>
          <span>Neutral </span>
          <span>{feedBackStatistic.neutralFeedBacks}</span>
        </li>
        <li>
          <span>Bad </span> <span>{feedBackStatistic.badFeedBacks}</span>
        </li>
        <li>
          <span>Total </span>
          <span>{countTotalFeedback()}</span>
        </li>
        <li>
          <span>Positive Feedback(%) </span>
          <span>{countPositiveFeedbackPercentage()}</span>
        </li>
      </ul>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  feedBackStatistic: PropTypes.shape({
    goodFeedBacks: PropTypes.number.isRequired,
    neutralFeedBacks: PropTypes.number.isRequired,
    badFeedBacks: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
